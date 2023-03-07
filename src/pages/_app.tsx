import '@/styles/globals.css';
import '@/styles/start.scss';
import '@/styles/about.scss';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';


export default function App({ Component, pageProps, router }: AppProps) {
  return (
  <AnimatePresence mode="wait">
    <Component {...pageProps} key={router.route}/>
  </AnimatePresence>
  )
}
