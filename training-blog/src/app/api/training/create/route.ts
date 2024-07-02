import { prisma } from "@/app/libs/prisma";
import { NextRequest, NextResponse } from "../../../../../node_modules/next/server";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/options";
import { encryptSha256 } from "@/app/utils/encryptSha256";

export async function POST(request: NextRequest) {
  const session = await getServerSession(options);
  console.log(request)
  if (!(session?.user?.email)) {
    return NextResponse.error();
  }
  try {
    const { trainingName, weight, reps, set, date } = await request.json()

    const hashed = encryptSha256(session.user.email!);

    const training = await prisma.training.create({
      data: {
        userId: hashed,
        trainingName,
        weight,
        reps,
        set,
        date,
      }
    })

    return NextResponse.json(training);
  } catch(error) {
    return NextResponse.error();
  }
}