/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line @next/next/no-document-import-in-page

import { MinecraftSkinViewer } from '@/components/SkinViewer';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Your One-Stop Minecraft Account Solution"
          description="Easily link all your favorite services to your Minecraft/Mojang/Xbox Live account and streamline your online experience"
        />
      }
    >
      <main className="mx-auto max-w-7xl py-6 px-4">
        <MinecraftSkinViewer />
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Link your Minecraft account to YouTube, Twitch, Discord, and more
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            AuthIsForMe makes it easy to link your Minecraft account to all of
            your favorite services, so you can focus on playing the game you
            love.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-lg bg-white px-6 py-8 shadow-lg">
            <div className="mb-4 text-3xl font-bold text-gray-900">
              1 million
            </div>
            <p className="text-lg text-gray-600">
              Users have already linked their Minecraft accounts with
              AuthIsForMe.
            </p>
          </div>
          <div className="rounded-lg bg-white px-6 py-8 shadow-lg">
            <div className="mb-4 text-3xl font-bold text-gray-900">20+</div>
            <p className="text-lg text-gray-600">
              Services are supported, including YouTube, Twitch, Discord, and
              more.
            </p>
          </div>
          <div className="rounded-lg bg-white px-6 py-8 shadow-lg">
            <div className="mb-4 text-3xl font-bold text-gray-900">Secure</div>
            <p className="text-lg text-gray-600">
              We take your security seriously, with industry-leading encryption.
            </p>
          </div>
        </div>
      </main>
    </Main>
  );
};

export default Index;
