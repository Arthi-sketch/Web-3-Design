import "@/styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Web 3</title>
        <meta name="description" content="Blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='header'>
        Lorem Ipsum is simply dummy text of the printing
      </div>
      <Component {...pageProps} />
    </>
  );
}
