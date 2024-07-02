import { prisma } from "@/app/libs/prisma"
import { NextRequest, NextResponse } from "../../../../node_modules/next/server";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/options";

export async function GET(request: Request) {  
  // try {
  //   const posts = await prisma.post.findMany();
  //   return NextResponse.json(posts);
  // } catch {
  //   return NextResponse.error()
  // }
}
