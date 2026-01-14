import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = globalThis;

const pool =
  globalForPrisma.__prismaPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

const prisma =
  globalForPrisma.__prisma ??
  new PrismaClient({
    adapter: new PrismaPg(pool),
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.__prisma = prisma;
  globalForPrisma.__prismaPool = pool;
}

export default prisma;
