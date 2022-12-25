import Head from 'next/head'
import Image from 'next/image'
import styles from './styles/Author.module.css'

export default function Author(props: any) {
  return (
    <section className={styles.author}>
      <Image
        loader={() => props.author_pic}
        className={styles.author_pic}
        alt='Picture of the event'
        src={props.author_pic}
        width={100}
        height={100}
      />  

      <div className={styles.info}>
        <h3 style={{color: "grey", fontWeight: "400", fontSize: "19px"}}>Published By</h3>
        <h1 style={{color: "black"}}>{props.author}</h1>
      </div>
    </section>
  )
}
