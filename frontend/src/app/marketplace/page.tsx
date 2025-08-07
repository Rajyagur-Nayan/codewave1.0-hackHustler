"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { ShoppingCart, User, Search, Sun, Moon, Filter, Facebook, Instagram, Twitter } from 'lucide-react';
// import Image from 'next/image'; // The Next.js Image component is removed to fix the compilation error.

// Sample data for the produce items
const produceData = [
  {
    id: 1,
    name: "Heirloom Tomatoes",
    farmer: "Green Valley Farm",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=Tomatoes",
  },
  {
    id: 2,
    name: "Organic Kale",
    farmer: "Sunny Meadow Organics",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=Kale",
  },
  {
    id: 3,
    name: "Mixed Bell Peppers",
    farmer: "Harvest Moon Growers",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=Peppers",
  },
  {
    id: 4,
    name: "Fresh Strawberries",
    farmer: "Berry Bliss Farms",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=Strawberries",
  },
  {
    id: 5,
    name: "Organic Carrots",
    farmer: "Rootsbound Ranch",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=Carrots",
  },
  {
    id: 6,
    name: "Creamy Avocados",
    farmer: "Avocado Acres",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=Avocados",
  },
  {
    id: 7,
    name: "Broccoli Crowns",
    farmer: "Farm-to-Fork Collective",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=Broccoli",
  },
  {
    id: 8,
    name: "Sweet Blueberries",
    farmer: "Blubird Berry Patch",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=Blueberries",
  },
  {
    id: 9,
    name: "New Potatoes",
    farmer: "Spud & Spread Farm",
    image: "https://placehold.co/600x400/e2e8f0/64748b?text=Potatoes",
  },
];

const categories = ["Fruits", "Vegetables", "Dairy", "Meats"];
const tags = ["Top Selling", "Seasonal Picks"];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle dark mode on/off for the entire page
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
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">🌱 logo</span>
          </div>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Marketplace
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Subscribe
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Chat
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search for produce or farmers..."
                  className="pl-9 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
                />
              </div>
              <Button variant="ghost" size="icon" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <User className="h-5 w-5" />
              </Button>
              <Button onClick={toggleTheme} variant="ghost" size="icon" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Sidebar for Filters */}
        <aside className="w-64 hidden lg:block pr-8 border-r dark:border-gray-800">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">CATEGORIES</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer">
                    <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                    <span>{category}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">TAGS</h3>
              <ul className="space-y-2">
                {tags.map((tag) => (
                  <li key={tag} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer">
                    <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 lg:pl-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-0">
              Discover Fresh Produce
            </h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="lg:hidden flex items-center space-x-2 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-700">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700 dark:text-gray-300 text-sm">Sort by:</span>
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-[180px] dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                    <SelectValue placeholder="Recommended" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produceData.map((item) => (
              <Card key={item.id} className="rounded-xl overflow-hidden shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-t-xl w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 flex flex-col justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {item.name}
                    </CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Farmer: {item.farmer}
                    </p>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600 transition-colors">
                    Add to Box
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-800 mt-auto py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <div className="flex space-x-4 mb-2 sm:mb-0">
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">Company</a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">Support</a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">Legal</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
