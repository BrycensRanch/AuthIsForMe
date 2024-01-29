// /* eslint-disable global-require */
// /* eslint-disable no-param-reassign */
// /* eslint-disable import/no-extraneous-dependencies */

// all of these are the default values...
require('dotenv-mono').load();

require(`dotenv-defaults`).config({
	path: './.env',
	encoding: 'utf8',
	defaults: './.env.example', // This is new
});

const { Config } = require('next-recompose-plugins');
const { join } = require('node:path');

// const BrotliPlugin = require('brotli-webpack-plugin');

// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

// const ContentSecurityPolicy = `
//   default-src 'self';
//   script-src 'self';
//   child-src authisfor.me ${process.env.BACKEND_SERVER || 'http://localhost:8000'};
//   style-src 'self' authisfor.me ${process.env.BACKEND_SERVER || 'http://localhost:8000'};
//   img-src 'self' namemc.com crafatar.com authisfor.me livzmc.net
//   font-src 'self';
// `;

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
	// This can prevent XSS exploits for websites that allow users to upload and share files.
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	// Idk anymore. I just... work here...
	{
		key: 'Referrer-Policy',
		value: 'origin-when-cross-origin',
	},
	// CSP... Security. Modern. Cool. Yes.
	// {
	// 	key: 'Content-Security-Policy',
	// 	value: ContentSecurityPolicy.replaceAll(/\s{2,}/g, ' ').trim(),
	// },
];
const BuildingConfig = new Config({
	// NextJS Eslint setup, see https://nextjs.org/docs/basic-features/eslint
	eslint: {
		dirs: ['.'],
	},
	// Removes the NextJS poweredByHeader. We don't need it.
	poweredByHeader: false,
	// I'm not entirely sure what this does, but I'm not gonna touch it.
	trailingSlash: true,
	images: {
		domains: ['crafatar.com', 'namemc.com', 'livzmc.net', 'tydiumcraft.net'],
		formats: ['image/avif', 'image/webp'],
	},
	// Whether or not bundle analyzer is enabled.
	enabled: process.env.ANALYZE === 'true',
	experimental: {
		outputFileTracingRoot: join(__dirname, '../'),
	},
	// Requires SWC from NextJS
	// Removes console.log from production builds.
	// Keeps console.error though.
	// compiler: {
	// 	removeConsole: process.env.NODE_ENV === 'production',
	// 	exclude: ['error'],
	// },
	// Minify files in production. Shouldn't effect Sentry error logging.
	// Requires testing
	// swcMinify: process.env.NODE_ENV === 'production',
	// The starter code load resources from `public` folder with `router.basePath` in React components.
	// So, the source code is "basePath-ready".
	// You can remove `basePath` if you don't need it.
	basePath: '',
	// Helps to identify unsafe lifecycles, legacy API usage, and a number of other features.
	reactStrictMode: true,
	// Copies only the necessary files for a production deployment including select files in node_modules.
	output: 'standalone',
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

	sentry: {
		// Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
		// for client-side builds. (This will be the default starting in
		// `@sentry/nextjs` version 8.0.0.) See
		// https://webpack.js.org/configuration/devtool/ and
		// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
		// for more information.
		hideSourceMaps: false,
	},
});
if (process.env.ANALYZE === 'true') {
	BuildingConfig.applyPlugin((phase, config) => {
		// enhance the config with the desired plugin and return it back
		return require('@next/bundle-analyzer')({
			enabled: process.env.ANALYZE === 'true',
			openAnalyzer: process.env.ANALYZE === 'true',
		})(config);
	});
}
if (process.env.NODE_ENV === 'production') {
	BuildingConfig.applyPlugin((phase, config) => {
		// enhance the config with the desired plugin and return it back
		return require('@sentry/nextjs').withSentryConfig({
			// Additional config options for the Sentry Webpack plugin. Keep in mind that
			// the following options are set automatically, and overriding them is not
			// recommended:
			//   release, url, org, project, authToken, configFile, stripPrefix,
			//   urlPrefix, include, ignore
			hideSourceMaps: false,
			silent: true, // Suppresses all logs
			// For all available options, see:
			// https://github.com/getsentry/sentry-webpack-plugin#options.
		})(config);
	});
}
module.exports = BuildingConfig.build();
