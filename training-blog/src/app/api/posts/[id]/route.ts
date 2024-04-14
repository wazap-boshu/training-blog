import { prisma } from "@/app/libs/prisma";
import { NextRequest, NextResponse } from "../../../../../node_modules/next/server";
import { options } from "@/app/options";
import { getServerSession } from "next-auth/next";
import {PrismaClient} from "../../../../../node_modules/.prisma/client/index";

export async function GET(request: Request,
  { params }: { params: { id: string } },
) {
  let mark = ""
  try {
    const id = params.id;
    mark = mark + id
    if (!id) {
      return new NextResponse("User ID is required " + params, { status: 400 });
    }

    const post = await new PrismaClient().post.findUnique({
      where: {
        id: id
      }
    })
    mark = mark + JSON.stringify(post)

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({
      error: error,
      mark: mark
    });
  }
}