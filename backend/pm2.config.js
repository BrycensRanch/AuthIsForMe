/* eslint-disable camelcase */
// const os = require('os');

// const cpuCount = os.cpus().length;

const apps = [
	// Main Application
	{
		name: 'AuthBackend',
		script: process[Symbol.for('ts-node.register.instance')] ? 'start.ts' : './dist/start.js',
		instances: 2,
		exec_mode: 'cluster',
		exp_backoff_restart_delay: 100,
		kill_timeout: 3000,
		wait_ready: true,
		listen_timeout: 10_000,
	},
];

export default apps;
