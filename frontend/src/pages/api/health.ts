import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (_request: NextApiRequest, response: NextApiResponse) => {
	response.status(200).json({
		statusCode: 200,
		status: 'ok',
		uptime: process.uptime(),
		'cluster-id': process.env.NODE_APP_INSTANCE || '0',
	});
};

export default handler;
