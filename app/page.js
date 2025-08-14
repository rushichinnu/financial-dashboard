import Header from "./components/dashboard/Header";
import MainCards from "./components/dashboard/MainCards";
import TimeFilter from "./components/dashboard/TimeFilter";
import StatCards from "./components/dashboard/StatCards";
import Charts from "./components/dashboard/Charts";
import QuickActions from "./components/dashboard/QuickActions";
import SimplePDFExport from "./components/pdf/SimplePDFExport";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <div id="dashboard-content">
        <main className="container mx-auto px-4 py-6 space-y-6">
          {/* Welcome Section with Export Button */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold mb-2">
                  Welcome back, John! 👋
                </h1>
                <p className="text-blue-100">
                  Here&apos;s what&apos;s happening with your portfolio today.
                </p>
              </div>

              <SimplePDFExport />
            </div>
          </div>

          {/* Main Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MainCards />
          </div>

          {/* Time Filter */}
          <TimeFilter />

          {/* Quick Actions */}
          <QuickActions />

          {/* Statistics */}
          <StatCards />

          {/* Charts */}
          <Charts />
        </main>
      </div>
    </div>
  );
}
