"use client"; // Client component zaroori hai kyunke hum state use kar rahe hain

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              EVENZA
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="hover:text-blue-400 px-3 py-2 transition"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="hover:text-blue-400 px-3 py-2 transition"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-400 px-3 py-2 transition"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-400 px-3 py-2 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-400 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
