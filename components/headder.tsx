import Head from 'next/head'
import Image from 'next/image'
import styles from './styles/Header.module.css'

export default function Header(props: any) {
  return (
    <header className={styles.header}>

      <div className={styles.more_info}>
        <section className={styles.topic}>
          {props.topic}
        </section>

        <h1 className={styles.published}>Published: {props.posted_time}</h1>
      </div>

      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.subtitle}>{props.subtitle}</p>


      <div className={styles.image_container}>
        <Image
          loader={() => props.banner}
          className={styles.banner}
          alt='Image of the event'
          src={props.banner}
          width={1280}
          height={720}
          loading="lazy"
        />        
      </div>
    </header>
  ) 
}
