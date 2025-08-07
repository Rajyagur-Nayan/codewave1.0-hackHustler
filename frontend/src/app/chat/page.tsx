"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

const FormPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    state: "",
    district: "",
    description: "",
    location: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/form/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Server Response:", result);
      alert("Form submitted successfully!");

      // Reset form
      setFormData({
        email: "",
        state: "",
        district: "",
        description: "",
        location: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Contact Form</h1>
          <Button onClick={toggleTheme} variant="ghost" size="icon">
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md space-y-6"
        >
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="state" className="block text-sm font-medium">
                State
              </label>
              <Input
                name="state"
                type="text"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="w-full dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="district" className="block text-sm font-medium">
                District
              </label>
              <Input
                name="district"
                type="text"
                placeholder="District"
                value={formData.district}
                onChange={handleChange}
                className="w-full dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="location" className="block text-sm font-medium">
                Location
              </label>
              <Input
                name="location"
                type="text"
                placeholder="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <Textarea
              name="description"
              placeholder="Write something..."
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
