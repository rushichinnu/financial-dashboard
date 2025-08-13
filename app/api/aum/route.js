import { NextResponse } from "next/server";

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({
    value: "12.19 Cr",
    change: "0.77",
    trend: "up",
  });
}
