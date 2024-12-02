'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import CardFour from '@/components/dashboard/CardFour';
import CardOne from '@/components/dashboard/CardOne';
import CardThree from '@/components/dashboard/CardThree';
import CardTwo from '@/components/dashboard/CardTwo';
import ChatCard from '@/components/dashboard/ChatCard';
import MapOne from '@/components/dashboard/MapOne';
import TableOne from '@/components/dashboard/TableOne';
import DefaultLayout from '@/layouts/DefaultLayout';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const RootDashboard = () => {
	const ChartOne = dynamic(() => import('@/components/dashboard/ChartOne').then(module => module.default), {
		loading: () => <p>Initializing Chart 1...</p>,
		ssr: false,
	});
	const ChartTwo = dynamic(() => import('@/components/dashboard/ChartTwo').then(module => module.default), {
		loading: () => <p>Initializing Chart 2...</p>,
		ssr: false,
	});
	const ChartThree = dynamic(() => import('@/components/dashboard/ChartThree').then(module => module.default), {
		loading: () => <p>Initializing Chart 3...</p>,
		ssr: false,
	});

	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	return (
		<Main meta={<Meta title="Dashboard" description={'Dashboard'} />}>
			{loading ? (
				<div
					id="preloader"
					className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white dark:bg-gray-900"
				>
					<div className="size-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
				</div>
			) : (
				<DefaultLayout>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
						<CardOne />
						<CardTwo />
						<CardThree />
						<CardFour />
					</div>

					<div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
						<ChartOne />
						<ChartTwo />
						<ChartThree />
						<MapOne />
						<div className="col-span-12 xl:col-span-8">
							<TableOne />
						</div>
						<ChatCard />
					</div>
				</DefaultLayout>
			)}
		</Main>
	);
};

export default RootDashboard;
