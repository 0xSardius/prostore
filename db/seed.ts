import { config } from "dotenv";
import { PrismaClient } from "../lib/generated/prisma/client.js";
import sampleData from "./sample-data";

// Load environment variables
config();

async function main() {
  const prisma = new PrismaClient();

  try {
    await prisma.product.deleteMany();

    await prisma.product.createMany({
      data: sampleData.products,
    });

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();
