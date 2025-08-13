"use client";
import { useEffect, useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  PieChart,
  BarChart3,
  Activity,
  ArrowRight,
} from "lucide-react";

export default function MainCards() {
  const [data, setData] = useState({ aum: null, sip: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aumRes, sipRes] = await Promise.all([
          fetch("/api/aum"),
          fetch("/api/sip"),
        ]);
        const aumData = await aumRes.json();
        const sipData = await sipRes.json();
        setData({ aum: aumData, sip: sipData });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-pulse"
          >
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* AUM Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <PieChart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Assets Under Management
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Portfolio Value
              </p>
            </div>
          </div>
          <span className="text-xs font-medium px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full">
            Current
          </span>
        </div>

        <div className="space-y-4">
          <div className="text-4xl font-bold text-gray-900 dark:text-white">
            ₹{data.aum?.value || "12.19 Cr"}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-green-600 dark:text-green-400">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">
                  +{data.aum?.change || "0.77"}% MoM
                </span>
              </div>
              <span className="text-sm text-gray-500">vs last month</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">₹2.3L</span> this month
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Equity
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                ₹8.45 Cr
              </p>
              <p className="text-xs text-green-600">+1.2%</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Debt
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                ₹3.74 Cr
              </p>
              <p className="text-xs text-blue-600">+0.3%</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>View Report</span>
          </button>
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2">
            <Activity className="w-4 h-4" />
            <span>View Trend</span>
          </button>
        </div>
      </div>

      {/* SIP Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Systematic Investment Plan
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Monthly SIP Amount
              </p>
            </div>
          </div>
          <span className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full">
            Active
          </span>
        </div>

        <div className="space-y-4">
          <div className="text-4xl font-bold text-gray-900 dark:text-white">
            ₹{data.sip?.value || "1.39 Lakh"}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <span className="text-sm font-medium">
                  +{data.sip?.change || "0"}% MoM
                </span>
              </div>
              <span className="text-sm text-gray-500">vs last month</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">₹45K</span> this month
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Active SIPs
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                24
              </p>
              <p className="text-xs text-green-600">+3 new</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Next Due
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Aug 15
              </p>
              <p className="text-xs text-orange-600">₹85K</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>View Report</span>
          </button>
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2">
            <ArrowRight className="w-4 h-4" />
            <span>View Trend</span>
          </button>
        </div>
      </div>
    </>
  );
}
