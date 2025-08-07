"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
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
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("quantity", stock);
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
    }
  };

  return (
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
      </div>
    </div>
  );
}
