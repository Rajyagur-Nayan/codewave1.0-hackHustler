"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const InventoryPage = () => {
  const [inventoryItems, setInventoryItems] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
    image: null as File | null,
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // 🚀 Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.post("http://localhost:4000/farmer/add", {
          withCredentials: true,
        });

        const products = res.data.products || [];

        const formatted = products.map((p: any) => ({
          id: p.id,
          image: p.image_url, // must match your backend field
          name: p.name,
<<<<<<< HEAD
          price: $${p.price},
=======
          category: p.category || "Uncategorized",
          price: `$${p.price}`,
>>>>>>> 1b307c67c71784ee966752a8b8b442119f6be6f5
          stock: p.stock,
        }));

        setInventoryItems(formatted);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as any;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("price", formData.price);
    fd.append("description", formData.description);
    fd.append("quantity", formData.quantity);
    if (formData.image) fd.append("image", formData.image);

    try {
      const res = await axios.post("http://localhost:4000/farmer/add", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      alert("Product added successfully");

      // Optional: refresh product list after upload
      setInventoryItems((prev) => [
        ...prev,
        {
          id: res.data.product.id, // adjust based on backend response
          image: res.data.product.image_url,
          name: res.data.product.name,
          category: res.data.product.category || "Uncategorized",
<<<<<<< HEAD
          price: $${res.data.product.price},
=======
          price: `$${res.data.product.price}`,
>>>>>>> 1b307c67c71784ee966752a8b8b442119f6be6f5
          stock: res.data.product.stock,
        },
      ]);

      // Clear form
      setFormData({
        name: "",
        price: "",
        description: "",
        quantity: "",
        image: null,
      });

    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Inventory</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Toggle {isDarkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        {/* Form to Add Product */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-6 rounded shadow mb-10"
        >
          <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Product Name"
              required
              className="p-2 border rounded dark:bg-gray-700"
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              required
              className="p-2 border rounded dark:bg-gray-700"
            />
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Quantity in Stock"
              required
              className="p-2 border rounded dark:bg-gray-700"
            />
            <input
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
              required
              className="p-2 border rounded dark:bg-gray-700"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              required
              className="p-2 border rounded col-span-full dark:bg-gray-700"
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add Product
          </button>
        </form>

        {/* Inventory Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded shadow">
            <thead>
              <tr className="text-left border-b dark:border-gray-600">
                <th className="p-4">Image</th>
                <th className="p-4">Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => (
                <tr key={item.id} className="border-b dark:border-gray-600">
                  <td className="p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.category}</td>
                  <td className="p-4">{item.price}</td>
                  <td className="p-4">{item.stock}</td>
                </tr>
              ))}
              {inventoryItems.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center p-4">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default InventoryPage;
=======
export default InventoryPage;
>>>>>>> 1b307c67c71784ee966752a8b8b442119f6be6f5
