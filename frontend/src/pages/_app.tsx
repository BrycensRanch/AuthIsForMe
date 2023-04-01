import '../styles/global.css';

import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';


const MyApp = ({ Component, pageProps }: AppProps) => (
      <>
      <NextNProgress />

    <Component {...pageProps} />
        </>

);

export default MyApp;
