import { FC } from 'react'
import { NavBar } from './NavBar'
import Head from 'next/head'
import Script from 'next/script'
import style from './layout.module.css'

export const siteTitle = 'NASA photos info'

type Props = {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="NASA photos information"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <main className={style.container}>
        <NavBar />
        {children}
      </main>
    </>
  )
}
