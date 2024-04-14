import { prisma } from "@/app/libs/prisma";
import { NextRequest, NextResponse } from "../../../../../node_modules/next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {

    console.log(request)
    const id = params.id

    // const post = await prisma.post.findFirst({
    //   where: {
    //     id: id
    //   }
    // })
    const posts = await prisma.post.findMany()

    const post = posts[0]


    return NextResponse.json(post);
  } catch {
    return NextResponse.error();
  }
}