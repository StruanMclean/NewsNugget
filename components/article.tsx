import Head from 'next/head'
import Image from 'next/image'
import styles from './styles/Article.module.css'

export default function Article(props: any) {
  return (
    <article className={styles.article}>
      <p className={styles.article_text}>
        {props.article}
      </p>
    </article>
  )
}
