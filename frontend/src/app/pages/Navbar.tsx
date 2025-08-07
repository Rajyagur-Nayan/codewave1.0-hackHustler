"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; // Make sure this path is correct
import Link from "next/link";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <svg
                className="h-8 w-8 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 1 0 0-8-8 8 8 0 0 0 8 8zm-2-7h4v2h-4v-2zm-2 0h4v2h-4v-2zm-2 0h4v2h-4v-2zm8 0h-4v-2h4v2zm2 0h-4v-2h4v2zm2 0h-4v-2h4v2zm-12-2h4v2h-4v-2zm-2 0h4v2h-4v-2zm-2 0h4v2h-4v-2zm8 0h-4v-2h4v2zm2 0h-4v-2h4v2zm2 0h-4v-2h4v2zm-12-2h4v2h-4v-2zm-2 0h4v2h-4v-2zm-2 0h4v2h-4v-2zm8 0h-4v-2h4v2zm2 0h-4v-2h4v2zm2 0h-4v-2h4v2z" />
              </svg>
              <span className="text-xl font-bold">FarmFresh AI</span>
            </div>
            <nav className="hidden md:flex space-x-4">
              <Link href="/" className="hover:text-green-500 transition-colors">
                Home
              </Link>
              <a
                href="/marketplace"
                className="hover:text-green-500 transition-colors"
              >
                Marketplace
              </a>
              <a
                href="/subscription"
                className="hover:text-green-500 transition-colors"
              >
                Subscription
              </a>
              <a
                href="/chat"
                className="hover:text-green-500 transition-colors"
              >
                Chat
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
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
            <a
              href="#"
              className="hidden sm:inline-block px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Login
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
