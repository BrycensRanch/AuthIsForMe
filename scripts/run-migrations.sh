#!/bin/bash

# Run those PESKY prisma database migrations for our docker container
# This script is run by the docker container on startup
cd backend && pnpm prisma migrate deploy
