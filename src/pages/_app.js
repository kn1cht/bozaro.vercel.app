import "normalize.css/normalize.css";
import "../styles/globals.scss";
import { Analytics } from '@vercel/analytics/react';

import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>btr</title>
      <meta name="description" content="いいいいイキってすみません…" />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default App;
