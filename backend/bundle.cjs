'use strict';

var promises = require('node:fs/promises');
var getRepoInfo = require('git-repo-info');
var ciDetect = require('@npmcli/ci-detect');
var isDocker = require('is-docker');
var scanEnv = require('scan-env');
var node_path = require('node:path');
var node_url = require('node:url');
var figlet = require('figlet');
var chalk = require('chalk');
var dotenvMono = require('dotenv-mono');
var dotenvDefaults = require('dotenv-defaults');
var dotenvExpand = require('dotenv-expand');
var common = require('@nestjs/common');
var core = require('@nestjs/core');
var platformFastify = require('@nestjs/platform-fastify');
require('reflect-metadata');
var cors = require('@fastify/cors');
var helmet = require('@fastify/helmet');
var node_fs = require('node:fs');
var printRoutes = require('fastify-print-routes');
var fastifyResponseTime = require('fastify-request-timing');
var fastifyAllow = require('fastify-allow');
var fastifyUserAgent = require('fastify-user-agent');
var fastifyCookie = require('@fastify/cookie');
var fastify204 = require('fastify-204');
var nodeApiAnalytics = require('node-api-analytics');
var fastifyXML = require('fastify-xml-body-parser');
var fastifyJSON5 = require('fastify-json5');
var fastifyQS = require('fastify-qs');
var fastifyAcceptsSerializer = require('@fastify/accepts-serializer');
var YAML = require('yaml');
var serverVersion = require('fastify-server-version');
var fastifyZodValidate = require('fastify-zod-validate');
var fjwt = require('@fastify/jwt');
var fastifyETag = require('@fastify/etag');
var fastifyViews = require('@fastify/view');
var eta$1 = require('eta');
var fastifyMethodOverride = require('fastify-method-override');
var protobufjs = require('protobufjs');
var xml2js = require('xml2js');
var config = require('@nestjs/config');
var swagger = require('@nestjs/swagger');
var client = require('@prisma/client');
var prismaRedisMiddleware = require('prisma-redis-middleware');
var Redis = require('ioredis');
var RedisUrlParser = require('redis-url-plus');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
const eta = new eta$1.Eta();
const __filename$2 = node_url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('bundle.cjs', document.baseURI).href)));
const __dirname$2 = node_path.dirname(__filename$2);
dotenvExpand.expand(dotenvMono.dotenvLoad({
    path: node_path.join(node_path.dirname(node_url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('bundle.cjs', document.baseURI).href)))), '../.env'),
    encoding: 'utf8',
}));
const SSLFolder = './ssl';
if (!node_fs.existsSync(SSLFolder) && process.env.NODE_ENV === 'production')
    node_fs.mkdirSync(SSLFolder, { recursive: true });
