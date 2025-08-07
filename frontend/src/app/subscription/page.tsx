"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const allergies = [
  "Peanuts",
  "Tree Nuts",
  "Dairy",
  "Soy",
  "Wheat",
  "Shellfish",
];
const subscriptionPlans = [
  { value: "weekly", label: "Weekly", price: "$49", details: "" },
  { value: "bi-weekly", label: "Bi-Weekly", price: "$45", details: "per box" },
  { value: "monthly", label: "Monthly", price: "$40", details: "per month" },
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle dark mode on/off for the entire page
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

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Customize Your Subscription Box
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Your Preferences & Preview Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Your Preferences */}
            <Card className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
              <CardTitle className="text-2xl font-semibold mb-2">
                Your Preferences
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Help us customize your perfect box by telling us about your
                tastes.
              </p>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="dietary" className="text-sm font-medium">
                    Dietary Needs{" "}
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      (e.g., Vegetarian, Vegan, Gluten-Free)
                    </span>
                  </Label>
                  <Input
                    id="dietary"
                    placeholder="Specify your dietary preferences"
                    className="mt-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <Label htmlFor="love" className="text-sm font-medium">
                    Produce I Love{" "}
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      (e.g., berries, spinach, avocados)
                    </span>
                  </Label>
                  <Textarea
                    id="love"
                    placeholder="List your favorite fruits and vegetables"
                    className="mt-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <Label htmlFor="dislike" className="text-sm font-medium">
                    Produce I Dislike{" "}
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      (e.g., mushrooms, cilantro, okra)
                    </span>
                  </Label>
                  <Textarea
                    id="dislike"
                    placeholder="List anything you prefer not to receive"
                    className="mt-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium block mb-3">
                    Allergies
                  </Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {allergies.map((allergy) => (
                      <div
                        key={allergy}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={allergy} />
                        <Label htmlFor={allergy} className="text-sm">
                          {allergy}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600 transition-colors">
                  Save Preferences
                </Button>
              </div>
            </Card>

            {/* Your Personalized Box Preview */}
            <Card className="rounded-xl p-6 bg-green-50 dark:bg-green-950 dark:text-gray-50 shadow-lg border border-green-200 dark:border-green-900">
              <CardTitle className="text-2xl font-semibold mb-4">
                Your Personalized Box Preview
              </CardTitle>
              <p className="text-sm text-green-800 dark:text-green-300 mb-6">
                A taste of what our AI recommends just for you.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative w-full h-auto">
                  <img
                    src="https://placehold.co/600x400/bbf7d0/000?text=Fresh+Produce+Box"
                    alt="A box of fresh produce"
                    className="w-full h-full object-cover rounded-xl shadow-md"
                  />
                </div>
                <ul className="space-y-2 text-sm text-green-900 dark:text-green-200">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span>Organic Heirloom Tomatoes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span>Sweet Bell Peppers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span>Farm Fresh Eggs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span>Seasonal Mixed Greens</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span>Artisan Bread Loaf</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span>Avocado</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Right Sidebar Section */}
          <div className="space-y-8">
            {/* AI Assistant Suggestions */}
            <Card className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
              <CardTitle className="text-xl font-semibold mb-4">
                AI Assistant Suggestions
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Our AI is constantly learning your preferences to recommend the
                freshest, most suitable produce, even suggesting new seasonal
                items to diversify your box!
              </p>
              <a
                href="#"
                className="text-green-600 dark:text-green-400 text-sm font-medium hover:underline"
              >
                Explore Marketplace
              </a>
            </Card>

            {/* AI Chat Bubble */}
            <div className="flex items-start space-x-4">
              <div className="relative w-10 h-10">
                <img
                  src="https://placehold.co/40x40/bbf7d0/000?text=AI"
                  alt="AI Assistant"
                  className="rounded-full w-full h-full"
                />
              </div>
              <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-xl rounded-tl-none max-w-[80%]">
                <p className="text-sm">
                  Looking forward to your next subscription box!
                </p>
              </div>
            </div>

            {/* Choose Your Frequency */}
            <Card className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
              <CardTitle className="text-xl font-semibold mb-4">
                Choose Your Frequency
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Select how often you'd like to receive your fresh produce box.
              </p>
              <RadioGroup defaultValue="weekly" className="space-y-4">
                {subscriptionPlans.map((plan) => (
                  <div key={plan.value} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={plan.value}
                      id={plan.value}
                      className="peer hidden"
                    />
                    <Label
                      htmlFor={plan.value}
                      className="flex items-center justify-between w-full p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 cursor-pointer peer-data-[state=checked]:border-green-600 dark:peer-data-[state=checked]:border-green-400 transition-colors"
                    >
                      <div>
                        <span className="block font-medium text-lg text-gray-900 dark:text-gray-100">
                          {plan.label}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="block font-bold text-lg text-gray-900 dark:text-gray-100">
                          {plan.price}
                        </span>
                        {plan.details && (
                          <span className="block text-sm text-gray-500 dark:text-gray-400">
                            {plan.details}
                          </span>
                        )}
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600 transition-colors">
                Confirm Subscription
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

// Custom CheckCircle icon for the preview list
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
