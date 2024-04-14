import { prisma } from "@/app/libs/prisma";
import { NextRequest, NextResponse } from "../../../../../node_modules/next/server";
import { options } from "@/app/options";
import { getServerSession } from "next-auth/next";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;

    const post = await prisma.post.findUnique({
      where: {
        id: id
      }
    })

    return NextResponse.json({
      id: "testid",
      title: "タイトル",
      content: "これはこれです",
      date: new Date()
    });
  } catch {
    return NextResponse.error();
  }
}