import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedData = [
  {
    name: "Jack",
    messages: {
      create: [
        {
          body: "A Note for Jack",
        },
        {
          body: "Another note for Jack",
        },
      ],
    },
  },
  {
    name: "Ryan",
    messages: {
      create: [
        {
          body: "A Note for Ryan",
        },
        {
          body: "Another note for Ryan",
        },
      ],
    },
  },
  {
    name: "Adam",
    messages: {
      create: [
        {
          body: "A Note for Adam",
        },
        {
          body: "Another note for Adam",
        },
      ],
    },
  },
];
async function main() {
  // Delete all `User` and `Message` records
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});
  // (Re-)Create dummy `User` and `Message` records
  seedData.forEach(async (user) => {
    await prisma.user.create({ data: user });
  });
}

main().then(() => {
  console.log("Data seeded");
});
