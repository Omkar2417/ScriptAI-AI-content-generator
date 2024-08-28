"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard"); // Change "/dashboard" to the actual route you want to navigate to
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center">
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 w-full py-6 bg-white shadow-lg flex items-center justify-between px-10 z-50">
        <Image
          src="/Final srciptai.png" // Replace with your logo path
          alt="Logo"
          width={140}
          height={60}
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <Button
          onClick={handleClick}
          className="bg-blue-600 hover:bg-blue-700 text-white transition duration-300 ease-in-out transform hover:scale-105 px-6 py-2 rounded-full"
        >
          Get Started
        </Button>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center text-center mt-32">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-wide">
          ScriptAI - AI Content{" "}
          <span className="text-blue-600">Generator</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-lg">
          Revolutionize your content creation with our AI-powered app,
          delivering engaging and high-quality text in seconds.
        </p>
        <Button
          onClick={handleClick}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Get Started
        </Button>
      </main>

      {/* Features section */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center px-8 lg:px-24">
        <div className="group bg-white rounded-lg shadow-lg p-6 hover:bg-blue-100 transition duration-300">
          <div className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600">
            30+ templates
          </div>
          <p className="mt-4 text-gray-600 group-hover:text-gray-900">
            Featuring 30+ templates for AI-powered content generation
          </p>
          <Button
            onClick={handleClick}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Button>
        </div>
        <div className="group bg-white rounded-lg shadow-lg p-6 hover:bg-blue-100 transition duration-300">
          <div className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600">
            Customizable
          </div>
          <p className="mt-4 text-gray-600 group-hover:text-gray-900">
            Components are easily customized and extendable
          </p>
          <Button
            onClick={handleClick}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Button>
        </div>
        <div className="group bg-white rounded-lg shadow-lg p-6 hover:bg-blue-100 transition duration-300">
          <div className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600">
            Free to Use
          </div>
          <p className="mt-4 text-gray-600 group-hover:text-gray-900">
            Every component and plugin is well documented
          </p>
          <Button
            onClick={handleClick}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Button>
        </div>
        <div className="group bg-white rounded-lg shadow-lg p-6 hover:bg-blue-100 transition duration-300">
          <div className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600">
            24/7 Support
          </div>
          <p className="mt-4 text-gray-600 group-hover:text-gray-900">
            Contact us 24 hours a day, 7 days a week
          </p>
          <Button
            onClick={handleClick}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
