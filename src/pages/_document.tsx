/* eslint-disable react/react-in-jsx-scope */
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="jp">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#d2d2d2" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
