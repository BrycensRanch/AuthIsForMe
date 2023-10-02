/* eslint-disable camelcase */

module.exports = [
	// Main Application
	{
		name: 'AuthBackend',
		script: './dist/src/start.js',
		instances: require('node:os').cpus().length,
		exec_mode: 'cluster',
		exp_backoff_restart_delay: 100,
		kill_timeout: 3000,
		wait_ready: true,
		listen_timeout: 10_000,
	},
];
