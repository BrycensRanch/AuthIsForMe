/* eslint-disable unicorn/prevent-abbreviations */
declare global {
	namespace NodeJS {
		interface ProcessEnvironment {
			GOOGLE_CLIENT_ID: string;
			GOOGLE_CLIENT_SECRET: string;
			GITHUB_CLIENT_ID: string;
			GITHUB_CLIENT_SECRET: string;
			APPLE_CLIENT_ID: string;
			APPLE_KEY_ID: string;
			APPLE_TEAM_ID: string;
			APPLE_PRIVATE_KEY: string;
		}
	}
}
export interface GitHubUserAPIResponse {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	name: string;
	company: string;
	blog: string;
	location: string;
	email: null;
	hireable: null;
	bio: null;
	twitter_username: string;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: Date;
	updated_at: Date;
}

export interface NPMRegistryResponse {
	_id: ID;
	_rev: string;
	name: ID;
	description: MainDescription;
	readme: string;
	maintainers?: Maintainer[];
	license: License;
	repository: MainRepository;
	contributors?: MainContributor[];
	author?: Author;
	homepage?: string;
}

export enum ID {
	TypesThree = "@types/three",
}

export interface MainContributor {
	name: ContributorName;
	url: string;
	githubUsername?: GithubUsername;
}

export enum GithubUsername {
	Apurvaojas = "apurvaojas",
	Danyim = "danyim",
	Devilsparta = "devilsparta",
	Dhritzkiv = "dhritzkiv",
	Dukuo = "Dukuo",
	Efokschaner = "efokschaner",
	Elk941 = "elk941",
	Florentpoujol = "florentpoujol",
	Gyohk = "gyohk",
	Ivoisbelongtous = "ivoisbelongtous",
	Joshuaellis = "joshuaellis",
	JulianSSS = "JulianSSS",
	KonstantinLukaschenko = "KonstantinLukaschenko",
	Methuselah96 = "Methuselah96",
	Nakakura = "nakakura",
	NotWoods = "NotWoods",
	Omni360 = "omni360",
	Piranha771 = "piranha771",
	Pro = "Pro",
	Psuter = "psuter",
	PsychoSTS = "PsychoSTS",
	Qszhusightp = "qszhusightp",
	S093294 = "s093294",
	Saranshkataria = "saranshkataria",
	SereznoKot = "SereznoKot",
	Sethk = "sethk",
}

export enum ContributorName {
	ApurvaOjas = "Apurva Ojas",
	BrandonRobergeQinsiZHU = "Brandon Roberge, Qinsi ZHU",
	DanielHritzkiv = "Daniel Hritzkiv",
	DanielYim = "Daniel Yim",
	DavidAsmuth = "David Asmuth",
	DilipRamirez = "Dilip Ramirez",
	EdmundFokschaner = "Edmund Fokschaner",
	EthanKay = "Ethan Kay",
	FlorentPoujol = "Florent Poujol",
	HouChunlei = "HouChunlei",
	Ivo = "Ivo",
	JoshEllis = "Josh Ellis",
	JulianStrecker = "Julian Strecker",
	Kon = "Kon",
	KonstantinLukaschenko = "Konstantin Lukaschenko",
	Methuselah96 = "Methuselah96",
	NameBrandonRobergeQinsiZHU = "Brandon Roberge,\n//                 Qinsi ZHU",
	NathanBierema = "Nathan Bierema",
	PhilippeSuter = "Philippe Suter",
	PoulKjeldagerSørensen = "Poul Kjeldager Sørensen",
	PurpleBrandonRobergeQinsiZHU = "Brandon Roberge,\u000D\n//                 Qinsi ZHU",
	RoelofJooste = "Roelof Jooste",
	SaranshKataria = "Saransh Kataria",
	SatoruKimura = "Satoru Kimura",
	SereznoKot = "SereznoKot",
	SethKingsley = "Seth Kingsley",
	StefanProfanter = "Stefan Profanter",
	TigerOakes = "Tiger Oakes",
	ToshiyaNakakura = "Toshiya Nakakura",
	ZhangHao = "Zhang Hao",
}

