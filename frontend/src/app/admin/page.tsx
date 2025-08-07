"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, User, Search, Sun, Moon, Users, Sprout, CheckCircle2, AlertTriangle, Clock, List, ChevronDown, ArrowRightIcon, BellIcon, InfoIcon } from 'lucide-react';
import Image from 'next/image';

// Dummy data for the dashboard
const adminData = {
  overview: [
    { title: "Total Active Users", value: "1,234", description: "including farmers and customers", icon: <Users className="h-6 w-6 text-gray-400" /> },
    { title: "Active Farmers", value: "215", description: "Currently listed on platform", icon: <Sprout className="h-6 w-6 text-gray-400" /> },
    { title: "New Registrations (7 Days)", value: "48", description: "Farmers & Customers", icon: <User className="h-6 w-6 text-gray-400" /> },
    { title: "System Uptime", value: "99.9%", description: "Stable across all services", icon: <Clock className="h-6 w-6 text-gray-400" /> },
  ],
  pendingApprovals: [
    { applicant: "John Doe Organics", applicationDate: "2024-07-20", status: "Pending" },
    { applicant: "Green Valley Farms", applicationDate: "2024-07-18", status: "Pending" },
    { applicant: "Harvest Haven", applicationDate: "2024-07-15", status: "Pending" },
  ],
  flaggedListings: [
    { product: "Organic Heirloom Tomatoes", farmer: "Willow Creek Farm", reason: "Quality Concern" },
    { product: "Farm Fresh Eggs (Brown)", farmer: "Sunny Side Poultry", reason: "Misleading Description" },
  ],
  recentActivity: [
    { text: "New farmer registered: Oakwood Produce", time: "2 hours ago" },
    { text: "Product listing updated: Fresh Organic Carrots by Green Acres Farm", time: "5 hours ago" },
    { text: "Customer support ticket closed: #2024-07-22-001", time: "(Yesterday)" },
    { text: "System backup completed: Full database backup successful", time: "(2 days ago)" },
  ],
};

// Custom CheckCircleIcon from the user's previous request, reused here
function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-8.88" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen flex font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-950 border-r dark:border-gray-800 p-4 sticky top-0 h-screen hidden md:flex flex-col">
        <div className="flex items-center space-x-2 pb-6 border-b dark:border-gray-800">
          <span className="text-2xl font-bold text-green-600 dark:text-green-400">🌱 logo</span>
        </div>
        <nav className="mt-6 flex-1 space-y-2">
          <a href="#" className="flex items-center space-x-3 p-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <List className="h-5 w-5" />
            <span>Overview</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Users className="h-5 w-5" />
            <span>Users</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Sprout className="h-5 w-5" />
            <span>Farmers</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <List className="h-5 w-5" />
            <span>Listings</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-md bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 font-medium">
            <CheckCircle2 className="h-5 w-5" />
            <span>Approvals</span>
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">

        {/* Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
          
          <h2 className="text-xl font-semibold mb-4">Admin Dashboard Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {adminData.overview.map((item, index) => (
              <Card key={index} className="rounded-xl p-4 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700">
                <CardContent className="flex items-center justify-between p-0">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
                    <p className="text-3xl font-bold mt-1">{item.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                    {item.icon}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4">Pending Approvals</h2>
          <Card className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700 mb-8">
            <h3 className="text-lg font-semibold mb-2">New Farmer Applications</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Review new farmer profiles awaiting approval to sell on FarmFresh.io.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3">Applicant Name</th>
                    <th scope="col" className="px-6 py-3">Application Date</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {adminData.pendingApprovals.map((app, index) => (
                    <tr key={index} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">{app.applicant}</td>
                      <td className="px-6 py-4">{app.applicationDate}</td>
                      <td className="px-6 py-4">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="ghost" className="p-0 h-auto text-green-600 dark:text-green-400 hover:underline">
                          Review
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <h2 className="text-xl font-semibold mb-4">Flagged Product Listings</h2>
          <Card className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700 mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Items that require attention due to customer reports or system flags.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3">Product Name</th>
                    <th scope="col" className="px-6 py-3">Farmer</th>
                    <th scope="col" className="px-6 py-3">Reason</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {adminData.flaggedListings.map((item, index) => (
                    <tr key={index} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">{item.product}</td>
                      <td className="px-6 py-4">{item.farmer}</td>
                      <td className="px-6 py-4">
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full dark:bg-red-900 dark:text-red-300">
                          {item.reason}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="ghost" className="p-0 h-auto text-green-600 dark:text-green-400 hover:underline">
                          Resolve
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <h2 className="text-xl font-semibold mb-4">Recent System Activity</h2>
          <Card className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700">
            <ul className="space-y-4">
              {adminData.recentActivity.map((activity, index) => (
                <li key={index} className="flex items-start space-x-3 text-sm">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="text-gray-900 dark:text-gray-100">{activity.text}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">{activity.time}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </main>
      </div>
    </div>
  );
}
