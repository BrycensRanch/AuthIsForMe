const { existsSync, appendFileSync } = require('node:fs');
const path = require('node:path');

const standAloneNextServerPath = path.join(__dirname, '.next', 'standalone', 'server.js');
const standAloneNextServerExists = existsSync(standAloneNextServerPath);

// I used the javascript to modify the javascript
//if ((process.env.NODE_ENV === 'production' && standAloneNextServerExists) || !process.env.npm_package_name) {
	appendFileSync(standAloneNextServerPath, "if (process.send) process.send('ready')");
//} else if (process.env.NODE_ENV === 'production' && !standAloneNextServerExists) {
	console.warn(
		"[WARN] NODE_ENV is 'production' yet no standalone Next.js server exists at " + standAloneNextServerPath + '!',
	);
//}
