import httpProxy from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';

const { API_URL } = process.env; // The actual URL of your API
const proxy = httpProxy.createProxyServer();
// Make sure that we don't parse JSON bodies on this route:
export const config = {
  api: {
    bodyParser: false,
  },
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise<void>((resolve, reject) => {
    proxy.web(
      req,
      res,
      { target: req.query.site, changeOrigin: true },
      // eslint-disable-next-line consistent-return
      (err: Error) => {
        if (err) {
          return reject(err);
        }
        resolve();
      }
    );
  });
};
