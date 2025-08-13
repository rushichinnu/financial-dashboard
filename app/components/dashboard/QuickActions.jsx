"use client";
import {
  Plus,
  FileText,
  TrendingUp,
  Users,
  Settings,
  CreditCard,
  PieChart,
  BarChart3,
} from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      icon: Plus,
      title: "Add New Client",
      description: "Onboard a new client",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      icon: CreditCard,
      title: "Process Transaction",
      description: "Buy/Sell investments",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      icon: FileText,
      title: "Generate Report",
      description: "Create portfolio report",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "View market trends",
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
    {
      icon: Users,
      title: "Client Meeting",
      description: "Schedule client review",
      color: "bg-teal-500",
      hoverColor: "hover:bg-teal-600",
    },
    {
      icon: PieChart,
      title: "Asset Allocation",
      description: "Rebalance portfolio",
      color: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600",
    },
    {
      icon: BarChart3,
      title: "Performance Review",
      description: "Analyze returns",
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
    },
    {
      icon: Settings,
      title: "Settings",
      description: "System preferences",
      color: "bg-gray-500",
      hoverColor: "hover:bg-gray-600",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => {
          const IconComponent = action.icon;
          return (
            <button
              key={index}
              className={`${action.color} ${action.hoverColor} text-white p-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 group`}
            >
              <div className="flex flex-col items-center space-y-2">
                <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <p className="text-sm font-medium">{action.title}</p>
                  <p className="text-xs opacity-90">{action.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
