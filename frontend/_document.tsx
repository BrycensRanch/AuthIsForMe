// THIS IS THE MOST STUPID THING I HAVE EVER SEEN IN MY LIFE
// _document.tsx is not a page, it is a component that is used to render the page
// https://nextjs.org/docs/advanced-features/custom-document
// This is just the TypeScript version of the example from the docs
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
