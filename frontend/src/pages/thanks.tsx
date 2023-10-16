// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import ky from 'ky';
// eslint-disable-next-line import/no-extraneous-dependencies
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const noRepoProvided = 'No repo provided';

// It's recommended to use a VPN while testing this, as GitHub will block your IP if you make too many requests
// Mullvad is a great VPN to use for this https://mullvad.net/en/
// Authored by @Romvnly at 4/1/2023 12:58 PM EST

// const regexp = /class="(.*)branch-name(.*)>(.*)</g; // The default branch is always the first on the page

import type { GitHubUserAPIResponse } from 'env';
import type { Key } from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

import packageInfo from '../../package.json';
const { dependencies, devDependencies } = packageInfo;

const clean = (string_: string) => {
	if (!string_) return 'UNKNOWN';
	return string_.replace('^', '').trim();
};

const getRepoAuthor = (repoUrl: string) => {
	if (!repoUrl) throw new Error(noRepoProvided);
	const repoAuthor = repoUrl.split('/')[3];
	if (!repoAuthor) return 'UNKNOWN AUTHOR';
	return repoAuthor;
};

const getAuthorEmail = async (githubRepo: string) => {
	if (!githubRepo) throw new Error(noRepoProvided);
	const githubAuthor = getRepoAuthor(githubRepo);
	const author: GitHubUserAPIResponse = await ky.get(`https://api.github.com/users/${githubAuthor}`).json();
	return author.email || author.blog.trim() || `https://github.com/${githubAuthor}`;
};

const getRepoDefaultBranch = async (repoUrl: string) => {
	// I feel like this was ALWAYS A BAD AND UNNECESSARY IDEA
	if (!repoUrl) throw new Error(noRepoProvided);
	return 'master';
	// let branchesHTML;
	// try {
	// 	branchesHTML = await ky
	// 		.get(`${repoUrl}/branches`, {
	// 			mode: 'no-cors',
	// 		})
	// 		.text();
	// 	console.log(branchesHTML);
	// } catch {
	// 	return 'master';
	// }
	// return branchesHTML.match(regexp)[0].split('>')[1].split('<')[0] || 'master';
};

