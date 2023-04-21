import Link from 'next/link';
import React from 'react';

const Breadcrumb = (properties: { pageName: string }) => {
	return (
		<div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
			<h2 className="text-title-md2 font-semibold text-black dark:text-white">{properties.pageName}</h2>

			<nav>
				<ol className="flex items-center gap-2">
					<li>
						<Link href="/frontend/src/pages.disabled/dashboard">Dashboard /</Link>
					</li>
					<li className="text-primary">{properties.pageName}</li>
				</ol>
			</nav>
		</div>
	);
};

export default Breadcrumb;