const fastify = async (app) => {
    if (process.env.NODE_APP_INSTANCE === '0' || (!process.env.NODE_APP_INSTANCE && process.env.NODE_ENV !== 'test'))
        await app.register(printRoutes);
    await app.register(helmet, {
        contentSecurityPolicy: false,
    });
    await app.register(fastifyResponseTime);
    await app.register(fastifyUserAgent);
    await app.register(fastifyMethodOverride);
    await app.register(fastifyAllow);
    await app.register(fastifyXML);
    await app.register(fastifyQS);
    await app.register(fastifyETag);
    await app.register(fastifyViews, {
        engine: { eta },
        templates: node_path.join(node_path.dirname(node_url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('bundle.cjs', document.baseURI).href)))), './views'),
    });
    await app.register(fastifyJSON5);
    await app.register(serverVersion());
    await app.register(fjwt, {
        secret: 'supersecret',
    });
    app.decorate('authenticate', async (request, reply) => {
        try {
            await request.jwtVerify();
        }
        catch (error) {
            reply.send(error);
        }
    });
    await app.register(fastify204, {
        onUndefined: true,
        onNull: true,
        onEmptyArray: true,
    });
    await app.register(fastifyZodValidate, {
        handleValidatorError: error => {
            return { error, statusCode: 422, message: 'Unprocessable Entity - Zod Errors or something, man...' };
        },
    });
    const parser = new xml2js.Parser();
    await app.addContentTypeParser('application/x-protobuf', function (req, done) {
        try {
            const res = Package.decode(req.body);
            return res;
        }
        catch (err) {
            return err;
        }
    });
    const protoloadPath = node_path.join(__dirname$2, 'schema', 'package.proto'), messagePackage = 'Package';
    const root = protobufjs.loadSync(protoloadPath);
    const Package = root.lookupType(messagePackage);
    await app.register(fastifyAcceptsSerializer, {
        serializers: [
            {
                regex: /^(application\/(x-)?yaml|text\/yaml)$/,
                serializer: body => YAML.stringify(body),
            },
            {
                regex: /^application\/x-protobuf$/,
                serializer: body => Package.encode(Package.create(body)).finish()
            },
            {
                regex: /^(application\/xml|text\/xml)$/,
                serializer: body => {
                    parser.parseString(body, (err, result) => {
                        if (err) {
                            throw err;
                        }
                        return result;
                    });
                }
            },
            {
                regex: /^(application\/x-www-form-urlencoded)$/,
                serializer: body => {
                    const form = new URLSearchParams();
                    for (const [key, value] of Object.entries(body)) {
                        form.append(key, value);
                    }
                    return form.toString();
                },
            },
        ],
        default: 'application/json',
    });
    if (process.env.FASTIFY_ANALYTICS_API_KEY)
        app.addHook('onRequest', nodeApiAnalytics.fastifyAnalytics(process.env.FASTIFY_ANALYTICS_API_KEY));
    app.addHook('onRequest', async ({ headers, ip, userAgent: userAgent1 }, reply) => {
        if (headers['user-agent'] && headers['user-agent'].length > 250)
            return reply.code(422).send({ message: 'User agent too long, should be > 250' });
        app.log.info(`Request from ${ip?.trim() || 'localhost'} from user agent ${userAgent1.toString()} (${headers['user-agent']})`);
    });
    app.get('/helloz', async () => {
        return 'Hello World!';
    });
    app.get('/exit', async (_request, reply) => {
        app.log.info('Recieved request to exit. EXITING 😭😭😭');
        reply.send({
            message: 'Exiting',
        });
        throw new Error('Exiting');
    });
    await app.register(cors, {
        origin: [process.env.FRONTEND_SERVER || 'http://localhost:3000'],
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        credentials: true,
    });
    await app.register(fastifyCookie);
};
if (process.send) {
    process.send('ready');
}

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let PrismaService = class PrismaService extends client.PrismaClient {
    redis = new Redis(RedisUrlParser(process.env.REDIS_URL));
    async onModuleInit() {
        await this.$connect();
        console.log('Prisma connected');
        const cacheMiddleware = prismaRedisMiddleware.createPrismaRedisCache({
            storage: { type: 'redis', options: { client: this.redis, invalidation: { referencesTTL: 300 } } },
            cacheTime: 300,
            excludeMethods: ['count', 'groupBy'],
            onHit: key => {
                console.log('hit', key);
            },
            onMiss: key => {
                console.log('miss', key);
            },
            onError: key => {
                console.log('error', key);
            },
        });
        this.$use(cacheMiddleware);
    }
    async onModuleDestroy() {
        await this.$disconnect();
        await this.redis.quit();
        console.log('Prisma & Redis disconnected');
    }
};
PrismaService = __decorate$3([
    common.Injectable()
], PrismaService);

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let RootController = class RootController {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    root() {
        return {
            message: 'The oldest',
        };
    }
    docs() {
        return {
            message: 'The realest',
        };
    }
    health() {
        return { status: 'ok' };
    }
    async getFilteredPosts(take, skip, searchString, orderBy) {
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
    async createDraft(postData) {
        const { title, content } = postData;
        return this.prismaService.post.create({
            data: {
                title,
                content,
            },
        });
    }
    async getDrafts() {
        return this.prismaService.post.findMany({
            where: { author: undefined },
        });
    }
    async togglePublishPost(id) {
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
    async deletePost(id) {
        return this.prismaService.post.delete({ where: { id: Number(id) } });
    }
    async incrementPostViewCount(id) {
        return this.prismaService.post.update({
            where: { id: Number(id) },
            data: {
                viewCount: {
                    increment: 1,
                },
            },
        });
    }
};
__decorate$2([
    common.Get(),
    common.Render('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RootController.prototype, "root", null);
__decorate$2([
    common.Get('docs'),
    common.Render('docs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RootController.prototype, "docs", null);
__decorate$2([
    common.Get('api/health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RootController.prototype, "health", null);
__decorate$2([
    common.Get('feed'),
    swagger.ApiOperation({ summary: 'Feed of published posts' }),
    __param(0, common.Query('take')),
    __param(1, common.Query('skip')),
    __param(2, common.Query('searchString')),
    __param(3, common.Query('orderBy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], RootController.prototype, "getFilteredPosts", null);
__decorate$2([
    common.Post('post'),
    __param(0, common.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RootController.prototype, "createDraft", null);
__decorate$2([
    common.Get('drafts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RootController.prototype, "getDrafts", null);
__decorate$2([
    common.Put('publish/:id'),
    __param(0, common.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RootController.prototype, "togglePublishPost", null);
__decorate$2([
    common.Delete('post/:id'),
    __param(0, common.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RootController.prototype, "deletePost", null);
__decorate$2([
    common.Put('/post/:id/views'),
    __param(0, common.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RootController.prototype, "incrementPostViewCount", null);
RootController = __decorate$2([
    common.Controller('/'),
    __metadata("design:paramtypes", [PrismaService])
], RootController);

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let PrismaModule = class PrismaModule {
};
PrismaModule = __decorate$1([
    common.Module({
        providers: [PrismaService],
        exports: [PrismaService],
    })
], PrismaModule);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    common.Module({
        imports: [
            config.ConfigModule.forRoot({
                isGlobal: true,
            }),
            PrismaModule,
        ],
        controllers: [RootController],
    })
], AppModule);

const __dirname$1 = node_path.dirname(node_url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('bundle.cjs', document.baseURI).href))));
const __filename$1 = node_url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('bundle.cjs', document.baseURI).href)));
dotenvExpand.expand(dotenvDefaults.config({
    path: './.env',
    encoding: 'utf8',
    defaults: './.env.example',
}));
dotenvExpand.expand(dotenvMono.load({
    path: node_path.join(__dirname$1, '../.env'),
    encoding: 'utf8',
}));
async function readJsonFile(path) {
    const file = await promises.readFile(path, 'utf8');
    return JSON.parse(file);
}
const start = async () => {
    console.log(`Currently running in ${__dirname$1}`);
    const nestApp = await core.NestFactory.create(AppModule, new platformFastify.FastifyAdapter({
        logger: {
            level: 'debug',
            transport: {
                target: 'pino-pretty',
            },
        },
        trustProxy: true,
    }), { bodyParser: false });
    if (process.env.NODE_ENV !== 'production') {
        let name;
        let version;
        try {
            const { name: packageName, version: packageVersion } = await readJsonFile('./package.json');
            name = packageName;
            version = packageVersion;
        }
        catch {
            name = process.env.npm_package_name || 'auth-app';
            version = process.env.npm_package_version || 'Unknown';
        }
        const gitInfo = getRepoInfo();
        const bannerText = `${figlet.textSync(`<${name}>`, {
            font: 'ANSI Shadow',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true,
        })}\n`;
        if (process.env.NODE_ENV !== 'test') {
            const gitText = chalk.yellowBright.bold(`Version: ${version}\n${chalk.blueBright(`Commit: ${gitInfo.abbreviatedSha} (${gitInfo.lastTag === 'null' ? 'unknown' : gitInfo.lastTag})\nAuthor: ${gitInfo.author} (${gitInfo.authorDate})\nMessage: ${gitInfo.commitMessage}\nCommits since tag: ${gitInfo.commitsSinceLastTag}\n${chalk.blueBright(`Branch: ${gitInfo.branch}`)}`)}`);
            const warning = process.env.NODE_ENV !== 'production' || gitInfo.branch !== 'master'
                ? chalk.redBright.bold('WARNING: This is a development build. Do not use in production.')
                : undefined;
            const dockerWarning = chalk.redBright.bold("Psst! Make sure you've set up your .env file and launched the database and redis containers!\nYou can do this with the command: docker compose up -d db db2 cache");
            const contextInfo = chalk.yellowBright.bold(`CI: ${ciDetect()}\nInside Docker?: ${isDocker() ? 'YES!!' : 'no🤡'}\nNODE_ENV: ${process.env.NODE_ENV}\nNODE_APP_INSTANCE: ${process.env.NODE_APP_INSTANCE}\nPORT: ${process.env.PORT}\nFASTIFY_PORT: ${process.env.FASTIFY_PORT}\n`);
            console.log(chalk.greenBright.bold.italic(bannerText));
            console.log(gitText);
            if (warning)
                console.log(warning);
            console.log(dockerWarning);
            console.log(contextInfo);
            console.log(chalk.bgWhiteBright.greenBright('Now Nest.js based!'));
        }
    }
    try {
        const scanResult = scanEnv('../../.env.example');
        if (scanResult.length > 0)
            console.error(`The following required environment variables are missing: ${scanResult.join(', ')}`);
    }
    catch (error) {
        console.error(error);
        console.error('failed to check if environment variables are missing, likely due to a missing .env.example');
    }
    nestApp.useStaticAssets({ root: node_path.join(__dirname$1, '..', 'public') });
    nestApp.enableVersioning();
    const server = nestApp.getHttpAdapter().getInstance();
    await fastify(server);
    nestApp.useGlobalPipes(new common.ValidationPipe({
        whitelist: false,
    }));
    await nestApp.listen(process.env.PORT || process.env.FASTIFY_PORT || '8000', '0.0.0.0', (error, address) => {
        if (error)
            throw error;
        if (process.env.NODE_APP_INSTANCE === '0' || (!process.env.NODE_APP_INSTANCE && process.env.NODE_ENV !== 'test'))
            server.log.info(`Server listening at ${address}`);
        if (process.send)
            process.send('ready');
    });
    return nestApp;
};
let entryFile = process.argv?.[1];
if (entryFile === __filename$1) {
    start();
}

exports.start = start;
