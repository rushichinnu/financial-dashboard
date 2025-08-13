import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({
    clients: [
      { name: "Online", value: 120 },
      { name: "New", value: 85 },
      { name: "Active", value: 200 },
      { name: "Inactive", value: 45 },
    ],
    sipBusiness: [
      { month: "Mar", value: 0.6, trend: 2.4 },
      { month: "Apr", value: 0.4, trend: 1.6 },
      { month: "May", value: 0.2, trend: 0.8 },
      { month: "Jun", value: 0.0, trend: 0.0 },
    ],
    monthlyMis: [
      { month: "Mar", online: 0.6, new: 0.5, active: 0.45, inactive: 0.2 },
      { month: "Apr", online: 0.4, new: 0.35, active: 0.3, inactive: 0.15 },
      { month: "May", online: 0.2, new: 0.25, active: 0.35, inactive: 0.1 },
      { month: "Jun", online: 0.0, new: 0.15, active: 0.4, inactive: 0.05 },
    ],
  });
}
