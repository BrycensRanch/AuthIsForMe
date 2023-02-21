/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line @next/next/no-document-import-in-page
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export type Room = {
  name: string;
  sockets: string[];
};

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="House Door"
          description="One on one calls powered by WebRTC"
        />
      }
    ></Main>
  );
};

export default Index;
