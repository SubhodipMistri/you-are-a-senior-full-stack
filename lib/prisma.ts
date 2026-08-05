/**
 * Prisma is generated during CI/deployment (`pnpm prisma:generate`). Keeping
 * this adapter untyped avoids making the UI build depend on a local database
 * client generation step, while server modules can import the singleton.
 */
type PrismaConstructor = new () => unknown;
const globalForPrisma = globalThis as typeof globalThis & { prisma?: unknown };
let PrismaClient: PrismaConstructor | undefined;
try {
  // Prisma's generated client is optional while rendering static UI routes.
  PrismaClient = require("@prisma/client").PrismaClient as PrismaConstructor;
} catch { /* generated at deployment */ }
export const prisma = globalForPrisma.prisma ?? (PrismaClient ? new PrismaClient() : null);
if (process.env.NODE_ENV !== "production" && prisma) globalForPrisma.prisma = prisma;
