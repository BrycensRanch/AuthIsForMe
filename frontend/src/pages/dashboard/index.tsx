'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import CardFour from '@/components/dash/CardFour';
import CardOne from '@/components/dash/CardOne';
import CardThree from '@/components/dash/CardThree';
import CardTwo from '@/components/dash/CardTwo';
import ChatCard from '@/components/dash/ChatCard';
import MapOne from '@/components/dash/MapOne';
import TableOne from '@/components/dash/TableOne';
import DefaultLayout from '@/layouts/DefaultLayout';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const RootDashboard = () => {
	const ChartOne = dynamic(() => import('@/components/dash/ChartOne').then(comp => comp.MinecraftSkinViewer), {
		loading: () => <p>Initializing Chart 1...</p>,
		ssr: false,
  });
  const ChartTwo = dynamic(() => import('@/components/dash/ChartTwo').then(comp => comp.MinecraftSkinViewer), {
    loading: () => <p>Initializing Chart 2...</p>,
    ssr: false,
  });
  const ChartThree = dynamic(() => import('@/components/dash/ChartThree').then(comp => comp.MinecraftSkinViewer), {
    loading: () => <p>Initializing Chart 3...</p>,
    ssr: false,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

	return (
		<Main meta={<Meta title="Dashboard" description={'Dashboard'} />}>
        {
        loading ? (
          			<div
				id="preloader"
				className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white dark:bg-gray-900"
      >
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
            </div>

        ) : (
                <DefaultLayout>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'>
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className='col-span-12 xl:col-span-8'>
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </DefaultLayout>
          )
        }
		</Main>
	);
};

export default RootDashboard;
