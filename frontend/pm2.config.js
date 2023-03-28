/* eslint-disable unicorn/prefer-module */
// const os = require('os');

// const cpuCount = os.cpus().length;

// The frontend is not ESM, so we can't use export default

module.exports = {
	apps: [
		// Main Application
		{
			name: "ChatFrontend",
			script: "./server.js",
			instances: 3,
			exec_mode: "cluster",
			kill_timeout: 3000,
			wait_ready: true,
			listen_timeout: 10_000,
		},
	],
};
