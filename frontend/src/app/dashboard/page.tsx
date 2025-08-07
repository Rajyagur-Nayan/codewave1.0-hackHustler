"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckCircle2,
  Users,
  Sprout,
  Star,
  Package,
  TrendingUp,
  Edit,
  Trash2,
  Upload,
  List,
  BellIcon,
  Menu,
  X,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy data for the dashboard
const performanceMetrics = [
  {
    title: "Total Sales",
    value: "$12,500",
    description: "Revenue from all produce sold",
    icon: <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />,
  },
  {
    title: "Best-Selling Item",
    value: "Organic Heirloom Tomatoes",
    description: "This week's best-selling product",
    icon: <Sprout className="h-6 w-6 text-green-600 dark:text-green-400" />,
  },
  {
    title: "Weekly Orders",
    value: "185",
    description: "Total orders processed this week",
    icon: <Package className="h-6 w-6 text-green-600 dark:text-green-400" />,
  },
  {
    title: "Customer Reviews",
    value: "4.8 / 5 stars (92 reviews)",
    description: "Average rating across all products",
    icon: <Star className="h-6 w-6 text-green-600 dark:text-green-400" />,
  },
];

// Initial dummy inventory data
const initialInventoryItems = [
  {
    id: 1,
    image: "https://placehold.co/50x50/f0fdf4/1e40af?text=Carrots",
    name: "Organic Carrots",
    category: "Vegetables",
    price: "$3.49",
    stock: 150,
  },
  {
    id: 2,
    image: "https://placehold.co/50x50/fffbeb/b45309?text=Eggs",
    name: "Free-Range Eggs",
    category: "Dairy & Eggs",
    price: "$5.00",
    stock: 80,
  },
  {
    id: 3,
    image: "https://placehold.co/50x50/f0f9ff/1d4ed8?text=Cheese",
    name: "Artisan Goat Cheese",
    category: "Dairy & Eggs",
    price: "$12.00",
    stock: 35,
  },
  {
    id: 4,
    image: "https://placehold.co/50x50/fdf2f8/be185d?text=Berries",
    name: "Fresh Blueberries",
    category: "Fruits",
    price: "$4.75",
    stock: 200,
  },
];

const demandData = [
  { name: "Carrots", demand: 180 },
  { name: "Eggs", demand: 150 },
  { name: "Cheese", demand: 210 },
  { name: "Berries", demand: 250 },
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [inventoryItems, setInventoryItems] = useState(initialInventoryItems);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  const handleSaveProduct = (e: any) => {
    e.preventDefault();
    console.log("Saving new product:", {
      productName,
      price,
      description,
      stock,
      productImage: productImage ? productImage.name : null,
    });

    setProductName("");
    setPrice("");
    setDescription("");
    setStock("");
    setProductImage(null);
  };

  // Handles deleting an item from the inventory
  const handleDelete = (id: any) => {
    console.log("Deleting item with id:", id);
    setInventoryItems(inventoryItems.filter((item) => item.id !== id));
  };

  // Handles editing an item (for demonstration)
  const handleEdit = (id: any) => {
    console.log("Editing item with id:", id);
    const itemToEdit = inventoryItems.find((item) => item.id === id);
    if (itemToEdit) {
      console.log("Found item to edit:", itemToEdit);
      setProductName(itemToEdit.name);
      setPrice(itemToEdit.price.replace("$", ""));
      setStock(itemToEdit.stock.toString());
    }
  };

  return (
    <div className="min-h-screen flex font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          showMobileSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMobileSidebar}
      ></div>
      <aside
        className={`fixed top-0 left-0 w-64 bg-white dark:bg-gray-950 border-r dark:border-gray-800 p-4 h-screen z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${
          showMobileSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between pb-6 border-b dark:border-gray-800">
          <span className="text-2xl font-bold text-green-600 dark:text-green-400">
            🌱 FarmFresh
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileSidebar}
            className="md:hidden text-gray-700 dark:text-gray-300"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="mt-6 flex-1 space-y-2">
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-md bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 font-medium"
          >
            <List className="h-5 w-5" />
            <span>Overview</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Users className="h-5 w-5" />
            <span>Users</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Sprout className="h-5 w-5" />
            <span>Farmers</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <List className="h-5 w-5" />
            <span>Listings</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <CheckCircle2 className="h-5 w-5" />
            <span>Approvals</span>
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="p-4 sm:p-6 bg-white dark:bg-gray-950 border-b dark:border-gray-800 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileSidebar}
            className="md:hidden text-gray-700 dark:text-gray-300"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex-1 hidden md:block">
            <h1 className="text-3xl font-bold">Farmer Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m4.93 19.07 1.41-1.41"></path>
                  <path d="m17.66 6.34 1.41-1.41"></path>
                </svg>
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <BellIcon className="h-6 w-6" />
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <h1 className="text-3xl font-bold mb-8 md:hidden">
            Farmer Dashboard
          </h1>

          <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {performanceMetrics.map((item, index) => (
              <Card
                key={index}
                className="rounded-xl p-4 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700"
              >
                <CardContent className="flex items-center justify-between p-0">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.title}
                    </p>
                    <p className="text-3xl font-bold mt-1 text-green-600 dark:text-green-400">
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="p-3">{item.icon}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
          <Card className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700 mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Fill in the details to add a new product to your inventory.
            </p>
            <form onSubmit={handleSaveProduct}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium">Product Name</label>
                  <Input
                    type="text" // Added type for the product name
                    placeholder="e.g., Organic Heirloom Tomatoes"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium">
                    Price (per unit/lb)
                  </label>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="e.g., 4.99"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Description</label>
                  <textarea
                    rows="3"
                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                    placeholder="A short description of your product"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium">
                    Quantity in Stock
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 100"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium">Product Image</label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="file"
                      id="product-image"
                      className="hidden"
                      onChange={(e) => setProductImage(e.target.files[0])}
                    />
                    <label
                      htmlFor="product-image"
                      className="cursor-pointer flex-1 flex items-center justify-center p-2 rounded-md border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-green-500 transition-colors"
                    >
                      <Upload className="h-5 w-5 text-gray-500 mr-2" />
                      {productImage ? productImage.name : "Upload Image"}
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600 transition-colors"
                >
                  Save Product
                </Button>
              </div>
            </form>
          </Card>

          <h2 className="text-xl font-semibold mb-4">
            Current Product Inventory
          </h2>
          <Card className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700 mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Manage your active and inactive product listings.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Stock
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryItems.map((item) => (
                    <tr
                      key={item.id}
                      className="bg-white dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <td className="px-6 py-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          width="50"
                          height="50"
                          className="rounded-md"
                        />
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="px-6 py-4">{item.category}</td>
                      <td className="px-6 py-4">{item.price}</td>
                      <td className="px-6 py-4">{item.stock}</td>
                      <td className="px-6 py-4 flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(item.id)}
                          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
                        >
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
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Overview of demand for your products over the last 6 months.
            </p>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
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
