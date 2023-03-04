import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <>
    {props.meta}
    {/* <MinecraftBackground /> */}
    <Navbar />
    {props.children}
    <Footer />
  </>
);

export { Main };