export enum MainDescription {
	TypeScriptDefinitionsForThree = "TypeScript definitions for three",
}

export interface DistTags {
	latest: string;
	"ts2.0": string;
	"ts2.1": string;
	"ts2.2": string;
	"ts2.3": string;
	"ts2.4": string;
	"ts2.5": string;
	"ts2.6": string;
	"ts2.7": string;
	"ts2.8": string;
	"ts2.9": string;
	"ts3.0": string;
	"ts3.1": string;
	"ts3.2": string;
	"ts3.3": string;
	"ts3.4": string;
	"ts3.5": string;
	"ts3.6": string;
	"ts3.7": string;
	"ts3.8": string;
	"ts3.9": string;
	"ts4.0": string;
	"ts4.1": string;
	"ts4.2": string;
	"ts4.3": string;
	"ts4.4": string;
	"ts4.5": string;
	"ts4.6": string;
	"ts4.7": string;
	"ts4.8": string;
	"ts4.9": string;
	"ts5.0": string;
	"ts5.1": string;
}

export enum License {
	MIT = "MIT",
}

export interface Maintainer {
	name: MaintainerName;
	email: string;
}

export enum MaintainerName {
	Kon = "Kon",
	Types = "types",
}

export interface MainRepository {
	type: Type;
	url: string;
	directory: Directory;
}

export enum Directory {
	TypesThree = "types/three",
}

export enum Type {
	Git = "git",
}

export interface Users {
	jpfilevich: boolean;
	azertypow: boolean;
	hadigolkarian: boolean;
}

