import Head from 'next/head'
import Image from 'next/image'
import styles from './styles/JoinLetter.module.css'
import { ChakraProvider, Input, Button } from '@chakra-ui/react'

export default function JoinLetter(props: any) {
  return (
    <ChakraProvider>
      <main className={styles.main}>

        <div style={{display: "flex", width: "100%", justifyContent: "center", alignItems: "center"}}>
          <h1 className={styles.sub_title}>Join the newsletter</h1>
          <div className={styles.button}>
            Subscribe!
          </div>
        </div>
      </main>      
    </ChakraProvider>
  )
}
