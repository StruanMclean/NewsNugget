import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import WebHeadder from '../components/WebHeadder'
import styles from '../styles/Atl.module.css'

export default function AddToLetter({ email, error }: any) {
    return (
        <main className={styles.main}>
            <Head>
                <title>NewsNugget</title>
                <meta name="viewport" content="width=600" />
                <link rel="icon" href="/favicon.png" type='image/png' />
            </Head>

            <WebHeadder />

            <h1 className={styles.title}>We are in <span style={{color: "yellow"}}>closed bata</span> so you won't get a newsletter yet.<br />So we added you to our waiting list instead 😉<br />{email}</h1>

            <Footer />
        </main>
    )
}

export async function getServerSideProps({ query }: any) {
    // GET TITLE
    let email = query.email.split("")
    email.splice(0, 1)
    email.splice(-1, 1)
    email = email.join('')

    if (!email.includes("@")) {
        return { props: {email: email, error: true}}
    }

    // FIND POST
    const { Client } = require('pg')
    
    const client = new Client({
        host: '161.35.30.10',
        port: 5432,
        database: "NewsNugget",
        user: 'api',
        password: 'M8CZEYvHLg2huCWEeFDSOPr2LDQA8T8b1G0oO8fhUNc2BkvSFGKEQDYOmWyuvGzc7fU865jnmeJ8rTbq2EltEc79mfKUSJWZhXGlqohSD5HcVCn7gpH91H6XqC5Qa0e6fh227KLKoIL7PKhj6WS0TnhGdS05XiKRu2uZdpdY47JqRxs5m2wZP7P9FrNTp0ISDOSD5TDJVc2Oe5TpCcbW2OYjqWOifHVFq98ZZSSE7L8GfvwwkMfEjJNxm1PQyqdP47cSzJ27ScV2R2M5RGZcR5Dq1w46Cr3TDeiNztMobW0iub7c7Wp2OXhlzO5KV5EEFM7fdPuW4gikmHS3fVaoZeKajGCqb7',
    })

    await client.connect()

    try {
        await client.query('INSERT INTO newsletter.emails (email) VALUES ($1)', [email])
    } catch {
        return { props: {email: email, error: true}}
    }
    
    return { props: {email: email, error: false}}
}