export interface Versions {
	"0.0.5-alpha": The0011AlphaClass;
	"0.0.6-alpha": The0011AlphaClass;
	"0.0.11-alpha": The0011AlphaClass;
	"0.0.12-alpha": The0011AlphaClass;
	"0.0.13-alpha": The0011AlphaClass;
	"0.0.14-alpha": The0011AlphaClass;
	"0.0.15-alpha": The0011AlphaClass;
	"0.0.16-alpha": The0011AlphaClass;
	"0.0.17": The0011AlphaClass;
	"0.0.18": The0018_Class;
	"0.0.19": The0018_Class;
	"0.0.20": The0018_Class;
	"0.0.21": The0018_Class;
	"0.0.22": The0018_Class;
	"0.0.23": The0018_Class;
	"0.0.24": The0018_Class;
	"0.0.25": The0018_Class;
	"0.0.26": The0026;
	"0.0.27": The0026;
	"0.0.28": The0026;
	"0.0.29": The0026;
	"0.81.0": The0026;
	"0.81.1": The0026;
	"0.83.0": The0026;
	"0.83.1": The0026;
	"0.83.2": The0026;
	"0.83.3": The0026;
	"0.83.4": The0026;
	"0.83.5": The0026;
	"0.84.0": The0026;
	"0.84.1": The0026;
	"0.84.2": The0026;
	"0.84.3": The0026;
	"0.84.4": The0026;
	"0.84.5": The0845;
	"0.84.6": The0026;
	"0.84.7": The0026;
	"0.84.8": The0026;
	"0.84.9": The0026;
	"0.84.10": The0026;
	"0.84.11": The0026;
	"0.84.12": The0026;
	"0.84.13": The0026;
	"0.84.14": The0026;
	"0.84.15": The0026;
	"0.84.16": The0026;
	"0.84.17": The0026;
	"0.84.18": The0026;
	"0.84.19": The0026;
	"0.84.20": The0026;
	"0.84.21": The0026;
	"0.84.22": The0026;
	"0.84.23": The0026;
	"0.84.24": The0026;
	"0.84.25": The0026;
	"0.84.26": The0026;
	"0.84.27": The0026;
	"0.84.28": The0026;
	"0.84.29": The0026;
	"0.84.30": The0026;
	"0.84.31": The0026;
	"0.84.32": The0026;
	"0.84.33": The0026;
	"0.84.34": The0026;
	"0.84.35": The0026;
	"0.84.36": The0026;
	"0.84.37": The0026;
	"0.89.0": The0026;
	"0.89.1": The0026;
	"0.89.2": The0026;
	"0.89.3": The0026;
	"0.89.4": The0026;
	"0.89.5": The0026;
	"0.89.6": The0026;
	"0.89.7": The08910;
	"0.89.8": The08910;
	"0.89.9": The08910;
	"0.89.10": The08910;
	"0.89.11": The08910;
	"0.89.12": The08910;
	"0.91.0": The08910;
	"0.91.1": The08910;
	"0.91.2": The08910;
	"0.91.3": The08910;
	"0.91.4": The08910;
	"0.91.5": The08910;
	"0.91.6": The08910;
	"0.91.7": The08910;
	"0.91.8": The08910;
	"0.91.9": The08910;
	"0.91.10": The08910;
	"0.91.11": The08910;
	"0.91.12": The08910;
	"0.91.13": The08910;
	"0.91.14": The08910;
	"0.92.0": The08910;
	"0.92.1": The08910;
	"0.92.2": The08910;
	"0.92.3": The08910;
	"0.92.4": The08910;
	"0.92.5": The08910;
	"0.92.6": The08910;
	"0.92.7": The08910;
	"0.92.8": The08910;
	"0.92.9": The08910;
	"0.92.10": The08910;
	"0.92.11": The08910;
	"0.92.12": The08910;
	"0.92.13": The08910;
	"0.92.14": The08910;
	"0.92.15": The08910;
	"0.92.16": The08910;
	"0.92.17": The08910;
	"0.92.18": The08910;
	"0.92.19": The08910;
	"0.92.20": The08910;
	"0.92.21": The08910;
	"0.92.22": The08910;
	"0.92.23": The09;
	"0.92.24": The09;
	"0.92.25": The09;
	"0.93.0": The09;
	"0.93.1": The09;
	"0.93.2": The09;
	"0.93.3": The09;
	"0.93.4": The09;
	"0.93.5": The09;
	"0.93.6": The09;
	"0.93.7": The09;
	"0.93.8": The09;
	"0.93.9": The09;
	"0.93.10": The09;
	"0.93.11": The09;
	"0.93.12": The09;
	"0.93.13": The09;
	"0.93.14": The09;
	"0.93.15": The09;
	"0.93.16": The09;
	"0.93.17": The09;
	"0.93.18": The09;
	"0.93.19": The09;
	"0.93.20": The09;
	"0.93.21": The09;
	"0.93.22": The09;
	"0.93.23": The093;
	"0.93.24": The093;
	"0.93.25": The093;
	"0.93.26": The093;
	"0.93.27": The093;
	"0.93.28": The093;
	"0.93.29": The093;
	"0.93.30": The093;
	"0.93.31": The093;
	"0.103.2": The01032;
	"0.125.0": The01;
	"0.125.1": The01;
	"0.125.2": The01;
	"0.125.3": The01;
	"0.126.0": The01;
	"0.126.1": The01;
	"0.126.2": The01;
	"0.127.0": The01;
	"0.127.1": The01;
	"0.128.0": The01;
	"0.129.0": The01;
	"0.129.1": The01;
	"0.129.2": The01;
	"0.130.0": The01;
	"0.130.1": The01;
	"0.130.2": The01;
	"0.131.0": The01;
	"0.131.1": The01;
	"0.132.0": The01;
	"0.132.1": The01;
	"0.132.2": The01;
	"0.133.0": The01;
	"0.133.1": The01;
	"0.134.0": The01;
	"0.135.0": The01;
	"0.136.0": The01;
	"0.136.1": The01;
	"0.137.0": The01;
	"0.138.0": The01;
	"0.139.0": The01;
	"0.140.0": The01;
	"0.141.0": The014;
	"0.142.0": The014;
	"0.143.0": The014;
	"0.143.1": The014;
	"0.143.2": The014;
	"0.144.0": The014;
	"0.146.0": The014;
	"0.147.0": The014;
	"0.147.1": The014;
	"0.148.0": The014;
	"0.148.1": The014;
	"0.149.0": The014;
	"0.150.0": The01500;
}

