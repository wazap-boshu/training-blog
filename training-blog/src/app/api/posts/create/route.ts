import { prisma } from "@/app/libs/prisma";
import { NextRequest, NextResponse } from "../../../../../node_modules/next/server";

export async function POST(request: NextRequest) {
  try {
    const { title, content } = await request.json()

    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
        date: new Date()
      }
    })

    return NextResponse.json(post);
  } catch {
    return NextResponse.error();
  }
}