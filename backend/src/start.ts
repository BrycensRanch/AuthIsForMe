import { FastifyInstance } from 'fastify';
import { readFile } from 'node:fs/promises';
import { ProjectReference } from 'typescript';
import getRepoInfo from 'git-repo-info';
import ciDetect from '@npmcli/ci-detect';
import isDocker from 'is-docker';
import scanEnv from 'scan-env';

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import figlet from 'figlet';
import chalk from 'chalk';
import { load as loadMonoRepoEnvironment } from 'dotenv-mono';
import { config as loadEnvironmentDefaultsAndRegularEnvironment } from 'dotenv-defaults';
import { DotenvExpandOptions, expand } from 'dotenv-expand';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
// import * as eta from "eta";
// import * as app from './app.js';
import { AppModule } from './app.module.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

expand(
	loadEnvironmentDefaultsAndRegularEnvironment({
		path: './.env',
		encoding: 'utf8',
		defaults: './.env.example', // This is new
	}),
);

expand(
	loadMonoRepoEnvironment({
		path: join(__dirname, '../.env'),
		encoding: 'utf8',
	}) as DotenvExpandOptions,
);

async function readJsonFile(path: string): Promise<Record<string, ProjectReference>> {
	const file = await readFile(path, 'utf8');
	return JSON.parse(file);
}

const start = async () => {
	console.log(`Currently running in ${__dirname}`);
	if (process.env.NODE_ENV !== 'production') {
		let name;
		let version;
		try {
			const { name: packageName, version: packageVersion } = await readJsonFile('./package.json');
			name = packageName;
			version = packageVersion;
		} catch {
			name = process.env.npm_package_name || 'auth-app';
			version = process.env.npm_package_version || 'Unknown';
		}
		const gitInfo = getRepoInfo();
		const bannerText = `${figlet.textSync(`<${name}>`, {
			font: 'ANSI Shadow',
			horizontalLayout: 'default',
			verticalLayout: 'default',
			width: 80,
			whitespaceBreak: true,
		})}\n`;
		const gitText = chalk.yellowBright.bold(
			`Version: ${version}\n${chalk.blueBright(
				`Commit: ${gitInfo.abbreviatedSha} (${gitInfo.lastTag === 'null' ? 'unknown' : gitInfo.lastTag})\nAuthor: ${
					gitInfo.author
				} (${gitInfo.authorDate})\nMessage: ${gitInfo.commitMessage}\nCommits since tag: ${
					gitInfo.commitsSinceLastTag
				}\n${chalk.blueBright(`Branch: ${gitInfo.branch}`)}`,
			)}`,
		);
		const warning =
			process.env.NODE_ENV !== 'production' || gitInfo.branch !== 'master'
				? chalk.redBright.bold('WARNING: This is a development build. Do not use in production.')
				: undefined;
		const dockerWarning = chalk.redBright.bold(
			"Psst! Make sure you've set up your .env file and launched the database and redis containers!\nYou can do this with the command: docker compose up -d db db2 cache",
		);
		const contextInfo = chalk.yellowBright.bold(
			`CI: ${ciDetect()}\nInside Docker?: ${isDocker() ? 'YES!!' : 'no🤡'}\nNODE_ENV: ${
				process.env.NODE_ENV
			}\nNODE_APP_INSTANCE: ${process.env.NODE_APP_INSTANCE}\nPORT: ${process.env.PORT}\nFASTIFY_PORT: ${
				process.env.FASTIFY_PORT
			}\n`,
		);
		console.log(chalk.greenBright.bold.italic(bannerText));
		console.log(gitText);
		if (warning) console.log(warning);
		console.log(dockerWarning);
		console.log(contextInfo);
		console.log(chalk.bgWhiteBright.greenBright('Now Nest.js based!'));
	}
	try {
		const scanResult = scanEnv('../../.env.example');

		if (scanResult.length > 0)
			console.error(`The following required environment variables are missing: ${scanResult.join(', ')}`);
	} catch (error) {
		console.error(error);
		console.error('failed to check if environment variables are missing, likely due to a missing .env.example');
	}

	const nestApp = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter({
			logger: {
				level: 'info',
				transport: {
					target: 'pino-pretty',
				},
			},
			trustProxy: process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test',
			// Required: Enable TLS
			// https: true,
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// Optional: Enable HTTP/2
			// http2: true
		}),
	);
	nestApp.useStaticAssets({ root: join(__dirname, '..', 'public') });
	nestApp.enableVersioning();
	// nestApp.setBaseViewsDir(join(__dirname, '..', 'views'));
	// nestApp.useStaticAssets({
	// 	root: join(__dirname, "..", "views"),
	// });
	// nestApp.setViewEngine({
	//   engine: 'eta' as never,
	// });
	const server = nestApp.getHttpAdapter().getInstance() as FastifyInstance;
	// Validate all endpoints
	nestApp.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
		}),
	);
	// await server.register(app.fastify);
	// await server.register(fastifyTLS, {
	// 	// Optional (default: ./key.pem)
	// 	key: join(__dirname, 'certs', 'key.pem'),
	// 	// Optional (default: ./cert.pem)
	// 	cert: join(__dirname, 'certs', 'cert.pem'),
	// })

	nestApp.listen(process.env.PORT || process.env.FASTIFY_PORT || '8000', (error, address) => {
		if (error) throw error;

		if (process.env.NODE_APP_INSTANCE === '0' || (!process.env.NODE_APP_INSTANCE && process.env.NODE_ENV !== 'test'))
			server.log.info(`Server listening at ${address}`);
	});
};
start();
