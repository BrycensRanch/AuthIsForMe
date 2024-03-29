import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';

type IMetaProperties = {
	title: string;
	description: string;
	canonical?: string;
};

const Meta = (properties: IMetaProperties) => {
	const router = useRouter();

	return (
		<>
			<Head>
				<meta charSet="utf8" key="charset" />
				<meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
				<link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />
				<meta name="application-name" content={`${AppConfig.site_name}`} />
				<meta name="description" content={`${AppConfig.description}`} />
				<meta name="format-detection" content="telephone=no" />
				<link rel="shortcut icon" href={`${router.basePath}/favicon.ico`} />
			</Head>
			<NextSeo
				title={properties.title}
				description={properties.description}
				canonical={properties.canonical}
				themeColor="#AAFF00"
				openGraph={{
					title: properties.title,
					description: properties.description || AppConfig.description,
					url: properties.canonical,
					locale: AppConfig.locale,
					site_name: AppConfig.site_name,
				}}
			/>
		</>
	);
};

export { Meta };
