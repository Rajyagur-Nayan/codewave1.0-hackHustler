"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, User, Search, Sun, Moon, Send, ChevronDown, CheckCircle2, Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';

const contacts = [
  { id: 1, name: "Organic apples are ready for pickup!", time: "10:30 AM", messages: 2, isActive: false, avatar: "https://placehold.co/40x40/d1fae5/1f2937?text=JO" },
  { id: 2, name: "Thanks for your inquiry about the w...", time: "Yesterday", messages: 0, isActive: false, avatar: "https://placehold.co/40x40/fef3c7/1f2937?text=JA" },
  { id: 3, name: "We've added new root vegetables to...", time: "Mar 15", messages: 0, isActive: true, avatar: "https://placehold.co/40x40/dbeafe/1f2937?text=FJ" },
  { id: 4, name: "Your order #789 will be delivered so...", time: "Mar 10", messages: 0, isActive: false, avatar: "https://placehold.co/40x40/e9d5ff/1f2937?text=JD" },
  { id: 5, name: "Is the broccoli still available for this...", time: "Feb 28", messages: 0, isActive: false, avatar: "https://placehold.co/40x40/ffe4e6/1f2937?text=SA" },
];

const chatMessages = [
  { id: 1, sender: "user", text: "Hi Farmer Jane, I'm interested in your heirloom tomatoes. Are they available for local delivery this week?", time: "10:05 AM" },
  { id: 2, sender: "Farmer Jane", text: "Hello! Yes, our heirloom tomatoes are ripe and ready. We offer local delivery on Thursdays and Saturdays. How many pounds are you looking for?", time: "10:08 AM" },
  { id: 3, sender: "user", text: "Great! I'd like 5 pounds. Also, I saw these beautiful organic carrots on your listing. Are they from your farm?", time: "10:10 AM" },
  {
    id: 4,
    sender: "user",
    type: "product",
    product: {
      name: "Organic Rainbow Carrots",
      price: "$4.50",
      details: "per lb",
      image: "https://placehold.co/100x100/d1fae5/1f2937?text=Carrots",
    },
    time: "10:10 AM"
  },
  { id: 5, sender: "Farmer Jane", text: "Yes, those are indeed our own organic rainbow carrots, freshly picked yesterday! They are wonderfully sweet. I can add them to your delivery.", time: "10:15 AM" },
  { id: 6, sender: "user", text: "Perfect! Please add 2 pounds of the rainbow carrots. Can you confirm the total and estimated delivery time?", time: "10:18 AM" },
  { id: 7, sender: "Farmer Jane", text: "Absolutely! For 5 lbs of tomatoes and 2 lbs of rainbow carrots, your total will be $32.50. Your delivery will be this Thursday between 2 PM and 5 PM. I'll send a confirmation email shortly.", time: "10:20 AM" },
];

const suggestedQuestions = [
  "Is this item organic?",
  "When is the next delivery date?",
  "Can I customize my order?",
  "How do I track my order?",
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b dark:border-gray-800 shadow-sm">
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
              <a href="#" className="text-sm font-medium text-green-600 dark:text-green-400 border-b-2 border-green-600 dark:border-green-400 transition-colors">
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

      {/* Main Chat Layout */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row h-full rounded-xl overflow-hidden shadow-lg border dark:border-gray-800 bg-white dark:bg-gray-950">
          
          {/* Left Sidebar - Conversations List */}
          <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r dark:border-gray-800 p-4">
            <h2 className="text-xl font-bold mb-4 hidden lg:block">Conversations</h2>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search contacts..."
                className="pl-9 pr-4 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div className="overflow-y-auto">
              {contacts.map(contact => (
                <div key={contact.id} className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-colors duration-200 ${contact.isActive ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                  <div className="relative">
                    <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full" />
                    {contact.messages > 0 && (
                      <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center text-xs text-white bg-green-500 rounded-full">
                        {contact.messages}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 hidden lg:block">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{contact.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{contact.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Chat Content */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center space-x-4 p-4 border-b dark:border-gray-800">
              <img src="https://placehold.co/40x40/dbeafe/1f2937?text=FJ" alt="Farmer Jane" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">Farmer Jane</p>
                <p className="text-sm text-green-600 dark:text-green-400">online</p>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-6 space-y-4 overflow-y-auto">
              {chatMessages.map(message => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.sender === 'Farmer Jane' && (
                    <img src="https://placehold.co/40x40/dbeafe/1f2937?text=FJ" alt="Farmer Jane" className="w-8 h-8 rounded-full self-start mr-3 hidden md:block" />
                  )}
                  {message.type === 'product' ? (
                    <div className={`flex flex-col p-4 rounded-xl max-w-sm ${message.sender === 'user' ? 'bg-green-600 text-white dark:bg-green-500' : 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100'}`}>
                      <div className="flex items-center space-x-4 mb-2">
                        <img src={message.product.image} alt={message.product.name} className="w-16 h-16 rounded-lg" />
                        <div>
                          <p className="font-bold">{message.product.name}</p>
                          <p className="text-sm font-semibold">{message.product.price}<span className="text-xs font-normal"> {message.product.details}</span></p>
                        </div>
                      </div>
                      <span className={`text-xs self-end ${message.sender === 'user' ? 'text-green-100' : 'text-gray-500 dark:text-gray-400'}`}>
                        {message.time}
                      </span>
                    </div>
                  ) : (
                    <div className={`relative p-4 rounded-xl max-w-[80%] ${message.sender === 'user' ? 'bg-green-600 text-white dark:bg-green-500 rounded-tr-none' : 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-tl-none'}`}>
                      <p className="text-sm">{message.text}</p>
                      <span className={`text-xs absolute bottom-1 right-2 ${message.sender === 'user' ? 'text-green-100' : 'text-gray-500 dark:text-gray-400'}`}>
                        {message.time}
                      </span>
                    </div>
                  )}
                  {message.sender === 'user' && (
                    <img src="https://placehold.co/40x40/dbeafe/1f2937?text=JD" alt="User" className="w-8 h-8 rounded-full self-start ml-3 hidden md:block" />
                  )}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t dark:border-gray-800">
              <div className="flex flex-wrap gap-2 mb-4">
                {suggestedQuestions.map((q, index) => (
                  <Button key={index} variant="outline" className="rounded-full text-xs h-8 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-700">
                    {q}
                  </Button>
                ))}
              </div>
              <div className="relative flex items-center">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  className="rounded-full pr-12 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                />
                <Button variant="ghost" size="icon" className="absolute right-2 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
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
