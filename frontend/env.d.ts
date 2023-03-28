/* eslint-disable unicorn/prevent-abbreviations */
declare global {
	namespace NodeJS {
		interface ProcessEnvironment {
			GOOGLE_CLIENT_ID: string;
			GOOGLE_CLIENT_SECRET: string;
			GITHUB_CLIENT_ID: string;
			GITHUB_CLIENT_SECRET: string;
			APPLE_CLIENT_ID: string;
			APPLE_KEY_ID: string;
			APPLE_TEAM_ID: string;
			APPLE_PRIVATE_KEY: string;
		}
	}
}

export {};
