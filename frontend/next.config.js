// /* eslint-disable global-require */
// /* eslint-disable no-param-reassign */
// /* eslint-disable import/no-extraneous-dependencies */

// all of these are the default values...

const { withSentryConfig } = require('@sentry/nextjs');

require('dotenv-mono').load();

require(`dotenv-defaults`).config({
	path: './.env',
	encoding: 'utf8',
	defaults: './.env.example', // This is new
});
// We recommend you importing your newly created file in your NextConfig.
// This will make sure your environment variables are validated at build time which will save you a lot of time and headaches down the road.
// The source of pain and suffering
// Just use process.env instead in this file - Next.js hasn't initialized yet
import('./src/env.mjs');

const { Config } = require('next-recompose-plugins');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');
const withBundleAnalyzer = require('@next/bundle-analyzer');

const { join } = require('node:path');

// const BrotliPlugin = require('brotli-webpack-plugin');

// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const ContentSecurityPolicy =
	process.env.CSP === 'production'
		? `
  default-src 'self';
  script-src 'authisforme.matomo.cloud';
  child-src authisfor.me ${process.env.BACKEND_SERVER || 'http://localhost:8000'};
  style-src 'self' authisfor.me ${process.env.BACKEND_SERVER || 'http://localhost:8000'};
  img-src 'self' namemc.com crafatar.com authisfor.me livzmc.net avatars.githubusercontent.com ;
  font-src 'self';
`
		: '';
const headers = [
	// This header controls DNS prefetching, allowing browsers to proactively perform domain name resolution on external links, images, CSS, JavaScript, and more.
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	// Although this protection is not necessary when sites implement a strong Content-Security-Policy disabling the use of inline JavaScript ('unsafe-inline'), it can still provide protection for older web browsers that don't support CSP.
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block',
	},
	// Old browsers... Again.
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	// Stops bad things from happening.
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'Referrer-Policy',
		value: 'origin-when-cross-origin',
	},
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replaceAll(/\s{2,}/g, ' ').trim(),
	},
];
const basedConfiguration = {
	// Next.js Eslint setup, see https://nextjs.org/docs/basic-features/eslint
	eslint: {
		dirs: ['.'],
	},
	// Removes the NextJS poweredByHeader. We don't need it.
	poweredByHeader: false,
	// I'm not entirely sure what this does, but I'm not going to touch it.
	// trailingSlash: true,
	images: {
		domains: ['crafatar.com', 'namemc.com', 'livzmc.net', 'tydiumcraft.net'],
		formats: ['image/avif', 'image/webp'],
	},
	experimental: {
		outputFileTracingRoot: join(__dirname, '../'),
		esmExternals: 'loose',
	},
	// Requires SWC from Next.js
	// Removes console.log from production builds.
	// Keeps console.error though.
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
		// exclude: ['error'],
	},
	// The starter code load resources from `public` folder with `router.basePath` in React components.
	// So, the source code is "basePath-ready".
	// You can remove `basePath` if you don't need it.
	basePath: '',
	rewrites: () => {
		return [
			{
				source: '/unicornz/:path',
				destination: `${process.env.NEXT_PUBLIC_MATOMO_URL}/matomo.php`,
			},
			{
				source: '/unicornz',
				destination: `${process.env.NEXT_PUBLIC_MATOMO_URL}/matomo.js`,
			},
		];
	},
	// Helps to identify unsafe lifecycles, legacy API usage, and a number of other features.
	reactStrictMode: true,
	sentry: {
		hideSourceMaps: true,
		silent: true,
		tunnelRoute: '/sentry',
		// disableServerWebpackPlugin: true,
	},
	// Copies only the necessary files for a production deployment including select files in node_modules.
	// Static assets should be uploaded to a CDNN
	output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
	//  Use React while developing and only replace it with Preact in production.
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: '/:path*',
				headers,
			},
		];
	},
};
const configWithPlugins = new Config(basedConfiguration)
	.applyPlugin((phase, args, config) => {
		return withBundleAnalyzer({ enabled: phase === PHASE_PRODUCTION_BUILD })(config);
	}, '@next/bundle-analyzer')
	.applyPlugin((phase, args, config) => {
		// Sentry plugin does not follow community guidelines according valid plugin shape

		let newConfig = withSentryConfig(config, config);

		if (typeof newConfig === 'function') newConfig = newConfig(phase, basedConfiguration.sentry);

		return newConfig;
	}, '@sentry/nextjs')
	.build();
// if (process.env.ANALYZE === 'true') {
// configWithPlugins.applyPlugin((phase, args, config) => {
//   // enhance the config with the desired plugin and return it back
//   console.log('analyzer is BEING APPLIED')
// 	return withBundleAnalyzer(config)(config);
// }, "BundleAnalyzer");
// }
// if (process.env.NODE_ENV === 'production') {
// We know you. We know everything about you. Our domination begins now

// configWithPlugins.applyPlugin((phase, config) => {
// 	// enhance the config with the desired plugin and return it back
// 	return withSentryConfig({
// 		// Additional config options for the Sentry Webpack plugin. Keep in mind that
// 		// the following options are set automatically, and overriding them is not
// 		// recommended:
// 		//   release, url, org, project, authToken, configFile, stripPrefix,
// 		//   urlPrefix, include, ignore
// 		tunnelRoute: '/Rainbowz',
// 		project: 'javascript-nextjs',
// 		org: 'github-student-developer',
// 		authToken: process.env.SENTRY_AUTH_TOKEN,
// 		hideSourceMaps: true,
// 		debug: true,
// 		silent: false, // Suppress all logs
// 		// For all available options, see:
// 		// https://github.com/getsentry/sentry-webpack-plugin#options.
// 	})(config);
// });
// }

// This breaks the plugins I think
// const nextConfigWithPluginsAndDefaults = {
//   ...basedConfiguration,
//   ...configWithPlugins
// }
// console.log(nextConfigWithPluginsAndDefaults, configWithPlugins(basedConfiguration).then(console.log))
module.exports = configWithPlugins;
