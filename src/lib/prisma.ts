import { PrismaClient } from "@prisma/client";

const globalForPrisma = { prisma: PrismaClient };

export const prisma =
  globalForPrisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV != "production") globalForPrisma.prisma;
