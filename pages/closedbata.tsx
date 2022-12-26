import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import WebHeadder from '../components/WebHeadder'
import styles from '../styles/closedbata.module.css'

export default function closedbata() {
    return (
        <main className={styles.main}>
            <Head>
                <title>NewsNugget</title>
                <meta name="viewport" content="width=600" />
                <link rel="icon" href="/favicon.png" type='image/png' />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6016171056934985" crossOrigin="anonymous"></script>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6016171056934985" crossOrigin="anonymous"></script>
            </Head>

            <WebHeadder page="newsletters" />

            <h1 className={styles.title}>We are in <span style={{color: "yellow"}}>closed bata</span> so you won't get a newsletter yet.<br />Add your email to the form below to join our waiting list instead 😉</h1>

            <Footer />
        </main>
    )
}