import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

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