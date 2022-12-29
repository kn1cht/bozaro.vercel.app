import "normalize.css/normalize.css";
import "../styles/globals.scss";

import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>btr</title>
      <meta name="description" content="いいいいイキってすみません…" />
      <meta property="og:url" content="http://bozaro.vercel.app" />
      <meta property="og:site_name" content="btr" />
      <meta property="og:description" content="いいいいイキってすみません…" />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
