const os = require('os');

const cpuCount = os.cpus().length;

const apps = [
	{
		name: 'AuthBackend',
		kill_timeout: 3000,
		instances: cpuCount / 2,

		wait_ready: true,
		listen_timeout: 10_000,
		exec_mode: 'cluster',
		exp_backoff_restart_delay: 1000,
		script: 'backend/dist/src/start.js',
	},
	{
		name: 'AuthFrontend',
		instances: cpuCount / 2,
		kill_timeout: 3000,
		wait_ready: true,
		listen_timeout: 10_000,
		exec_mode: 'cluster',
		exp_backoff_restart_delay: 100,
		script: './server.js',
		cwd: './frontend',
	},
];

module.exports = apps;
