import { PrismaClient } from "@prisma/client";

export * from ".prisma/client/index";

export const prisma: PrismaClient = new PrismaClient();