export interface The0011AlphaClass {
	name: ID;
	version: string;
	description: string;
	main: string;
	scripts: DirectoriesClass;
	author: Maintainer;
	license: License;
	typings: Typ;
	dependencies: DirectoriesClass;
	_id: string;
	_shasum: string;
	_from: string;
	_resolved: string;
	_npmVersion: string;
	_nodeVersion: string;
	_npmUser: Maintainer;
	dist: The0011AlphaDist;
	maintainers: Maintainer[];
	_npmOperationalInternal: NpmOperationalInternal;
	directories: DirectoriesClass;
	repository?: The0011AlphaRepository;
}

export interface NpmOperationalInternal {
	host: Host;
	tmp: string;
}

export enum Host {
	Packages12WestInternalNpmjsCOM = "packages-12-west.internal.npmjs.com",
	Packages16EastInternalNpmjsCOM = "packages-16-east.internal.npmjs.com",
	Packages18EastInternalNpmjsCOM = "packages-18-east.internal.npmjs.com",
	S3NpmRegistryPackages = "s3://npm-registry-packages",
}

export interface DirectoriesClass {}

export interface The0011AlphaDist {
	shasum: string;
	tarball: string;
	integrity: string;
	signatures: Signature[];
}

export interface Signature {
	keyid: Keyid;
	sig: string;
}

export enum Keyid {
	SHA256Jl3Bwswu80PjjokCgh0O2W5C2U4LhQAE57Gj9Cz1KzA = "SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA",
}

export interface The0011AlphaRepository {
	type: Type;
	url: string;
}

export enum Typ {
	IndexDTs = "index.d.ts",
}

export interface The0018_Class {
	name: ID;
	version: string;
	description: string;
	license: License;
	author: string;
	main: string;
	repository: The0011AlphaRepository;
	scripts: DirectoriesClass;
	dependencies: DirectoriesClass;
	typings: Typ;
	_id: string;
	dist: The0011AlphaDist;
	maintainers: Maintainer[];
	_npmUser: Maintainer;
	_npmOperationalInternal: NpmOperationalInternal;
	directories: DirectoriesClass;
	typesPublisherContentHash?: string;
	peerDependencies?: DirectoriesClass;
}

export interface The0026 {
	name: ID;
	version: string;
	description: The0026_Description;
	license: License;
	author?: string;
	main: string;
	repository: The0011AlphaRepository;
	scripts: DirectoriesClass;
	dependencies: The0026_Dependencies;
	peerDependencies?: DirectoriesClass;
	typings?: Typ;
	typesPublisherContentHash: string;
	_id: string;
	dist: The0011AlphaDist;
	maintainers: Maintainer[];
	_npmUser: Maintainer;
	_npmOperationalInternal: NpmOperationalInternal;
	directories: DirectoriesClass;
	typeScriptVersion?: string;
	contributors?: MainContributor[];
}

export interface The0026_Dependencies {
	"@types/webvr-api": TypesWebvrAPI;
}

export enum TypesWebvrAPI {
	Empty = "*",
}

export enum The0026_Description {
	TypeScriptDefinitionsForThreeJS = "TypeScript definitions for three.js",
	TypeScriptDefinitionsForThreeJSR81 = "TypeScript definitions for three.js r81",
}

