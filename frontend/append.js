const { existsSync, appendFileSync } = require('node:fs');
const { join } = require('node:path');

const standAloneNextServerPath = join(__dirname, '.next', 'standalone', 'server.js');
const standAloneNextServerExists = existsSync(standAloneNextServerPath);

// I used the javascript to modify the javascript
//if ((process.env.NODE_ENV === 'production' && standAloneNextServerExists) || !process.env.npm_package_name) {
	appendFileSync(standAloneNextServerPath, "if (process.send) process.send('ready')");
//} else if (process.env.NODE_ENV === 'production' && !standAloneNextServerExists) {
	console.warn(
		"[WARN] NODE_ENV is 'production' yet no standalone Next.js server exists at " + standAloneNextServerPath + '!',
	);
//}
