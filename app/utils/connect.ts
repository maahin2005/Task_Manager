// import { PrismaClient } from "@prisma/client";

// let prisma: PrismaClient;

// declare global {
//   // This allows us to attach `prisma` to the `global` object in a type-safe way.
//   var prisma: PrismaClient | undefined;
// }

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }

// export default prisma;

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
