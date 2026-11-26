
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  UserRound,
  ChevronDown
} from "lucide-react";
import Image from "next/image";
import Logo from "../Images/foodly_logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [foodOpen, setFoodOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <Link href="/" className="text-3xl font-bold">
          <Image src={Logo}
            alt="Foodly Logo"
            width={100}
            height={75}

          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="font-semibold text-green-700">
            Home
          </Link>
          <Link href="/restaurants" className="text-gray-700 hover:text-green-700">
            Restaurants
          </Link>
          <div className="group relative">
            <button
              onClick={() => setFoodOpen(!foodOpen)}
              className="flex items-center gap-1 text-gray-700 transition hover:text-green-700"
            >
              Foods
              <ChevronDown size={16} />
            </button>

            <div className="invisible absolute left-0 top-full z-50 w-52 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                {[
                  "Pizza",
                  "Burger",
                  "Biryani",
                  "Pasta",
                  "Sandwich",
                  "Chicken",
                  "Desserts",
                ].map((food) => (
                  <Link
                    key={food}
                    href={`/foods/${food.toLowerCase()}`}
                    className="block rounded-lg px-4 py-2.5 text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                  >
                    {food}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/offers" className="text-gray-700 hover:text-green-700">
            Offers
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-green-700">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-700">
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-5 md:flex">
          <button className="text-gray-700 hover:text-green-700">
            <Search size={21} />
          </button>

          <Link href="/cart" className="relative text-gray-700 hover:text-green-700">
            <ShoppingCart size={22} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] text-white">
              2
            </span>
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-2 rounded-full bg-green-700 px-5 py-2.5 font-semibold text-white transition hover:bg-green-800"
          >
            <UserRound size={18} />
            Login / Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 md:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <Link href="/" onClick={() => setIsOpen(false)} className="font-semibold text-green-700">
              Home
            </Link>
            <Link href="/restaurants" onClick={() => setIsOpen(false)} className="text-gray-700">
              Restaurants
            </Link>
            <div>
              <button
                onClick={() => setFoodOpen(!foodOpen)}
                className="flex w-full items-center justify-between text-gray-700"
              >
                Foods
                <ChevronDown
                  size={18}
                  className={`transition ${foodOpen ? "rotate-180" : ""}`}
                />
              </button>

              {foodOpen && (
                <div className="mt-3 flex flex-col gap-3 border-l-2 border-green-600 pl-4">
                  {[
                    "Pizza",
                    "Burger",
                    "Biryani",
                    "Pasta",
                    "Sandwich",
                    "Chicken",
                    "Desserts",
                  ].map((food) => (
                    <Link
                      key={food}
                      href={`/foods/${food.toLowerCase()}`}
                      onClick={() => {
                        setIsOpen(false);
                        setFoodOpen(false);
                      }}
                      className="text-sm text-gray-600 hover:text-green-700"
                    >
                      {food}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/offers" onClick={() => setIsOpen(false)} className="text-gray-700">
              Offers
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-700">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-700">
              Contact
            </Link>

            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-700"
            >
              <ShoppingCart size={20} />
              Cart
            </Link>

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-green-700 px-5 py-3 text-center font-semibold text-white"
            >
              Login / Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
