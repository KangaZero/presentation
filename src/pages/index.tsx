/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

// constants
import startText from "@/constants/startText";

// components
import Start from "@/components/Start";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Presentation</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d2d2d2" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Start
        firstName={startText.firstName}
        lastName={startText.lastName}
        title={startText.title}
        firstNameJp={startText.firstNameJp}
        lastNameJp={startText.lastNameJp}
        titleJp={startText.titleJp}
        subTitle={startText.subTitle}
        subTitleJp={startText.subTitleJp}
      />
    </>
  );
}
