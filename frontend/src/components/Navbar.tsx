import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ColorPicker from './colorPicker';

const Navbar = () => {
	const router = useRouter();

	return (
		<Disclosure as="nav" className="bg-gray-800">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
						<div className="shrink-0">
							<div className="flex shrink-0 items-center text-white">
								<span
									className="text-xl font-semibold tracking-tight"
									style={{
										cursor: 'pointer',
									}}
									onClick={() => {
										router.push('/');
									}}
								>
									AuthIsForMe
								</span>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<Link href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
									Home
								</Link>
								<Link
									href="/dashboard"
									className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>
									Dashboard
								</Link>
								<Link
									href="/team"
									className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>
									Team
								</Link>

								<Link
									href="/api"
									className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>
									API Documentation
								</Link>

								<Link
									href="/opencube"
									className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>
									Account Viewer (OpenCube)
								</Link>
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="ml-4 flex items-center md:ml-6">
							<ColorPicker />
							<button
								className="rounded-full border-2 border-transparent p-1 text-gray-400 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
								aria-label="Notifications"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									aria-hidden="true"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
									/>
								</svg>
							</button>

							<div className="relative ml-3">
								<div>
									<button
										className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none"
										id="user-menu"
										type="button"
										aria-haspopup="true"
									>
										<span className="sr-only">Open user menu</span>
										<img
											className="h-8 w-8 rounded-full"
											src="https://avatars.githubusercontent.com/u/66782301?s=96&v=4"
											alt=""
										/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Disclosure>
	);
};
export default Navbar;
