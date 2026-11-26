
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const banners = [
  {
    title: "Delicious Pizza, Delivered Fresh!",
    description: "Enjoy your favorite pizza with fresh ingredients and amazing taste.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600",
    offer: "UP TO 30% OFF",
  },
  {
    title: "Taste the Best Juicy Burgers",
    description: "Freshly prepared burgers made with love and quality ingredients.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1600",
    offer: "BUY 1 GET 1",
  },
  {
    title: "Enjoy Authentic Biryani",
    description: "A delicious combination of aromatic rice and flavorful spices.",
    image: "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?w=1600",
    offer: "SPECIAL DEAL",
  },
  {
    title: "Sweet Moments with Desserts",
    description: "Make every moment special with our delicious desserts.",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1600",
    offer: "UP TO 20% OFF",
  },
  {
    title: "Fresh and Tasty Sandwiches",
    description: "Enjoy delicious sandwiches prepared with fresh ingredients.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=1600",
    offer: "FRESH & TASTY",
  },
  {
    title: "Crispy and Juicy Fried Chicken",
    description: "Enjoy crispy chicken with irresistible flavor in every bite.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=1600",
    offer: "SPECIAL OFFER",
  },
  {
    title: "Fresh Pasta for Everyone",
    description: "Discover delicious pasta made with rich sauce and fresh ingredients.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1600",
    offer: "ORDER YOUR FAVORITE",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-3 py-5 sm:px-5 lg:px-8">
      <div className="relative h-[380px] max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-xl sm:h-[450px] lg:h-[540px]">

        {/* Banner Images */}
        {banners.map((banner, index) => (
          <Image
            key={banner.title}
            src={banner.image}
            alt={banner.title}
            width={1600}
            height={600}
            priority={index === 0}
            sizes="100vw"
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-in-out ${index === current
                ? "translate-x-0"
                : index === (current - 1 + banners.length) % banners.length
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
          />
        ))}

        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

        {/* Content */}
        <div className="relative z-10 flex h-full max-w-3xl flex-col items-start justify-center px-7 text-white sm:px-12 lg:px-20">

          <span className="mb-6 rounded-full border border-orange-300/30 bg-orange-500 px-5 py-2 text-xs font-bold tracking-wider shadow-lg sm:text-sm">
            {banners[current].offer}
          </span>

          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-6xl">
            {banners[current].title}
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-gray-200 sm:text-base">
            {banners[current].description}
          </p>

          <Link
            href="/foods"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-3.5 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-700"
          >
            Order Now
            <ChevronRight size={19} />
          </Link>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition hover:bg-orange-500 hover:text-white sm:left-6 sm:h-12 sm:w-12"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition hover:bg-orange-500 hover:text-white sm:right-6 sm:h-12 sm:w-12"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {banners.map((banner, index) => (
            <button
              key={banner.title}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${current === index
                  ? "w-9 bg-orange-500"
                  : "w-2.5 bg-white/70 hover:bg-white"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
