import { prisma } from "@/app/libs/prisma"
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/options";

export async function GET(request: Request) {
  try {
    return NextResponse.json({ message: "TESTSUCCEEDED" });
  } catch {
    return NextResponse.error()
  }
}