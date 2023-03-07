import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// constants
import startText from '@/constants/startText';

// components
import Start from '@/components/Start';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Start 
      firstName={startText.firstName} 
      lastName={startText.lastName} 
      title={startText.title} 
      firstNameJp={startText.firstNameJp}
      lastNameJp={startText.lastNameJp}
      titleJp={startText.titleJp} 
      subTitle={startText.subTitle}
      subTitleJp={startText.subTitleJp} />
    </>
  )
}