export interface The01032 {
	name: ID;
	version: string;
	typings: null;
	description: string;
	main: string;
	scripts: DirectoriesClass;
	author: string;
	repository: string;
	license: License;
	dependencies: The01032_Dependencies;
	_id: string;
	dist: The01032_Dist;
	maintainers: Maintainer[];
	_npmUser: Maintainer;
	directories: DirectoriesClass;
	_npmOperationalInternal: NpmOperationalInternal;
	_hasShrinkwrap: boolean;
	deprecated: string;
}

export interface The01032_Dependencies {
	three: TypesWebvrAPI;
}

export interface The01032_Dist {
	integrity: string;
	shasum: string;
	tarball: string;
	fileCount: number;
	unpackedSize: number;
	"npm-signature"?: string;
	signatures: Signature[];
}

export interface The01 {
	name: ID;
	version: string;
	description: MainDescription;
	license: License;
	contributors: MainContributor[];
	main: string;
	types: Typ;
	repository: MainRepository;
	scripts: DirectoriesClass;
	dependencies: DirectoriesClass;
	typesPublisherContentHash: string;
	typeScriptVersion: string;
	_id: string;
	dist: The01032_Dist;
	_npmUser: Maintainer;
	directories: DirectoriesClass;
	maintainers: Maintainer[];
	_npmOperationalInternal: NpmOperationalInternal;
	_hasShrinkwrap: boolean;
	homepage?: string;
}

export interface The014 {
	name: ID;
	version: string;
	description: MainDescription;
	homepage: string;
	license: License;
	contributors: MainContributor[];
	main: string;
	types: Typ;
	repository: MainRepository;
	scripts: DirectoriesClass;
	dependencies: The01410_Dependencies;
	typesPublisherContentHash: string;
	typeScriptVersion: string;
	_id: string;
	dist: The01032_Dist;
	_npmUser: Maintainer;
	directories: DirectoriesClass;
	maintainers: Maintainer[];
	_npmOperationalInternal: NpmOperationalInternal;
	_hasShrinkwrap: boolean;
}

export interface The01410_Dependencies {
	"@types/webxr": TypesWebvrAPI;
}

export interface The01500 {
	name: ID;
	version: string;
	description: MainDescription;
	homepage: string;
	license: License;
	contributors: MainContributor[];
	main: string;
	types: Typ;
	repository: MainRepository;
	scripts: DirectoriesClass;
	dependencies: The01500_Dependencies;
	typesPublisherContentHash: string;
	typeScriptVersion: string;
	exports: Exports;
	_id: string;
	dist: The01032_Dist;
	_npmUser: Maintainer;
	directories: DirectoriesClass;
	maintainers: Maintainer[];
	_npmOperationalInternal: NpmOperationalInternal;
	_hasShrinkwrap: boolean;
}

export interface The01500_Dependencies {
	"@types/stats.js": TypesWebvrAPI;
	"@types/webxr": TypesWebvrAPI;
	fflate: string;
	"lil-gui": string;
}

export interface Exports {
	".": Empty;
	"./examples/fonts/*": string;
	"./examples/jsm/*": string;
	"./addons/*": string;
	"./src/*": string;
	"./nodes": string;
	"./package.json": string;
}

export interface Empty {
	import: string;
	require: string;
}

export interface The0845 {
	name: ID;
	version: string;
	description: The0026_Description;
	license: License;
	contributors: The0845_Contributor[];
	main: string;
	repository: The0011AlphaRepository;
	scripts: DirectoriesClass;
	dependencies: The0845_Dependencies;
	peerDependencies: DirectoriesClass;
	typesPublisherContentHash: string;
	typeScriptVersion: string;
	_id: string;
	dist: The0011AlphaDist;
	maintainers: Maintainer[];
	_npmUser: Maintainer;
	_npmOperationalInternal: NpmOperationalInternal;
	directories: DirectoriesClass;
}

export interface The0845_Contributor {
	name: ContributorName;
	url: string;
}

