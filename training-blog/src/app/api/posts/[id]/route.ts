import { prisma } from "@/app/libs/prisma";
import { NextRequest, NextResponse } from "../../../../../node_modules/next/server";
import { options } from "@/app/options";
import { getServerSession } from "next-auth/next";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    const post = await prisma.post.findFirst({
      where: {
        id: id
      }
    })

    return NextResponse.json(post);
  } catch {
    return NextResponse.error();
  }
}