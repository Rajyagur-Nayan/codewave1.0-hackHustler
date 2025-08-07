"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginDialog } from "./auth/Login";
import { RegisterDialog } from "./auth/Register";
import { useAuth } from "./auth/AuthContext"; // Ensure this is correctly imported

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
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

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-2">
          <svg
            className="h-8 w-8 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
          </svg>
          <span className="text-xl font-bold">FarmFresh AI</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-green-500 transition-colors">
            Home
          </Link>
          <Link
            href="/marketplace"
            className="hover:text-green-500 transition-colors"
          >
            Marketplace
          </Link>
          <Link
            href="/subscription"
            className="hover:text-green-500 transition-colors"
          >
            Subscribe
          </Link>
          <Link href="/chat" className="hover:text-green-500 transition-colors">
            Chat
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
          </Button>

          {isAuthenticated ? (
            <Button onClick={logout} className="bg-red-600 text-white">
              Logout
            </Button>
          ) : (
            <>
              <Button
                onClick={() => setIsLoginDialogOpen(true)}
                className="bg-blue-600 text-white"
              >
                Login
              </Button>
              <Button
                onClick={() => setIsRegisterDialogOpen(true)}
                className="bg-green-600 text-white"
              >
                Register
              </Button>
            </>
          )}
        </div>

        {/* Hamburger Button for Mobile */}
        <Button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-700 dark:text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-green-500">
            Home
          </Link>
          <Link href="/marketplace" className="block hover:text-green-500">
            Marketplace
          </Link>
          <Link href="/subscribe" className="block hover:text-green-500">
            Subscribe
          </Link>
          <Link href="/chat" className="block hover:text-green-500">
            Chat
          </Link>

          <div className="flex items-center space-x-3 mt-4">
            <Button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {isDarkMode ? <MoonIcon /> : <SunIcon />}
            </Button>

            {isAuthenticated ? (
              <Button onClick={logout} className="bg-red-600 text-white">
                Logout
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => setIsLoginDialogOpen(true)}
                  className="bg-blue-600 text-white"
                >
                  Login
                </Button>
                <Button
                  onClick={() => setIsRegisterDialogOpen(true)}
                  className="bg-green-600 text-white"
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Auth Dialogs */}
      {isLoginDialogOpen && (
        <LoginDialog onClose={() => setIsLoginDialogOpen(false)} />
      )}
      {isRegisterDialogOpen && (
        <RegisterDialog onClose={() => setIsRegisterDialogOpen(false)} />
      )}
    </header>
  );
};

export default Navbar;

// ------------------ ICONS ------------------
const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
);

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);
