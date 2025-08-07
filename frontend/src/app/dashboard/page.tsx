"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-hot-toast";

// ✅ Define InventoryItem interface
interface InventoryItem {
  id: number;
  name: string;
  price: string;
  stock: number;
  image: string;
  category: string;
}

// ✅ Component starts here
export default function AddProductForm() {
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [stock, setStock] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      setProductImage(file);
    }
  };

  const handleSaveProduct = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
=======
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
import axios from "axios";

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

const initialInventoryItems = [];

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
  const [productImage, setProductImage] = useState<File | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleMobileSidebar = () => setShowMobileSidebar(!showMobileSidebar);

  // ✅ API Integration Here
  const handleSaveProduct = async (e: any) => {
>>>>>>> c65dca5e60586ba767679774cdbda0f3aeadcb02
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("quantity", stock);
<<<<<<< HEAD
    formData.append("category", category);
    if (productImage) {
      formData.append("image", productImage);
    }

    try {
      const res: AxiosResponse = await axios.post(
        "http://localhost:3000/farmer/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      console.log(res);

      toast.success("Product added!");

      const newProduct = res.data.product;

      const frontendProduct: InventoryItem = {
        id: newProduct.id || Date.now(),
        name: newProduct.name,
        price: `$${newProduct.price}`,
        stock: newProduct.quantity,
        image: newProduct.image_url,
        category: newProduct.category || category,
      };

      setInventoryItems((prev) => [frontendProduct, ...prev]);

      // Reset form
      setProductName("");
      setPrice("");
      setDescription("");
      setStock("");
      setCategory("");
      setProductImage(null);
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product.");
=======
    if (productImage) {
      formData.append("image", productImage);
    }

    try {
      const res = await axios.post("http://localhost:4000/farmer/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, // if using cookie-based auth
      });
      console.log(res);
      const newProduct = res.data.product;
      const frontendProduct = {
        id: newProduct.id,
        image: newProduct.image_url, // from backend
        name: newProduct.name,
        category: "Uncategorized",
        price: `$${newProduct.price}`,
        stock: newProduct.stock,
      };

      setInventoryItems([frontendProduct, ...inventoryItems]);

      // Reset form
      setProductName("");
      setPrice("");
      setDescription("");
      setStock("");
      setProductImage(null);

      alert("✅ Product added successfully!");
    } catch (err) {
      console.error("Error saving product:", err);
      alert("❌ Failed to add product. Check console for details.");
    }
  };

  const handleDelete = (id: number) => {
    setInventoryItems(inventoryItems.filter((item) => item.id !== id));
  };

  const handleEdit = (id: number) => {
    const item = inventoryItems.find((i) => i.id === id);
    if (item) {
      setProductName(item.name);
      setPrice(item.price.replace("$", ""));
      setStock(item.stock.toString());
>>>>>>> c65dca5e60586ba767679774cdbda0f3aeadcb02
    }
  };

  return (
<<<<<<< HEAD
    <div className="grid gap-4 md:gap-8">
      <form onSubmit={handleSaveProduct}>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <div className="grid gap-2">
            <Label>Product Name</Label>
            <Input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label>Price</Label>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="md:col-span-2 grid gap-2">
            <Label>Description</Label>
            <Input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="md:col-span-2 grid gap-2">
            <Label>Category</Label>
            <Input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label>Stock</Label>
            <Input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label>Product Image</Label>
            <Input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        </div>

        <Button className="mt-6" type="submit">
          Save Product
        </Button>
      </form>

      <div className="grid gap-4">
        <h2 className="text-lg font-medium">Inventory</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {inventoryItems.map((item) => (
            <Card key={item.id} className="p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="font-semibold">{item.name}</h3>
              <p>Category: {item.category}</p>
              <p>Price: {item.price}</p>
              <p>Stock: {item.stock}</p>
            </Card>
          ))}
        </div>
=======
    <div className="min-h-screen flex font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Sidebar and Header Omitted for Brevity */}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="p-4 sm:p-6 bg-white dark:bg-gray-950 border-b dark:border-gray-800 flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={toggleMobileSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-3xl font-bold hidden md:block">Farmer Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDarkMode ? "🌙" : "☀️"}
            </Button>
            <Button variant="ghost" size="icon">
              <BellIcon className="h-6 w-6" />
            </Button>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
          <Card className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700 mb-8">
            <form onSubmit={handleSaveProduct}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium">Product Name</label>
                  <Input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium">Price</label>
                  <Input
                    type="number"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Description</label>
                  <textarea
                    className="w-full p-2 rounded-md border dark:border-gray-700 dark:bg-gray-800"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium">Quantity in Stock</label>
                  <Input
                    type="number"
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
                      onChange={(e) =>
                        setProductImage(e.target.files?.[0] || null)
                      }
                    />
                    <label
                      htmlFor="product-image"
                      className="cursor-pointer flex-1 flex items-center justify-center p-2 rounded-md border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-green-500"
                    >
                      <Upload className="h-5 w-5 mr-2" />
                      {productImage ? productImage.name : "Upload Image"}
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Save Product
                </Button>
              </div>
            </form>
          </Card>

          <h2 className="text-xl font-semibold mb-4">
            Current Product Inventory
          </h2>
          <Card className="rounded-xl p-6 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 dark:bg-gray-700 text-xs uppercase">
                  <tr>
                    <th className="px-6 py-3">Image</th>
                    <th className="px-6 py-3">Product Name</th>
                    <th className="px-6 py-3">Category</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Stock</th>
                    <th className="px-6 py-3">Actions</th>
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
                      <td className="px-6 py-4 font-medium">{item.name}</td>
                      <td className="px-6 py-4">{item.category}</td>
                      <td className="px-6 py-4">{item.price}</td>
                      <td className="px-6 py-4">{item.stock}</td>
                      <td className="px-6 py-4 flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(item.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </main>
>>>>>>> c65dca5e60586ba767679774cdbda0f3aeadcb02
      </div>
    </div>
  );
}
