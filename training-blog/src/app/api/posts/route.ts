import { prisma } from "@/app/libs/prisma"
import { NextRequest, NextResponse } from "../../../../node_modules/next/server";

export async function GET(request: Request) {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
  } catch {
    
  }
}
