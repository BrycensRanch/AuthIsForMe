// eslint-disable-next-line import/no-extraneous-dependencies

const Navbar = () => {
	return (
		<nav className="flex flex-wrap items-center justify-between bg-gray-900 p-6">
			<div className="flex shrink-0 items-center text-white">
				<span className="text-xl font-semibold tracking-tight">AuthIsForMe</span>
			</div>
			<div className="flex">
				<button
					className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-gray-900 lg:mt-0"
					onClick={() => console.log('Sign in with Xbox Live clicked!')}
				>
					Sign in with Xbox Live
					<img className="ml-2 h-6 w-6" src="/xbox-logo.png" alt="Xbox Live logo" />
				</button>
			</div>
		</nav>
	);
};
export default Navbar;
