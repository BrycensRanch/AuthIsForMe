/* eslint-disable no-console */
import { fastify } from "fastify";
import { readFile } from "node:fs/promises";
import { ProjectReference } from "typescript";
import getRepoInfo from "git-repo-info";
import ciDetect from "@npmcli/ci-detect";
import isDocker from "is-docker";
import scanEnv from "scan-env";

import * as app from "./app.js";

async function readJsonFile(path: string): Promise<Record<string, ProjectReference>> {
	const file = await readFile(path, "utf8");
	return JSON.parse(file);
}

const start = async () => {
	if (process.env.NODE_ENV !== "production") {
		const chalk = (await import("chalk")).default;
		let name, version;
		try {
			const { name: packageName, version: packageVersion } = await readJsonFile("./package.json");
			name = packageName;
			version = packageVersion;
		} catch {
			name = process.env.npm_package_name || "auth-app";
			version = process.env.npm_package_version || "Unknown";
		}
		const gitInfo = getRepoInfo(),
			// @ts-expect-error
			bannerText = `${(await import("figlet")).default.textSync(`<${name}>`, {
				font: "ANSI shadow",
				horizontalLayout: "default",
				verticalLayout: "default",
				width: 150,
				whitespaceBreak: true,
			})}\n`,
			gitText = chalk.yellowBright.bold(
				`Version: ${version}\n${chalk.blueBright(
					`Commit: ${gitInfo.abbreviatedSha} (${gitInfo.lastTag === "null" ? "unknown" : gitInfo.lastTag})\nAuthor: ${
						gitInfo.author
					} (${gitInfo.authorDate})\nMessage: ${gitInfo.commitMessage}\nCommits since tag: ${
						gitInfo.commitsSinceLastTag
					}\n${chalk.blueBright(`Branch: ${gitInfo.branch}`)}`
				)}`
			),
			warning =
				process.env.NODE_ENV !== "production" || gitInfo.branch !== "master"
					? chalk.redBright.bold("WARNING: This is a development build. Do not use in production.")
					: null,
			dockerWarning = chalk.redBright.bold(
				"Psst! Make sure you've set up your .env file and launched the database and redis containers!\nYou can do this with the command: docker compose up -d db db2 cache"
			),
			contextInfo = chalk.yellowBright.bold(
				`CI: ${ciDetect()}\nInside Docker?: ${isDocker() ? "YES!!" : "no🤡"}\nNODE_ENV: ${
					process.env.NODE_ENV
				}\nNODE_APP_INSTANCE: ${process.env.NODE_APP_INSTANCE}\nPORT: ${process.env.PORT}\nFASTIFY_PORT: ${
					process.env.FASTIFY_PORT
				}\n`
			);
		console.log(chalk.greenBright.bold.italic(bannerText));
		console.log(gitText);
		if (warning) console.log(warning);
		console.log(dockerWarning);
		console.log(contextInfo);
	}
	try {
		const scanResult = scanEnv("../../.env.example");

		if (scanResult.length > 0)
			console.error(`The following required environment variables are missing: ${scanResult.join(", ")}`);
	} catch (error) {
		console.error(error);
		console.error("failed to check if environment variables are missing, likely due to a missing .env.example");
	}

	const server = fastify({
		logger: {
			level: "info",
			transport: {
				target: "pino-pretty",
			},
		},
		trustProxy: process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test",
	});
	await server.register(app.fastify);

	// @ts-ignore
	server.listen(
		{
			port: process.env.PORT || process.env.FASTIFY_PORT || "8000",
			host: "::",
		},
		(error, address) => {
			if (error) {
				console.error(error);
				process.exit(1);
			}
			if (process.env.NODE_APP_INSTANCE === "0" || (!process.env.NODE_APP_INSTANCE && process.env.NODE_ENV !== "test"))
				server.log.info(`Server listening at ${address}`);
		}
	);
};
start();
