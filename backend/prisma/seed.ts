/* eslint-disable no-await-in-loop unicorn/no-process-exit unicorn/prefer-top-level-await */

import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
const userData: Prisma.UserCreateInput[] = [
	{
		email: 'alice@prisma.io',
		profile: {
			create: {
				username: 'Alice',
				biography: 'i am do',
				posts: {
					create: [
						{
							title: 'Join the Prisma Slack',
							content: 'https://slack.prisma.io',
							published: true,
						},
					],
				},
			},
		},
	},
	{
		email: 'nilu@prisma.io',
		profile: {
			create: {
				username: 'Nilu',
				biography: 'i am ddo',
				posts: {
					create: [
						{
							title: 'Follow Prisma on Twitter',
							content: 'https://www.twitter.com/prisma',
							published: true,
						},
					],
				},
			},
		},
	},
	{
		email: 'mahmoud@prisma.io',
		profile: {
			create: {
				biography: 'i am dfvdsfdo',
				username: 'Mahmoud',
				posts: {
					create: [
						{
							title: 'Ask a question about Prisma on GitHub',
							content: 'https://www.github.com/prisma/prisma/discussions',
							published: true,
						},
						{
							title: 'Prisma on YouTube',
							content: 'https://pris.ly/youtube',
						},
					],
				},
			},
		},
	},
];

export async function main() {
	try {
		console.log('Start seeding ...');
		for (const u of userData) {
			const user = await prisma.user.create({
				data: u,
			});
			console.log(`Created user with id: ${user.userId}`);
		}
		console.log('Seeding finished.');
	} catch (error) {
		console.error(error);
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
}

main();
