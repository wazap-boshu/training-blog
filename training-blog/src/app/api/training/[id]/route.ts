import { prisma } from "@/app/libs/prisma";
import { NextRequest, NextResponse } from "next/server";
import { options } from "@/app/options";
import { getServerSession } from "next-auth/next";
import { PrismaClient } from ".prisma/client";

export async function GET(request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const id = params.id;
    if (!id) {
      return new NextResponse("User ID is required " + params, { status: 400 });
    }

    const trainings = await prisma.training.findMany({
      where: {
        userId: id
      }
    });

    return NextResponse.json(trainings);
  } catch (error) {
    return NextResponse.json({
      error: error,
    });
  }
}