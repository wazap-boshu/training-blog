import { prisma } from "@/app/libs/prisma";
import { NextRequest, NextResponse } from "../../../../../node_modules/next/server";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/options";

export async function POST(request: NextRequest) {
  // const session = await getServerSession(options);
  // if (!(session?.user?.email == process.env.NEXT_PUBLIC_ADMIN_USER)) {
  //   return NextResponse.error();
  // }
  // try {
  //   const { title, content } = await request.json()

  //   const post = await prisma.post.create({
  //     data: {
  //       title: title,
  //       content: content,
  //       date: new Date()
  //     }
  //   })

  //   return NextResponse.json(post);
  // } catch {
  //   return NextResponse.error();
  // }
}