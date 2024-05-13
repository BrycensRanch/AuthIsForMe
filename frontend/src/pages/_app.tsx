import '../styles/global.css';
import '../styles/satoshi.css';

import { init } from '@socialgouv/matomo-next';

import { env } from '../env.mjs';

const MATOMO_SITE_ID = env.NEXT_PUBLIC_MATOMO_SITE_ID;

import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		init({ url: '/unicornz', jsTrackerFile: '', phpTrackerFile: 't', siteId: MATOMO_SITE_ID });
	}, []);

	return (
		<>
			<NextNProgress />

			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
