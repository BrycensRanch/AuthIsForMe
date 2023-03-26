import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient(),
	userData: Prisma.UserCreateInput[] = [
		{
			username: "Alice",
			email: "alice@prisma.io",
			userId: 1,
			biography: "i am do",
			posts: {
				create: [
					{
						title: "Join the Prisma Slack",
						content: "https://slack.prisma.io",
						published: true,
					},
				],
			},
		},
		{
			username: "Nilu",
			email: "nilu@prisma.io",
			userId: 2,
			biography: "i am ddo",
			posts: {
				create: [
					{
						title: "Follow Prisma on Twitter",
						content: "https://www.twitter.com/prisma",
						published: true,
					},
				],
			},
		},
		{
			username: "Mahmoud",
			email: "mahmoud@prisma.io",
			userId: 3,
			biography: "i am dfvdsfdo",
			posts: {
				create: [
					{
						title: "Ask a question about Prisma on GitHub",
						content: "https://www.github.com/prisma/prisma/discussions",
						published: true,
					},
					{
						title: "Prisma on YouTube",
						content: "https://pris.ly/youtube",
					},
				],
			},
		},
	];

export async function main() {
	try {
		console.log("Start seeding ...");
		for (const u of userData) {
			const user = await prisma.user.create({
				data: u,
			});
			console.log(`Created user with id: ${user.id}`);
		}
		console.log("Seeding finished.");
	} catch (error) {
		console.error(error);
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
}

main();
