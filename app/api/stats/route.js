import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({
    purchases: { count: 0, amount: "0.00 INR" },
    redemptions: { count: 0, amount: "0.00 INR" },
    rejectedTransactions: { count: 0, amount: "0.00 INR" },
    sipRejections: { count: 0, amount: "0.00 INR" },
    newSip: { count: 0, amount: "0.00 INR" },
  });
}
