import Image from 'next/image'
import styles from './styles/WebHeadder.module.css'
import { motion, useScroll, useSpring } from "framer-motion"
import {
    ChakraProvider,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'

export default function WebHeadder(props: any) {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress)

    return (
        <ChakraProvider>
            <header className={styles.container}>
                <section className={styles.headder}>
                    <section onClick={() => window.location.assign("/")} className={styles.logo_and_h1}>
                        <Image
                            src="/favicon.png"
                            alt="Picture of the Logo" 
                            width={50}
                            height={50}
                        />            
                        <h1 className={styles.title}>NewsNugget</h1>
                    </section>     

                    <section className={styles.nav}>
                        <nav className={styles.nav_bar}>
                            <a onClick={() => window.location.assign("/")} className={styles.nav_bar_item} style={{borderBottomWidth: props.page == "home" ? 2 : 0}}>Home</a>

                            <section>
                                <Menu>
                                    <MenuButton>
                                        Topics
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem onClick={() => {window.location.assign(`/topic?topic=Tech`)}}>Tech</MenuItem>
                                        <MenuItem onClick={() => {window.location.assign(`/topic?topic=Finance`)}}>Finance</MenuItem>
                                        <MenuItem onClick={() => {window.location.assign(`/topic?topic=Entertainment`)}}>Entertainment</MenuItem>
                                    </MenuList>
                                </Menu>                                
                            </section>

                            <a onClick={() => window.location.assign("/closedbata")} className={styles.nav_bar_item} style={{borderBottomWidth: props.page == "newsletters" ? 2 : 0}}>Newsletters</a>
                        </nav>

                        <div onClick={() => window.location.assign("/")} className={styles.button}>
                            Subscribe!
                        </div>
                    </section>                    
                </section>
    

                <motion.div style={{ scaleX, backgroundColor: "#F4900C", height: 4 }} /> 
            </header>               
        </ChakraProvider>
    )
}
