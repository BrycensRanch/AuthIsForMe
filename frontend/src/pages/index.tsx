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
    >
      <h1>Providing seamless integration with various platforms.</h1>
      <p>
        With AuthIsForMe, you can easily link your various platforms to your
        Minecraft account and you're done. Whatever service that needs to verify
        your identity knows you.
      </p>
      <p>
        As a platform, we aim to support all types of platforms and use cases.
      </p>
      <p>We even support bedrock players and Geyser</p>
      <p>
        We want to be your central place for authentication in the Minecraft
        community, so that we can bring it together more effectively and grant
        server owners and web developers peace that they deserve for what
        they've done for the community.
      </p>
      <p>
        We have two types of APIs available for server owners and developers.
      </p>
      <h2>Server API</h2>
      <p>
        The server API is a simple API that can verify a player's connections to
        a platform and return a list of platforms that the player is linked to.
        All without the player having to do anything. Similar to DiscordAuth
      </p>
      <h2>Web API</h2>
      <p>
        The web API is a more complex API that allows you to integrate your
        website with oAuth2 system. In a similar way to how Discord does it.
      </p>
      <p>
        This API is still in development, but we're working hard to get it out!
      </p>
      <p>
        If you're interested in helping us out, please join our discord server.
      </p>
      <p>
        In a way, this service has functionatlity similar to NameMC, but we aim
        much higher than what NameMC has accomplished.
      </p>
      <p>
        All of our code is open source and available on GitHub. We're always
        open to contributions. Not to mention that all our services are free to
        use, and always will be.
      </p>
      <p>
        We're also working on a Minecraft plugin that will allow you to link
        your Minecraft account to your platform accounts.
      </p>
      <p>
        For the APIs we have a rate limit of 100 requests per minute per IP.
      </p>
      <p>
        Of course, all of the APIs we provide have been properly documented and
        have the accomodating OpenAPI documents as well...
      </p>
      <h2>About The Service</h2>
      <p>
        Usually, the APIs I make are for my own use, but I thought that this one
        would be useful for the community as a whole. As such, I've gone out of
        my way to accept multiple data formats in and out of the API. I've also
        worked hard to try and follow the best practices for API design and HTTP
        semantics.
      </p>
    </Main>
  );
};

export default Index;
