/* eslint-disable unicorn/prefer-module */
const os = require('node:os');
const fs = require('node:fs/promises');
const { inspect } = require('node:util');
const f = require('node:fs');

const cpuCount = os.cpus().length;

// The frontend is not ESM, so we can't use export default
function hasDockerEnv() {
	try {
		f.statSync('/.dockerenv');
		return true;
	} catch {
		return false;
	}
}

function hasDockerCGroup() {
	try {
		return f.readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
	} catch {
		return false;
	}
}

function isDocker() {
	// TODO: Use `??=` when targeting Node.js 16.
	if (isDockerCached === undefined) {
		isDockerCached = hasDockerEnv() || hasDockerCGroup();
	}

	return isDockerCached;
}
// if (isDocker) {
fs.readdir(__dirname, { recursive: true }).then(filesAndFolders => {
	console.log(inspect(filesAndFolders, Number.POSITIVE_INFINITY, true));
});
// }

module.exports = {
	apps: [
		// Main Application
		{
			name: 'ChatFrontend',
			script: process.env.STANDALONE_PATH || '.next/standalone/frontend/server.js',
			instances: cpuCount / 2,
			exec_mode: 'cluster',
			kill_timeout: 3000,
			wait_ready: true,
			listen_timeout: 10_000,
		},
	],
};
