/* eslint-disable unicorn/no-process-exit */
/* eslint-disable no-console */
/*
 * Copyright 2018-2022 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// standalone script, to get content from the running web application
// for example it can be called by container health checks
// return code will be 0 for success, or the HTTP error code

// use Node.js 'http' integrated module,
// even to avoid dependencies clash

const options = {
		timeout: 5000, // 5 sec
		log: true, // if enabled, write log to console
	},
	url = process.argv[2] || `${process.env.BACKEND_SERVER || "http://localhost:8000"}/v1/health`;
if (options.log === true) console.log(`GET call for healthcheck at: ${url} ...`);

const request = require("node:http").get(url, response => {
	if (options.log === true) {
		console.log(`statusCode: ${response.statusCode}`);
		if (response.statusMessage) console.log(`statusMessage: '${response.statusMessage}'`);

		console.log("----------------");
	}
	if (response.statusCode === 200) process.exit(0);
	else process.exit(response.statusCode || 1);
});

request.setTimeout(options.timeout);

request.on("error", error => {
	if (options.log === true) console.log(`error: ${error.message}`);

	process.exit(error.statusCode || 1);
});

request.end();
