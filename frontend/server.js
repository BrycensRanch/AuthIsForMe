/* eslint-disable no-console */

// TODO: remove this file in favor of pm2 start pnpm --name AuthFrontend -- run start

const { createServer } = require('node:http');
const { parse } = require('node:url');
const next = require('next');

const development = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev: development, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	createServer(async (request, response) => {
		try {
			// Be sure to pass `true` as the second argument to `url.parse`.
			// This tells it to parse the query portion of the URL.
			const parsedUrl = parse(request.url, true);
			// const publicFolderPath = join(__dirname, 'public');
			// app.serveStatic(request, response, publicFolderPath);
			await handle(request, response, parsedUrl);
		} catch (error) {
			console.error('Error occurred handling', request.url, error);
			response.statusCode = 500;
			response.end('internal server error');
		}
	}).listen(port, error => {
		if (error) throw error;
		console.log(`> Ready on http://${hostname}:${port}`);
		// Are we running under PM2 or similar?
		if (process.send) process.send('ready');
	});
});
