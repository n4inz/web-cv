import 'tailwindcss/tailwind.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 2,
  color: "#FE59SE",
  className:"z-50",
  delay:100
})
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>  
    <Head>
   

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
    </>
  )
  

}

export default MyApp




