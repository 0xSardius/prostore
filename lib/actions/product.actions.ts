"use server";

import { PrismaClient } from "@/lib/generated/prisma/client";
import { convertToPlainObject } from "../utils";

// Get latest products

export async function getLatestProducts() {
  const prisma = new PrismaClient();
  try {
    const data = await prisma.product.findMany({
      take: 4,
      orderBy: { createdAt: "desc" },
    });
    return convertToPlainObject(data);
  } catch (error) {
    console.error("Error getting latest products:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
