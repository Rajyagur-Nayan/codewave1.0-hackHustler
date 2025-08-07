"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";

const categories = ["Fruits", "Vegetables", "Dairy", "Meats"];
const tags = ["Top Selling", "Seasonal Picks"];

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  stock: number;
  image_url: string;
  created_at: string;
  farmer_name: string;
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:4000/farmer/dashboard"); 
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <aside className="w-64 hidden lg:block pr-8 border-r dark:border-gray-800">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                CATEGORIES
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li
                    key={category}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                    <span>{category}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                TAGS
              </h3>
              <ul className="space-y-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer"
                  >
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
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden flex items-center space-x-2 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  Sort by:
                </span>
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
            {products.map((item) => (
              <Card
                key={item.id}
                className="rounded-xl overflow-hidden shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-48">
                  <img
                    src={`http://localhost:4000/farmer/${item.image_url}`}
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
                      Farmer: {item.farmer_name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      ₹{item.price}
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
    </div>
  );
}