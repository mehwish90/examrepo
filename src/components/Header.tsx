"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="logo">
          <Image src="/Images/Logo.png" width={185} height={41} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white z-50 shadow-md md:shadow-none md:bg-transparent py-4 md:py-0`}
        >
          <Link
            href="/"
            className="text-gray-700 hover:text-purple-500 transition"
          >
            Home
          </Link>
          <Link
            href="/Shop"
            className="text-gray-700 hover:text-purple-500 transition"
          >
            Shop
          </Link>
          <Link
            href="/Cart"
            className="text-gray-700 hover:text-purple-500 transition"
          >
            Cart
          </Link>
          <Link
            href="/Contact"
            className="text-gray-700 hover:text-purple-500 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-700">
          <MdPersonOutline className="w-5 h-5 hover:text-purple-500 transition" />
          <CiSearch className="w-5 h-5 hover:text-purple-500 transition" />
          <GoHeart className="w-5 h-5 hover:text-purple-500 transition" />
          <AiOutlineShoppingCart className="w-5 h-5 hover:text-purple-500 transition" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-purple-500 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
}
