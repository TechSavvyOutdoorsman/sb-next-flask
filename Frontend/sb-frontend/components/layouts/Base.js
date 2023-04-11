import Head from "next/head";
import { Rubik } from "@next/font/google";
import { useEffect, useState } from "react";
import Footer from "../base/footer/Footer";
import Navbar from "../base/nav/Navbar";

const rubik = Rubik({ subsets: ["latin"] });

const BaseLayout = ({ children, router, }) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  
  // useEffect(() => {
  //   fetch('/status/')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //       setLoading(false)
  //     })
  // }, [])

  // console.log(data)
    
  return (
    <>
      <Head>
        <title>SweatBets.io - Gaming Done Right.</title>
        <meta
          name='description'
          content='Win Money Playing Your Favorite Video Games'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='canonical' href='https://sweatbets.io' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/head/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/head/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/head/favicon-16x16.png'
        />
        <link rel='manifest' href='/head/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/head/public/safari-pinned-tab.svg'
          color='#22d37d'
        />
        <link rel='shortcut icon' href='/head/public/favicon.ico' />
        <meta name='msapplication-TileColor' content='#1f1e1f' />
        <meta
          name='msapplication-config'
          content='/head/public/browserconfig.xml'
        />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
     
        <meta name='theme-color' content='#1F1E1F' />
        <meta name='robots' content='index, follow' />
      </Head>
      <main className={rubik.className}>
        <div className='overflow-hidden min-h-screen bg-mono-900 flex flex-col items-center '>
          <Navbar router={router.asPath} />
                  <div className='px-3 py-12 max-w-6xl w-full' >{children}</div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default BaseLayout;
