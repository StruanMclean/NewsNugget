import Head from 'next/head'
import Image from 'next/image'
import styles from './styles/Footer.module.css'
import { ChakraProvider, Input, Button } from '@chakra-ui/react'
import { useState } from 'react'

export default function Footer(props: any) {
  const [email, setEmail] = useState('')
  const handleChange = (event: any) => setEmail(event.target.value)

  return (
    <ChakraProvider>
      <footer className={styles.footer}>
        <section className={styles.logo_and_h1}>
          <Image
              src="/favicon.png"
              alt="Picture of the Logo" 
              width={50}
              height={50}
          />            
          <h1 className={styles.title}>NewsNugget</h1>
        </section>  

        <h1 className={styles.sub_title}>No more BS <span style={{color: "orange"}}>Newsletters</span></h1> 
        <p className={styles.Subscribe}>Subscribe for <span style={{color: "orange"}}>FREE</span> today</p>

        <div className={styles.subscribe_form}>
          <Input placeholder='Your Email' value={email} onChange={handleChange} textAlign="center" size='md' borderColor="#F4900C" width={275} height="1.5cm" borderRadius={0} color="black" backgroundColor="white" marginTop="2cm" fontSize={19} />
          <Button backgroundColor="#F4900C" onClick={() => window.location.assign(`/addtoletter?email="${email}"`)} colorScheme="orange" color="white" marginTop="2cm" height="1.5cm" width={190} borderRadius={0} fontSize={19}>Subscribe!</Button>
        </div>
      </footer>      
    </ChakraProvider>
  )
}
