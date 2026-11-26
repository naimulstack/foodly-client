
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, Clock3, BadgeCheck } from "lucide-react";

export default function FeaturedRestaurants() {
    const [restaurants, setRestaurants] = useState([]);
    const [current, setCurrent] = useState(0);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants`)
            .then((response) => response.json())
            .then((data) => setRestaurants(data.slice(0, 10)));
    }, []);

    const slides = [
        ...restaurants,
        ...restaurants.slice(0, 4),
    ];

    useEffect(() => {
        if (restaurants.length <= 4) return;

        const interval = setInterval(() => {
            setCurrent((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, [restaurants.length]);

    const handleTransitionEnd = (event) => {
        if (
            event.propertyName === "transform" &&
            current >= restaurants.length
        ) {
            setAnimate(false);
            setCurrent(0);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setAnimate(true);
                });
            });
        }
    };

    return (
        <section className="bg-[#F8FAFC] px-4 py-10 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">

                <div className="mb-8">
                    <p className="mb-2 font-semibold text-[#FF6B00]">
                        EXPLORE FOODLY
                    </p>

                    <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl">
                        Featured Restaurants
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Discover delicious food from the best restaurants near you.
                    </p>
                </div>

                <div className="overflow-hidden">
                    <div
                        onTransitionEnd={handleTransitionEnd}
                        className="flex"
                        style={{
                            width: `${slides.length * 25}%`,
                            transform: `translateX(-${current * (100 / slides.length)}%)`,
                            transition: animate ? "transform 700ms ease-in-out" : "none",
                        }}
                    >
                        {slides.map((restaurant, index) => (
                            <div
                                key={`${restaurant._id}-${index}`}
                                style={{ width: `${100 / slides.length}%` }}
                                className="shrink-0 px-3"
                            >
                                <Link
                                    href={`/restaurants/${restaurant._id}`}
                                    className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={restaurant.image}
                                            alt={restaurant.name}
                                            fill
                                            className="object-cover"
                                        />

                                        <div className="absolute left-3 top-3 rounded-full bg-[#16A34A] px-3 py-1.5 text-xs font-bold text-white">
                                            {restaurant.discount}
                                        </div>

                                        <div className="absolute right-3 top-3 rounded-full bg-white p-2 text-gray-700 shadow">
                                            <Heart size={18} />
                                        </div>
                                    </div>

                                    <div className="relative px-4 pb-4 pt-10">
                                        <div className="absolute -top-7 left-4 h-14 w-14 overflow-hidden rounded-full border-4 border-white shadow">
                                            <Image
                                                src={restaurant.logo}
                                                alt={restaurant.name}
                                                fill
                                                sizes="56px"
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            <h3 className="text-lg font-bold text-[#1F2937]">
                                                {restaurant.name}
                                            </h3>

                                            {restaurant.verified && (
                                                <BadgeCheck
                                                    size={17}
                                                    className="fill-[#16A34A] text-white"
                                                />
                                            )}
                                        </div>

                                        <div className="mt-2 flex items-center gap-2 text-sm">
                                            <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                            <span className="font-semibold text-gray-800">
                                                {restaurant.rating}
                                            </span>
                                            <span className="text-gray-400">
                                                ({restaurant.reviews})
                                            </span>
                                        </div>

                                        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                                            <Clock3 size={16} />
                                            <span>{restaurant.deliveryTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
