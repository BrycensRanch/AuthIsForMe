import { Body, Controller, Delete, Get, Param, Post, Put, Query, Render } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service.js';

@Controller('/')
export class RootController {
	// eslint-disable-next-line no-useless-constructor
	constructor(private readonly prismaService: PrismaService) {}

	@Get()
	@Render('index')
	root() {
		return {
			message: 'The oldest',
		};
	}

	@Get('post/:id')
	async getPostById(@Param('id') id: string) {
		return this.prismaService.post.findUnique({ where: { id: Number(id) } });
	}

	@Get('feed')
	async getFilteredPosts(
		@Query('take') take?: number,
		@Query('skip') skip?: number,
		@Query('searchString') searchString?: string,
		@Query('orderBy') orderBy?: 'asc' | 'desc',
	) {
		const or = searchString
			? {
					OR: [{ title: { contains: searchString } }, { content: { contains: searchString } }],
			  }
			: {};

		return this.prismaService.post.findMany({
			where: {
				published: true,
				...or,
			},
			include: { author: true },
			take: Number(take) || undefined,
			skip: Number(skip) || undefined,
			orderBy: {
				updatedAt: orderBy,
			},
		});
	}

	@Get('users')
	async getAllUsers() {
		return this.prismaService.user.findMany();
	}

	@Get('user/:id/drafts')
	async getDraftsByUser(@Param('id') id: string) {
		return this.prismaService.user
			.findUnique({
				where: { userId: Number(id) },
			})
			.posts({
				where: {
					published: false,
				},
			});
	}

	@Post('post')
	async createDraft(@Body() postData: { title: string; content?: string; authorEmail: string }) {
		const { title, content, authorEmail } = postData;
		return this.prismaService.post.create({
			data: {
				title,
				content,
				author: {
					connect: { email: authorEmail },
				},
			},
		});
	}

	@Post('signup')
	async signupUser(
		@Body()
		userData: {
			username: string;
			email: string;
			posts?: Prisma.PostCreateInput[];
		},
	) {
		return this.prismaService.user.create({
			data: {
				username: userData.username,
				email: userData.email,
				posts: {
					create: userData.posts?.map(post => {
						return { title: post?.title, content: post?.content };
					}),
				},
			},
		});
	}

	@Put('publish/:id')
	async togglePublishPost(@Param('id') id: string) {
		const postData = await this.prismaService.post.findUnique({
			where: { id: Number(id) },
			select: {
				published: true,
			},
		});

		return this.prismaService.post.update({
			where: { id: Number(id) || undefined },
			data: { published: !postData?.published },
		});
	}

	@Delete('post/:id')
	async deletePost(@Param('id') id: string) {
		return this.prismaService.post.delete({ where: { id: Number(id) } });
	}

	@Put('/post/:id/views')
	async incrementPostViewCount(@Param('id') id: string) {
		return this.prismaService.post.update({
			where: { id: Number(id) },
			data: {
				viewCount: {
					increment: 1,
				},
			},
		});
	}
}
