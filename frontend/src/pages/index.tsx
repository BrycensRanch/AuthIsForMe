/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line @next/next/no-document-import-in-page

import dynamic from 'next/dynamic';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const MinecraftSkinViewer = dynamic(() => import('../components/SkinViewer').then((comp) => comp.MinecraftSkinViewer), {
    loading: () => <p>Loading...</p>,
  ssr: false,
});
	return (
		<Main
			meta={
				<Meta
					title="Your One-Stop Minecraft Account Solution"
					description="Easily link all your favorite services to your Minecraft/Mojang/Xbox Live account and streamline your online experience"
				/>
			}
		>
			<section className="h-screen bg-white dark:bg-gray-900">
				<div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
					<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
						We invest in you.
					</h1>
					<p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
						Your one stop shop for all your Minecraft account needs. Easily link all your favorite services to your
						Minecraft/Mojang/Xbox Live account and streamline your online experience.
					</p>
					<div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
						<a
							href="#"
							className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
						>
							Get started
							<svg
								aria-hidden="true"
								className="-mr-1 ml-2 h-5 w-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
						<a
							href="#"
							className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
						>
							Learn more
						</a>
					</div>
				</div>
      </section>
      <section className='w-screen bg-white dark:bg-gray-900'>
			<main className="mx-auto max-w-7xl px-4 py-6 ">
				<div className="mb-10">
					<h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
						Link your Minecraft account to YouTube, Twitch, Discord, and more
					</h1>
					<p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
						AuthIsForMe makes it easy to link your Minecraft account to all of your favorite services, so you can focus
						on playing the game you love.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
					<div className="rounded-lg bg-white px-6 py-8 shadow-lg">
						<div className="mb-4 text-3xl font-bold text-gray-900">Hassle Free</div>
						<p className="text-lg text-gray-600">
							We take all the hassle out of integrating with multiple services and make it easy for you to get started.
						</p>
					</div>
					<div className="rounded-lg bg-gray-900 px-6 py-8 shadow-lg dark:bg-white">
						<div className="mb-4 text-3xl font-bold text-white dark:text-gray-900">Bedrock Support</div>
						<p className="text-lg text-gray-200 dark:text-gray-600">
							Our service now supports bedrock players and Geyser! We also have added support for Microsoft specific
							APIs for Xbox Live accounts.
						</p>
					</div>
					<div className="rounded-lg bg-white px-6 py-8 shadow-lg">
						<div className="mb-4 text-3xl font-bold text-gray-900">1 million</div>
						<p className="text-lg text-gray-600">
							Users have already linked their Minecraft accounts with AuthIsForMe.
						</p>
					</div>
					<div className="rounded-lg bg-white px-6 py-8 shadow-lg">
						<div className="mb-4 text-3xl font-bold text-gray-900">10+</div>
						<p className="text-lg text-gray-600">Services supported, including YouTube, Twitch, Discord, and more.</p>
					</div>
					<div className="rounded-lg bg-white px-6 py-8 shadow-lg">
						<div className="mb-4 text-3xl font-bold text-gray-900">Performant</div>
						<p className="text-lg text-gray-600">
							We've built our API to be... what some would call "BLAZINGGGGLLLLLLY FAST"!
						</p>
					</div>
					<div className="rounded-lg bg-white px-6 py-8 shadow-lg">
						<div className="mb-4 text-3xl font-bold text-gray-900">Open Source</div>
						<p className="text-lg text-gray-600">
							All of the code relating to our service is open source, even our frontend code!
						</p>
					</div>
        </div>
 
        <MinecraftSkinViewer walk={false} control={false} />
        
				<h2>Providing seamless integration with various platforms.</h2>
				<p>
					With AuthIsForMe, you can easily link your various platforms to your Minecraft account and you're done.
					Whatever service that needs to verify your identity knows you.
				</p>
				<p>As a platform, we aim to support all types of platforms and use cases.</p>
				<p>We even support bedrock players and Geyser</p>
				<p>
					We want to be your central place for authentication in the Minecraft community, so that we can bring it
					together more effectively and grant server owners and web developers peace that they deserve for what they've
					done for the community.
				</p>
				<p>We have two types of APIs available for server owners and developers.</p>
				<h2>Server API</h2>
				<p>
					The server API is a simple API that can verify a player's connections to a platform and return a list of
					platforms that the player is linked to. All without the player having to do anything. Similar to DiscordAuth
				</p>
				<h2>Web API</h2>
				<p>
					The web API is a more complex API that allows you to integrate your website with oAuth2 system. In a similar
					way to how Discord does it.
				</p>
				<p>This API is still in development, but we're working hard to get it out!</p>
				<p>If you're interested in helping us out, please join our discord server.</p>
				<p>
					In a way, this service has functionatlity similar to NameMC, but we aim much higher than what NameMC has
					accomplished.
				</p>
				<p>
					All of our code is open source and available on GitHub. We're always open to contributions. Not to mention
					that all our services are free to use, and always will be.
				</p>
				<p>
					We're also working on a Minecraft plugin that will allow you to link your Minecraft account to your platform
					accounts.
				</p>
				<p>For the APIs we have a rate limit of 100 requests per minute per IP.</p>
				<p>
					Of course, all of the APIs we provide have been properly documented and have the accomodating OpenAPI
					documents as well...
				</p>
				<h2>About The Service</h2>
				<p>
					Usually, the APIs I make are for my own use, but I thought that this one would be useful for the community as
					a whole. As such, I've gone out of my way to accept multiple data formats in and out of the API. I've also
					worked hard to try and follow the best practices for API design and HTTP semantics.
				</p>
        
        </main>
      </section>
		</Main>
	);
};

export default Index;