export interface The0845_Dependencies {
	"@types/dat-gui": TypesWebvrAPI;
	"@types/stats.js": TypesWebvrAPI;
	"@types/tween.js": TypesWebvrAPI;
	"@types/webvr-api": TypesWebvrAPI;
}

export interface The08910 {
	name: ID;
	version: string;
	description: The0026_Description;
	license: License;
	contributors: MainContributor[];
	main: string;
	repository: The0011AlphaRepository;
	scripts: DirectoriesClass;
	dependencies: The0026_Dependencies;
	typesPublisherContentHash: string;
	typeScriptVersion: string;
	_id: string;
	dist: The01032_Dist;
	maintainers: Maintainer[];
	_npmUser: Maintainer;
	directories: DirectoriesClass;
	_npmOperationalInternal: NpmOperationalInternal;
	_hasShrinkwrap: boolean;
}

export interface The09 {
	name: ID;
	version: string;
	description: The0026_Description;
	license: License;
	contributors: MainContributor[];
	main: string;
	repository: The0011AlphaRepository;
	scripts: DirectoriesClass;
	dependencies: DirectoriesClass;
	typesPublisherContentHash: string;
	typeScriptVersion: string;
	_id: string;
	dist: The01032_Dist;
	maintainers: Maintainer[];
	_npmUser: Maintainer;
	directories: DirectoriesClass;
	_npmOperationalInternal: NpmOperationalInternal;
	_hasShrinkwrap: boolean;
	types?: Types;
}

export enum Types {
	Empty = "",
	Index = "index",
}

export interface The093 {
	name: ID;
	version: string;
	description: The0026_Description;
	license: License;
	contributors: MainContributor[];
	main: string;
	types: Types;
	repository: MainRepository;
	scripts: DirectoriesClass;
	dependencies: DirectoriesClass;
	typesPublisherContentHash: string;
	typeScriptVersion: string;
	_id: string;
	dist: The01032_Dist;
	maintainers: Maintainer[];
	_npmUser: Maintainer;
	directories: DirectoriesClass;
	_npmOperationalInternal: NpmOperationalInternal;
	_hasShrinkwrap: boolean;
}

export interface Collected {
	metadata: Metadata;
	npm: Npm;
	source: Source;
}

export interface Metadata {
	name: string;
	scope: string;
	version: string;
	description: string;
	keywords: string[];
	date: Date;
	author: Author;
	publisher: Publisher;
	maintainers: Publisher[];
	repository: Repository;
	links: Links;
	license: string;
	devDependencies: DevDependencies;
	releases: Release[];
	hasSelectiveFiles: boolean;
}

export interface Author {
	name: string;
	email: string;
}

export interface DevDependencies {
	"@vercel/ncc": string;
	dotenv: string;
	"dotenv-expand": string;
	rimraf: string;
}

export interface Links {
	npm: string;
	homepage: string;
	repository: string;
	bugs: string;
}

export interface Publisher {
	username: string;
	email: string;
}

export interface Release {
	from: Date;
	to: Date;
	count: number;
}

export interface Repository {
	type: string;
	url: string;
	directory: string;
}

export interface Npm {
	downloads: Release[];
	starsCount: number;
}

export interface Source {
	files: Files;
	linters: string[];
}

export interface Files {
	readmeSize: number;
	testsSize: number;
}

export interface Evaluation {
	quality: Quality;
	popularity: Popularity;
	maintenance: Maintenance;
}

export interface Maintenance {
	releasesFrequency: number;
	commitsFrequency: number;
	openIssues: number;
	issuesDistribution: number;
}

export interface Popularity {
	communityInterest: number;
	downloadsCount: number;
	downloadsAcceleration: number;
	dependentsCount: number;
}

export interface Quality {
	carefulness: number;
	tests: number;
	health: number;
	branding: number;
}

export interface Score {
	final: number;
	detail: Detail;
}

export interface Detail {
	quality: number;
	popularity: number;
	maintenance: number;
}

export {};
