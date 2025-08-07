"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Home = () => {
  const [isDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Testimonial data for the carousel
  const testimonials = [
    {
      text: "FarmFresh AI has revolutionized how I get my produce. It's incredible how they're supporting local farmers makes it even better!",
      author: "Sarah J.",
      title: "Satisfied Customer",
      avatar: "https://placehold.co/100x100/A0B2C9/000000?text=SJ",
    },
    {
      text: "Selling directly through FarmFresh AI has boosted my profits. I'm able to connect with customers who truly value quality. The platform is so easy to use!",
      author: "David Chen",
      title: "Organic Farmer",
      avatar: "https://placehold.co/100x100/F1B2A0/000000?text=DC",
    },
    {
      text: "The AI-personalized boxes are fantastic! I've discovered new vegetables and my family eats healthier than ever. It's like having a personal chef for produce!",
      author: "Maria Sanchez",
      title: "Happy Mom",
      avatar: "https://placehold.co/100x100/C9F1A0/000000?text=MS",
    },
  ];

  return (
    <div
      className={`${
        isDarkMode ? "dark" : ""
      } font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 min-h-screen transition-colors duration-300`}
    >
      {/* Hero section */}
      <motion.main
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center p-8 text-center"
        style={{
          backgroundImage:
            "url('https://placehold.co/1920x500/1C5C2E/FFFFFF?text=FarmFresh+AI+Hero')",
        }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-white z-10 space-y-6">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold"
          >
            FarmFresh AI
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Connecting You Directly to Local, Sustainable Businesses. Experience
            AI-Personalized Boxes, Powered with Intelligence.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6"
          >
            <Link
              href="/marketplace"
              type="button"
              className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
            >
              Explore Marketplace
            </Link>
            <Link
              href="/subscribe"
              type="button"
              className="px-8 py-3 bg-white text-green-500 rounded-full hover:bg-gray-100 transition-colors border border-gray-300"
            >
              Subscribe Now
            </Link>
          </motion.div>
        </div>
      </motion.main>

      {/* Our Commitment section */}
      <motion.section
        className="container mx-auto px-4 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12">
          Our Commitment to Freshness & Fairness
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-green-500 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 10v4h3.5a4 4 0 1 0 0-8H7v4Z"></path>
                  <path d="M15.5 10a4 4 0 1 0 0 8h3v-2.5a4 4 0 0 0-4-4Z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold">Direct Farmer-to-Consumer</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Bypass intermediaries, and get your produce directly from local
              farms. This means fresher food for you and fairer prices for
              farmers, building a stronger community.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-green-500 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
                  <path d="M8 12a1 1 0 1 0 0 0.01 1 1 0 0 0 0-0.01Z"></path>
                  <path d="M16 12a1 1 0 1 0 0 0.01 1 1 0 0 0 0-0.01Z"></path>
                  <path d="M12 8a1 1 0 1 0 0 0.01 1 1 0 0 0 0-0.01Z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold">
              AI-Personalized Produce Boxes
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tell us your preferences, dietary needs, and favorite recipes. Our
              intelligent AI curates a weekly or bi-monthly box filled with
              produce you&apos;ll love, minimizing waste and maximizing delight.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-green-500 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold">Sustainable & Local</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We prioritize working with local farms and use sustainable
              packaging to reduce our carbon footprint, making every box a step
              towards a healthier planet.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* How It Works section */}
      <motion.section
        className="container mx-auto px-4 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12">
          How FarmFresh AI Works
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-center">
              <span className="text-4xl font-bold text-green-500">1</span>
            </div>
            <h3 className="text-xl font-semibold">Discover & Connect</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Browse through our network of local farms, learn about their
              practices, and build a connection with the source of your food.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-center">
              <span className="text-4xl font-bold text-green-500">2</span>
            </div>
            <h3 className="text-xl font-semibold">Choose Your Freshness</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Select your preferred produce box, or customize your AI-powered
              subscription based on your tastes, needs, and preferences.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-center">
              <span className="text-4xl font-bold text-green-500">3</span>
            </div>
            <h3 className="text-xl font-semibold">Enjoy & Sustain</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Receive fresh, seasonal produce at your door. Savor the delicious,
              sustainable food while supporting your community.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Testimonials section */}
      <motion.section
        className="container mx-auto px-4 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12">
          What Our Community Says
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="flex overflow-x-auto snap-x snap-mandatory space-x-8 pb-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex-shrink-0 snap-center w-full sm:w-1/2 lg:w-1/3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-gray-800"
            >
              <p className="mb-4 text-left italic">{testimonial.text}</p>
              <div className="flex items-center space-x-4 mt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full border border-gray-300 dark:border-gray-700"
                />
                <div className="text-left">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* New Features Section */}
      <motion.section
        className="container mx-auto px-4 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12">
          More Fresh Features
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="p-6 space-y-4 border rounded-lg shadow-md bg-white dark:bg-gray-800"
          >
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Convenient Delivery</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get your fresh produce delivered right to your doorstep, on a
              schedule that works for you.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-6 space-y-4 border rounded-lg shadow-md bg-white dark:bg-gray-800"
          >
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" x2="12" y1="19" y2="22"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Recipe Inspiration</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Each box comes with AI-generated recipes tailored to the produce
              inside, helping you make delicious meals.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-6 space-y-4 border rounded-lg shadow-md bg-white dark:bg-gray-800"
          >
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m8 6 4-4 4 4"></path>
                <path d="M12 2v10.5A3.5 3.5 0 0 1 8.5 16h-1A2.5 2.5 0 0 1 5 13.5V6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.5a2.5 2.5 0 0 1 0-5Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Sustainable Sourcing</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We partner with local, sustainable farms to ensure you get the
              best quality food with a minimal environmental impact.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-6 space-y-4 border rounded-lg shadow-md bg-white dark:bg-gray-800"
          >
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Seasonal Selection</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our boxes are always filled with what&apos;s in season, ensuring
              maximum freshness, flavor, and nutritional value.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* New Call to Action section */}
      <motion.section
        className="bg-green-500 dark:bg-green-700 text-white py-16 px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="container mx-auto space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Taste the Difference?
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Join the FarmFresh AI community today and start receiving delicious,
            locally-sourced produce boxes delivered right to your door.
          </p>
          <Link
            href="/dashboard"
            type="button"
            className="px-8 py-3 bg-white text-green-500 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
