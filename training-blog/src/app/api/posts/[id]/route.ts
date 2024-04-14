import { prisma } from "@/app/libs/prisma";
import { NextRequest, NextResponse } from "../../../../../node_modules/next/server";
import { options } from "@/app/options";
import { getServerSession } from "next-auth/next";

export async function GET(request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const id = params.id;
    if (!id) {
      return new NextResponse("User ID is required " + params, { status: 400 });
    }

    const post = await prisma.post.findUnique({
      where: {
        id: id
      }
    })

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(error);
  }
}