-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'MODERATOR', 'ADMIN', 'OWNER');

-- CreateEnum
CREATE TYPE "ApiKeyType" AS ENUM ('FREE', 'HOBBY', 'BUSINESS');

-- CreateTable
CREATE TABLE "Following" (
    "followId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Following_pkey" PRIMARY KEY ("followId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "banned" BOOLEAN NOT NULL DEFAULT false,
    "profilePrivate" BOOLEAN NOT NULL DEFAULT false,
    "profileViews" INTEGER NOT NULL DEFAULT 0,
    "lastSeen" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "avatar" TEXT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "biography" VARCHAR(240),

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "MojangAccount" (
    "uuid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "accessTokenHash" TEXT NOT NULL,
    "refreshtokenHash" TEXT NOT NULL,

    CONSTRAINT "MojangAccount_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "DiscordAccount" (
    "userId" INTEGER NOT NULL,
    "accessTokenHash" TEXT NOT NULL,
    "refreshtokenHash" TEXT NOT NULL,

    CONSTRAINT "DiscordAccount_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "TwitchAccount" (
    "userId" INTEGER NOT NULL,
    "accessTokenHash" TEXT NOT NULL,
    "refreshtokenHash" TEXT NOT NULL,

    CONSTRAINT "TwitchAccount_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "authorId" INTEGER,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" BIGSERIAL NOT NULL,
    "sid" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApiKey" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "type" "ApiKeyType" NOT NULL DEFAULT 'FREE',
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validUntil" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "MojangAccount_uuid_key" ON "MojangAccount"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "MojangAccount_username_key" ON "MojangAccount"("username");

-- CreateIndex
CREATE UNIQUE INDEX "MojangAccount_userId_key" ON "MojangAccount"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "MojangAccount_accessTokenHash_key" ON "MojangAccount"("accessTokenHash");

-- CreateIndex
CREATE UNIQUE INDEX "MojangAccount_refreshtokenHash_key" ON "MojangAccount"("refreshtokenHash");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordAccount_userId_key" ON "DiscordAccount"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordAccount_accessTokenHash_key" ON "DiscordAccount"("accessTokenHash");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordAccount_refreshtokenHash_key" ON "DiscordAccount"("refreshtokenHash");

-- CreateIndex
CREATE UNIQUE INDEX "TwitchAccount_userId_key" ON "TwitchAccount"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "TwitchAccount_accessTokenHash_key" ON "TwitchAccount"("accessTokenHash");

-- CreateIndex
CREATE UNIQUE INDEX "TwitchAccount_refreshtokenHash_key" ON "TwitchAccount"("refreshtokenHash");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_key_key" ON "ApiKey"("key");

-- AddForeignKey
ALTER TABLE "Following" ADD CONSTRAINT "Following_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MojangAccount" ADD CONSTRAINT "MojangAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordAccount" ADD CONSTRAINT "DiscordAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitchAccount" ADD CONSTRAINT "TwitchAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiKey" ADD CONSTRAINT "ApiKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
