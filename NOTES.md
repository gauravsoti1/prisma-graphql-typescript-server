Q) What does the command `npx prisma init` do?
Tags) prisma, node
A) - It creates `schema.prisma` file inside prisma folder which contains the start of a Prisma schema.
- It also creates a .env file and the environment variables defined are made available to Prisma

Q) What's the easiest way to host a free db for practice?
Tags) database, hosting
A) Use [railway]([railway](https://railway.app/))

Q) How to model a one-to-many relation between two models in prisma?
Tags) prisma
A) Let's take an example of User with id field and messages models.

```prisma
model User {
  id        Int       @id @default(autoincrement())
  messages  Message[]
}

model Message {
  id        Int      @id @default(autoincrement())
  userId    Int
  user      User     @relation(fields: [userId], references: [id])
}

```

Q) What's the right way to think about your prisma schema?
Tags) prisma
A) Think of the Prisma Schema as the glue between the shape of your database and the API that interacts with it.

Q) How to perform a prisma db migration?
Tags) prisma
A) `npx prisma migrate dev`
  And if you want to name the migration: 
  `npx prisma migrate dev --name init`

Q) Give an example of seed file for prisma
Tags) prisma, database
A) 
```typescript
// seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

```

Q) How to run a prisma seed file?
Tags) prisma
A) seed file is a normal js or ts file. So we can run it with node or typescript or ts-node-dev like this
`ts-node-dev prisma/seed.ts`

Q) What are the 2 approaches to building a GraphQL schema?
Tags) graphql
A) 
1. Code first: Your application code defines and generates a GraphQL schema
2. SDL-first: You manually write the GraphQL schema

Q) What scalar data types does graphql support by default?
Tags) graphql
A) 
1. Int
2. Float
3. String
4. Boolean
5. ID

Q) How to define a custom scalar type in graphql like Date?
Tags) graphql 
A) Tjere are pre-made custom scalar type definitions available in the open source community: graphql-scalars
They can be used like this:
```typescript

import SchemaBuilder from "@pothos/core";
import { DateResolver } from "graphql-scalars";

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date };
  };
}>({});

builder.addScalarType("Date", DateResolver);

```

Q) How can you be sure that your frontend graphql query will stay in sync with the backend schema? 
Tags) graphql
A) By using Graphql Codegen

Q) What are the roles of Prisma, Pothos and Graphql codegen in a typescript node js and react full-stack project?
Tags) graphql, prisma, pothos
A) 
1. Prisma will generate types based off of your database schema
2. Pothos will use those types to expose GraphQL types via an API
3. GraphQL Codegen will read your GraphQL schema and generate types for your frontend codebase representing what is available via the API and how to interact with it.

Q)