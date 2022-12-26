import Head from 'next/head'
import Image from 'next/image'
import WebHeadder from '../components/WebHeadder'
import styles from '../styles/Home.module.css'
import { ChakraProvider, Input, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Footer from '../components/footer'
import { home_page_view } from '../analitics'

export default function Home({ new_posts, tech_posts }: any) {
  const [email, setEmail] = useState('')
  const handleChange = (event: any) => setEmail(event.target.value)

  useEffect(() => {
    window.onload = () => {
      home_page_view()
    }
  }, [])

  return (
    <ChakraProvider>
      <Head>
        <title>NewsNugget</title>
        <meta name="description" content="What's the news today?" />
        <meta name="viewport" content="width=600" />
        <link rel="icon" href="/favicon.png" type='image/png' />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6016171056934985" crossOrigin="anonymous"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6016171056934985" crossOrigin="anonymous"></script>
      </Head>

      <WebHeadder page="home" />

      <main className={styles.main}>

        <header className={styles.header}>
          <h1 className={styles.title}>What's <span style={{color: "#ffcd70"}}>the</span> <br />new<span style={{color: "#ffcd70"}}>s</span> today?</h1>
          <h1 className={styles.sub_title}>No more BS <span style={{color: "#ffcd70"}}>Newsletters</span></h1>

          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <Input placeholder='Your Email' value={email} onChange={handleChange} textAlign="center" size='lg' borderColor="#ffcd70" width={275} height="2cm" borderRadius={0} color="black" backgroundColor="white" marginTop="2cm" fontSize={22.5} />
            <Button backgroundColor="#ffcd70" onClick={() => window.location.assign(`/addtoletter?email="${email}"`)} colorScheme="orange" color="white" marginTop="2cm" height="2cm" width={190} borderRadius={0} fontSize={22.5}>Subscribe!</Button>
          </div>
        </header>

        <section className={styles.container}>
          <h1 className={styles.title2}>You might like</h1>
          {
            new_posts.map((data2: any, index: number) => (
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
                    <section className={styles.topic}>{data2.topic}</section>
                    <h1 className={styles.published}>Published: {data2.posted_time}</h1>
                  </div>

                  <h1 className={styles.article_title}>{data2.title}</h1>
                  <p className={styles.article_p}>{data2.subtitle}</p>
                </div>
              </article>
            ))
          }        
        </section>

        <section className={styles.container}>
          <h1 className={styles.title2}>Tech</h1>
          {
            tech_posts.map((data2: any, index: number) => (
              <article onClick={() => {window.location.assign(`/story?title="${data2["title"]}"`)}} className={styles.article}>
                <Image
                  loader={() => data2.banner_url}
                  className={styles.banner}
                  alt='Image of the event'
                  src={data2.banner_url}
                  width={1280}
                  height={720}
                  loading="lazy"
                />   

                <div style={{alignSelf: "center"}}>

                  <div className={styles.more_info}>
                    <section className={styles.topic}>{data2.topic}</section>
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
    </ChakraProvider>
  )
}

export async function getServerSideProps() {
  // FIND POSTS
  const { Client } = require('pg')
  
  const client = new Client({
      host: '161.35.30.10',
      port: 5432,
      database: "NewsNugget",
      user: 'api',
      password: 'M8CZEYvHLg2huCWEeFDSOPr2LDQA8T8b1G0oO8fhUNc2BkvSFGKEQDYOmWyuvGzc7fU865jnmeJ8rTbq2EltEc79mfKUSJWZhXGlqohSD5HcVCn7gpH91H6XqC5Qa0e6fh227KLKoIL7PKhj6WS0TnhGdS05XiKRu2uZdpdY47JqRxs5m2wZP7P9FrNTp0ISDOSD5TDJVc2Oe5TpCcbW2OYjqWOifHVFq98ZZSSE7L8GfvwwkMfEjJNxm1PQyqdP47cSzJ27ScV2R2M5RGZcR5Dq1w46Cr3TDeiNztMobW0iub7c7Wp2OXhlzO5KV5EEFM7fdPuW4gikmHS3fVaoZeKajGCqb7',
  })

  await client.connect()

  let new_posts = await client.query(`SELECT * FROM website.blog_posts ORDER BY posted_time DESC LIMIT 5 OFFSET 0;`, [])
  new_posts = JSON.parse(JSON.stringify(new_posts.rows))

  let tech_posts = await client.query(`SELECT * FROM website.blog_posts WHERE topic='Tech' ORDER BY posted_time DESC LIMIT 4;`, [])
  tech_posts = JSON.parse(JSON.stringify(tech_posts.rows))

  await client.end()

  return { props: {new_posts: new_posts, tech_posts: tech_posts}}
}