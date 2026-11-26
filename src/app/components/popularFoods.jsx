
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock3, ShoppingBag } from "lucide-react";

export default function PopularFoods() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/foods`)
            .then((response) => response.json())
            .then((data) => setFoods(data.filter((food) => food.isFeatured).slice(0, 16)));
    }, []);

    return (
        <section className="bg-[#F8FAFC] px-4 py-12 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="mb-2 font-semibold text-[#FF6B00]">
                            TASTY & DELICIOUS
                        </p>

                        <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl">
                            Popular Foods
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Explore our most loved dishes.
                        </p>
                    </div>

                    <Link
                        href="/foods"
                        className="text-sm font-semibold text-[#FF6B00] transition hover:text-green-600"
                    >
                        View All →
                    </Link>
                </div>

                {/* Food Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {foods.map((food) => (
                        <Link
                            href={`/foods/${food._id}`}
                            key={food._id}
                            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Food Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={food.image}
                                    alt={food.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />

                                {food.discountPrice && (
                                    <span className="absolute left-3 top-3 rounded-full bg-[#16A34A] px-3 py-1.5 text-xs font-bold text-white">
                                        {Math.round(
                                            ((food.price - food.discountPrice) / food.price) * 100
                                        )}% OFF
                                    </span>
                                )}

                                <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow">
                                    {food.foodType}
                                </span>
                            </div>

                            {/* Food Details */}
                            <div className="p-4">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-lg font-bold text-[#1F2937] transition group-hover:text-[#FF6B00]">
                                        {food.name}
                                    </h3>

                                    <div className="flex shrink-0 items-center gap-1 text-sm">
                                        <Star size={15} className="fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold text-gray-700">
                                            {food.rating}
                                        </span>
                                    </div>
                                </div>

                                <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                                    {food.description}
                                </p>

                                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold text-[#16A34A]">
                                            ৳{food.discountPrice ?? food.price}
                                        </span>

                                        {food.discountPrice && (
                                            <span className="text-sm text-gray-400 line-through">
                                                ৳{food.price}
                                            </span>
                                        )}
                                    </div>

                                    <span className="flex items-center gap-1 text-xs text-gray-500">
                                        <Clock3 size={14} />
                                        {food.preparationTime}
                                    </span>
                                </div>

                                <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#FFF1E8] py-2.5 text-sm font-semibold text-[#FF6B00] transition group-hover:bg-[#FF6B00] group-hover:text-white">
                                    <ShoppingBag size={16} />
                                    View Food
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
