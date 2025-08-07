"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle2, ShoppingCart, User, Search, Sun, Moon, Users, Sprout, Star, Package, TrendingUp, Edit, Trash2, ArrowUp, ArrowDown, Upload, List, BellIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data for the dashboard
const performanceMetrics = [
  { title: "Total Sales", value: "$12,500", description: "Revenue from all produce sold", icon: <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" /> },
  { title: "Best-Selling Item", value: "Organic Heirloom Tomatoes", description: "This week's best-selling product", icon: <Sprout className="h-6 w-6 text-green-600 dark:text-green-400" /> },
  { title: "Weekly Orders", value: "185", description: "Total orders processed this week", icon: <Package className="h-6 w-6 text-green-600 dark:text-green-400" /> },
  { title: "Customer Reviews", value: "4.8 / 5 stars (92 reviews)", description: "Average rating across all products", icon: <Star className="h-6 w-6 text-green-600 dark:text-green-400" /> },
];

const inventoryItems = [
  { id: 1, image: "https://placehold.co/50x50/f0fdf4/1e40af?text=Carrots", name: "Organic Carrots", category: "Vegetables", price: "$3.49", stock: 150 },
  { id: 2, image: "https://placehold.co/50x50/fffbeb/b45309?text=Eggs", name: "Free-Range Eggs", category: "Dairy & Eggs", price: "$5.00", stock: 80 },
  { id: 3, image: "https://placehold.co/50x50/f0f9ff/1d4ed8?text=Cheese", name: "Artisan Goat Cheese", category: "Dairy & Eggs", price: "$12.00", stock: 35 },
  { id: 4, image: "https://placehold.co/50x50/fdf2f8/be185d?text=Berries", name: "Fresh Blueberries", category: "Fruits", price: "$4.75", stock: 200 },
];

const demandData = [
  { name: "Organic Carrots", demand: 180 },
  { name: "Free-Range Eggs", demand: 150 },
  { name: "Artisan Goat Cheese", demand: 210 },
  { name: "Fresh Blueberries", demand: 250 },
];

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
          <a href="#" className="flex items-center space-x-3 p-3 rounded-md bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 font-medium">
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
          <a href="#" className="flex items-center space-x-3 p-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <CheckCircle2 className="h-5 w-5" />
            <span>Approvals</span>
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b dark:border-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <div className="md:hidden flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">🌱 logo</span>
            </div>
            <div className="flex-1 flex justify-center md:justify-start">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search for produce or farmers..."
                  className="pl-9 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <BellIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <User className="h-5 w-5" />
              </Button>
              <Button onClick={toggleTheme} variant="ghost" size="icon" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <h1 className="text-3xl font-bold mb-8">Farmer Dashboard Overview</h1>
          
          <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {performanceMetrics.map((item, index) => (
              <Card key={index} className="rounded-xl p-4 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700">
                <CardContent className="flex items-center justify-between p-0">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
                    <p className="text-3xl font-bold mt-1 text-green-600 dark:text-green-400">{item.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                  </div>
                  <div className="p-3">
                    {item.icon}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
          <Card className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700 mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Fill in the details to add a new product to your inventory.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Product Name</label>
                <Input placeholder="e.g., Organic Heirloom Tomatoes" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Price (per unit/lb)</label>
                <Input placeholder="e.g., 4.99" />
              </div>
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Description</label>
                <textarea rows="3" className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-800" placeholder="A short description of your product"></textarea>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Quantity in Stock</label>
                <Input placeholder="e.g., 100" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Product Image</label>
                <div className="flex items-center space-x-2">
                  <Input type="file" id="product-image" className="hidden" />
                  <label htmlFor="product-image" className="cursor-pointer flex-1 flex items-center justify-center p-2 rounded-md border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-green-500 transition-colors">
                    <Upload className="h-5 w-5 text-gray-500" />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600 transition-colors">
                Save Product
              </Button>
            </div>
          </Card>

          <h2 className="text-xl font-semibold mb-4">Current Product Inventory</h2>
          <Card className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700 mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Manage your active and inactive product listings.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3">Image</th>
                    <th scope="col" className="px-6 py-3">Product Name</th>
                    <th scope="col" className="px-6 py-3">Category</th>
                    <th scope="col" className="px-6 py-3">Price</th>
                    <th scope="col" className="px-6 py-3">Stock</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryItems.map((item) => (
                    <tr key={item.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                      <td className="px-6 py-4">
                        <img src={item.image} alt={item.name} width="50" height="50" className="rounded-md" />
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">{item.name}</td>
                      <td className="px-6 py-4">{item.category}</td>
                      <td className="px-6 py-4">{item.price}</td>
                      <td className="px-6 py-4">{item.stock}</td>
                      <td className="px-6 py-4 flex space-x-2">
                        <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-50 dark:hover:bg-red-950">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <h2 className="text-xl font-semibold mb-4">Demand Trends</h2>
          <Card className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Overview of demand for your products over the last 6 months.</p>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <BarChart
                  data={demandData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="demand" fill="#4ade80" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
