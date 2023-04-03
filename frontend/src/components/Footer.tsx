import Link from 'next/link';

import packageInfo from '../../package.json';
const { version } = packageInfo;

const Footer = () => {
  return (
    <>

		<footer className="bg-gray-50 py-12 dark:bg-gray-800 xl:pt-24">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<a href="https://flowbite.com/" className="flex items-center">
							<img src="/favicon.ico" className="mr-3 h-8" alt="FlowBite Logo" />
							<span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">AuthIsForMe</span>
						</a>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Resources</h2>
							<ul className="font-medium text-gray-600 dark:text-gray-400">
								<li className="mb-4">
									<a href="https://flowbite.com/">Flowbite</a>
								</li>
								<li>
									<a href="https://tailwindcss.com/">Tailwind CSS</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
							<ul className="font-medium text-gray-600 dark:text-gray-400">
								<li className="mb-4">
									<a href="https://github.com/BrycensRanch/AuthIsForMe">Github</a>
								</li>
								<li>
									<a href="https://discord.gg/4eeurUVvTy">Discord</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
							<ul className="font-medium text-gray-600 dark:text-gray-400">
								<li className="mb-4">
									<Link href="/privacy">Privacy Policy</Link>
								</li>
								<li className="mb-4">
									<Link href="/terms">
										Terms &amp; Conditions
									</Link>
								</li>
								<li>
									<Link href="/thanks">
										Libraries/Licenses
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
<hr className="my-8 h-1 border-0 bg-gray-200 dark:bg-gray-700" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
						&copy; {new Date().getFullYear()} <a href="https://github.com/BrycensRanch">BrycensRanch</a> (Version {version}). All
						Rights Reserved.
            </span>
          </div>
      </div>
      </footer>
      </>
	);
};
export default Footer;