const Thanks = () => {
	const [licenses, setLicenses] = useState<String[]>([]);
	const fetchLicenses = async () => {
		setLicenses(
			await Promise.all(
				[...Object.keys(dependencies), ...Object.keys(devDependencies)].map(async dep => {
					// TODO: Add back types in a more sane way
					let npmPackage: any;
					try {
						npmPackage = await ky.get(`https://registry.npmjs.org/${dep}`).json();
						const normalizedRepoURL = new URL(
							npmPackage.repository?.url.replace(/\.git$/, '').replace('git+', '') || `https://github.com/npm/${dep}`,
						);
						normalizedRepoURL.protocol = 'https';
						if (npmPackage.repository?.url && npmPackage.repository?.type === 'git') {
							const repoDefaultBranch = await getRepoDefaultBranch(normalizedRepoURL.href);
							console.log(normalizedRepoURL.href, repoDefaultBranch);
							// license = await ky
							// 	.get(`${normalizedRepoURL.href}/raw/${repoDefaultBranch}/LICENSE`, {
							// 		mode: 'no-cors',
							// 	})
							// 	.text();
						}
						return `${npmPackage.name} - ${npmPackage.license || 'UNKNOWN LICENSE'} - 
              ${normalizedRepoURL} - Authored by ${npmPackage.author?.name || getRepoAuthor(normalizedRepoURL.href)} (${
								npmPackage.author?.email || (await getAuthorEmail(normalizedRepoURL.href))
							}) -  ${npmPackage.description || 'No description provided'}`;
					} catch (error) {
						console.debug(error);
						return `${dep} - Unknown, rate limited? ⚠️`;
					}
				}),
			),
		);
	};
	useLayoutEffect(() => {
		fetchLicenses();
	}, []);
	return (
		<Main meta={<Meta title="Thanks" description={''} />}>
			<section className="w-screen bg-white px-4 py-6 dark:bg-gray-900">
				<main className="mx-auto max-w-7xl px-4 py-6">
					<h1
						data-testid="thanks-h1"
						className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
					>
						Our service wouldn't be possible without:
					</h1>
					<h3 className="text-5xl font-extrabold dark:text-white">
						<a href="https://creativedesignsguru.com">Creative Guru</a>
					</h3>
					<br />
					<blockquote className="text-xl font-semibold italic text-gray-900 dark:text-white">
						<p>NPMJS has provided us the tools to build our platform bigger than ever, while moving incredibly fast.</p>
					</blockquote>
					<h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl" style={{}}>
						<span className="from-sky-400 bg-gradient-to-r to-emerald-600 bg-clip-text text-transparent">
							Powered By <a href="https://pnpm.io">PNPM</a>
						</span>{' '}
					</h2>
					<LiteYouTubeEmbed
						id="I14b-C67EXY"
						adNetwork={false} // Default as false, set to true to enable ads
						noCookie={true} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
						params="start=75" // any params you want to pass to the URL, assume we already had '&' and pass your parameters string
						title="YouTube video player"
						poster="hqdefault" // Defines the image size to call on first render as poster image. Possible values are "default","mqdefault",  "hqdefault", "sddefault" and "maxresdefault". Default value for this prop is "hqdefault". Please be aware that "sddefault" and "maxresdefault", high resolution images are not always avaialble for every video. See: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
						activatedClass="lyt-activated" // Default as "lyt-activated", gives control to wrapper once clicked
						iframeClass="" // Default none, gives control to add a class to iframe element itself
						playerClass="lty-playbtn" // Default as "lty-playbtn" to control player button styles
						wrapperClass="yt-lite h-full w-full rounded-lg shadow-xl dark:shadow-gray-800" // Default as "yt-lite" for the div wrapping the area, the most important class and needs extra attention, please refer to LiteYouTubeEmbed.css for a reference.
					/>
					<br />
					<p className="ml-2 font-semibold dark:text-gray-500">
						The above video is loaded in a way that does not use cookies. This is to protect your privacy. If you would
						like to watch the video with cookies enabled, please click{' '}
						<a href="https://www.youtube.com/watch?v=I14b-C67EXY">here</a>.
					</p>
					<hr className="my-4" />

					<div
						className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
						role="alert"
					>
						<span className="font-medium">Danger, Will Robinson!</span> According to our tests, GitHub's API tracks your
						IP address and cookies when you load this page. Due to us needing to fetch data from our dependency's repos
						in-order to give you an accurate overview. Please consider viewing GitHub's privacy policy{' '}
						<a href="https://github.com/privacy/cookies" className="font-semibold">
							here
						</a>
						.
					</div>
					<hr className="my-4" />
					<p className="ml-2 font-semibold dark:text-gray-200">
						Please keep in mind that this page uses the <a href="https://registry.npmjs.org">NPM Registry</a> to fetch
						the licenses of the dependencies. This means that the licenses may not be accurate. If you find any
						inaccuracies, it is not our fault. Please report them to the package author. Furthermore, licenses are not
						shown on this page. Due to the amount of resources this page already uses, we cannot show a direct copy of
						the licenses. You can see the types of licenses <a href="https://spdx.org/licenses/">here</a>.
					</p>
					<h1 className="text-5xl font-extrabold dark:text-white">
						<small className="font-semibold text-gray-500 dark:text-white">Production Dependencies</small>
					</h1>
					<p className="my-5 font-semibold dark:text-white">
						Dependencies likely used in production. However, this is not a guarantee. You should always check the source
						code
					</p>
					{Object.entries(dependencies).map(dep => {
						const [name, version] = dep;

						return (
							<p key={name}>
								<a href={`https://www.npmjs.com/package/${name}`}>
									{name} ({clean(version)})
								</a>
							</p>
						);
					})}
					<h1 className="text-5xl font-extrabold dark:text-white">
						<small className="font-semibold text-gray-500 dark:text-white">Development Dependencies</small>
					</h1>
					<p className="my-5 font-semibold dark:text-white">
						Dependencies likely used in development. However, this is not a guarantee. You should always check the
						source code
					</p>
					{Object.entries(devDependencies).map(developmentDep => {
						const [name, version] = developmentDep;
						return (
							<p key={name}>
								<a href={`https://www.npmjs.com/package/${name}`}>
									{name} ({clean(version)})
								</a>
							</p>
						);
					})}
					<h1 className="text-5xl font-extrabold dark:text-white">
						<small className="ml-2 font-semibold text-gray-500 dark:text-white">Licenses</small>
					</h1>
					<p className="my-5 ml-2 font-semibold dark:text-white">
						Of course, this doesn't include transitive or nested dependencies. You'll have to look into each
						dependency's dependencies for that. FOSS FOREVER!! 💘
					</p>
					<hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
					{licenses.length === 0 ? (
						<p data-testid="thanks-loading" id="licenses-loading" className="my-5 ml-2 font-semibold dark:text-white">
							Licenses are being fetched right now...
						</p>
					) : undefined}
					{licenses.map(license => {
						return (
							<p key={license as Key} className="ml-2 dark:text-white">
								{license}
							</p>
						);
					})}
				</main>
			</section>
		</Main>
	);
};

export default Thanks;
