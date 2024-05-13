import { Body, Controller, Delete, Get, Param, Post, Put, Query, Render } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { PrismaService } from './prisma/prisma.service.js';

@Controller('/')
export class RootController {
	// eslint-disable-next-line no-empty-function, no-useless-constructor
	constructor(private readonly prismaService: PrismaService) {}

	@Get()
	@Render('index')
	root() {
		return {
			message: 'The oldest',
		};
	}

	@Get('docs')
	@Render('docs')
	docs() {
		return {
			message: 'The realest',
		};
	}

  // We need a /api/health endpoint
  @Get('api/health')
  health() {
    return { status: 'ok' };
  }

	@Get('feed')
	@ApiOperation({ summary: 'Feed of published posts' })
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

	@Post('post')
	async createDraft(@Body() postData: { title: string; content?: string }) {
		const { title, content } = postData;
		return this.prismaService.post.create({
			data: {
				title,
				content,
			},
		});
	}

	// List posts with no author
	@Get('drafts')
	async getDrafts() {
		return this.prismaService.post.findMany({
			where: { author: undefined },
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
