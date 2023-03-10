import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { useEffect } from 'react'
import { article_view } from '../analitics'
import Article from '../components/article'
import Author from '../components/author'
import Footer from '../components/footer'
import Header from '../components/headder'
import JoinLetter from '../components/join_letter'
import WebHeadder from '../components/WebHeadder'
import styles from '../styles/Story.module.css'

export default function Story({ data }: any) {

  useEffect(() => {
    window.onload = () => {
      article_view(data["title"])
    }
  }, [])

  return (
    <main className={styles.main}>
      <Head>
        <title>{data["title"]}</title>

        <meta property="og:title" content={data["title"]} />
        <meta name="description" content={data["subtitle"]} />
        <meta property="og:description" content={data["subtitle"]} />
        <meta property="og:image" content={data["banner_url"]} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_GB" />
        <meta name="author" content={data["author"]} />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:url" content={"https://newsnugget.net/" + data["title"]} />

        <meta name="viewport" content="width=600" />
        <link rel="icon" href="/favicon.png" type='image/png' />
        <Script
          async={true}
          strategy="beforeInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6016171056934985"
        />
      </Head>

      <WebHeadder page="blog" />

      <Header title={data["title"]} subtitle={data["subtitle"]} banner={data["banner_url"]} posted_time={data["posted_time"]} topic={data["topic"]} />

      <JoinLetter />

      <Article article={data["article"]}  />

      <Author author={data["author"]} author_pic={data["author_pic"]} />

      <Footer />
    </main>
  )
}

export async function getServerSideProps({ query }: any) {

  // GET TITLE
  let title = query.title.split("")
  title.splice(0, 1)
  title.splice(-1, 1)
  title = title.join('')

  // FIND POST
  const { Client } = require('pg')

  const client = new Client({
      host: '127.0.0.1',
      port: 5432,
      database: "NewsNugget",
      user: 'api',
      password: 'test',
  })
  await client.connect()

  const res = await client.query('SELECT * FROM website.blog_posts WHERE title=$1', [title])

  await client.end()

  return { props: {
    data: res.rows[0]
  }}
}
