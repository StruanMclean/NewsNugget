import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import WebHeadder from '../components/WebHeadder'
import styles from '../styles/Topic.module.css'

export default function Topic({ data, topics }: any) {

  return (
    <main className={styles.main}>
      <Head>
        <title>NewsNugget</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=600" />
        <link rel="icon" href="/favicon.png" type='image/png' />
      </Head>

      <WebHeadder page="topics" />

      <section className={styles.container}>
        <h1 className={styles.title}>{topics}</h1>
        {
          data.map((data2: any, index: number) => (
            <article onClick={() => {window.location.assign(`/story?title="${data2["title"]}"`)}} className={styles.article}>
              <Image
                loader={() => data2.banner_url}
                className={styles.banner}
                alt='Image of the event'
                src={data2.banner_url}
                width={1280}
                height={720}
              />   

              <div style={{alignSelf: "center"}}>

                <div className={styles.more_info}>
                  <section className={styles.topic}>{topics}</section>
                  <h1 className={styles.published}>Published: {data2.posted_time}</h1>
                </div>

                <h1 className={styles.article_title}>{data2.title}</h1>
                <p className={styles.article_p}>{data2.subtitle}</p>
              </div>
            </article>
          ))
        }        
      </section>

      <Footer />
    </main>
  )
}

export async function getServerSideProps({ query }: any) {
    // GET TITLE
    let topic = query.topic
  
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
  
    const res = await client.query('SELECT * FROM website.blog_posts WHERE topic=$1', [topic])
  
    return { props: {
      data: res.rows,
      topics: topic
    }}
  }