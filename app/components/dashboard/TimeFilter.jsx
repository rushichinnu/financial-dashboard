"use client";
import { useState } from "react";
import { Calendar, Filter, Download } from "lucide-react";

export default function TimeFilter() {
  const [activeFilter, setActiveFilter] = useState("30 Days");
  const [showCustomDate, setShowCustomDate] = useState(false);

  const filters = [
    {
      label: "1 Day",
      value: "1 Days",
      color: "bg-red-50 text-red-700 border-red-200",
    },
    {
      label: "3 Days",
      value: "3 Days",
      color: "bg-orange-50 text-orange-700 border-orange-200",
    },
    {
      label: "7 Days",
      value: "7 Days",
      color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    },
    {
      label: "10 Days",
      value: "10 Days",
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      label: "30 Days",
      value: "30 Days",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      label: "90 Days",
      value: "90 Days",
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      label: "1 Year",
      value: "1 Year",
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Time Range Filter
          </h3>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowCustomDate(!showCustomDate)}
            className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Custom Range</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
              activeFilter === filter.value
                ? "bg-blue-600 text-white border-blue-600 shadow-md transform scale-105"
                : `${filter.color} hover:shadow-md hover:scale-105`
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {showCustomDate && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                From Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                To Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end space-x-3">
            <button className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              Cancel
            </button>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Apply Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
