import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({
    value: "1.39 Lakh",
    change: "0",
    trend: "neutral",
  });
}
