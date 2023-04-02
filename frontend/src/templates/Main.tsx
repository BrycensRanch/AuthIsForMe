import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

type IMainProperties = {
	meta: ReactNode;
	children?: ReactNode;
};

const Main = (properties: IMainProperties) => (
	<>
		{properties.meta}
		{/* <MinecraftBackground /> */}
		<Navbar />
		{properties.children ?? undefined}
		<Footer />
	</>
);

export { Main };
