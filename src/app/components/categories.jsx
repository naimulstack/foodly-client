
"use client";

import Link from "next/link";
import useSWR from "swr";
import {
    Pizza,
    Sandwich,
    Beef,
    Utensils,
    Drumstick,
    CakeSlice,
    Coffee,
    Salad,
    Icon,
} from "lucide-react";


const icons = {
    pizza: Pizza,
    sandwich: Sandwich,
    beef: Beef,
    utensils: Utensils,
    drumstick: Drumstick,
    "cake-slice": CakeSlice,
    coffee: Coffee,
    salad: Salad,
};

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Category() {
    const { data: categories, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        fetcher
    );

    if (isLoading) {
        return (
            <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
                <div className="mb-8 text-center">
                    <p className="text-2xl font-semibold text-green-600">
                        Explore Foods
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-gray-900">
                        Popular Food Categories
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className="h-36 animate-pulse rounded-xl bg-gray-200"
                        />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
            <div className="mb-8 text-center">
                <p className="text-2xl font-semibold text-green-600">
                    Explore Foods
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    Popular Food Categories
                </h2>

                <p className="mt-3 text-xl text-gray-500">
                    Discover your favorite food from our popular categories.
                </p>
            </div>

           <div className="group cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-lg">
    <div className="flex flex-col items-center gap-4 p-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-[#22C55E] transition group-hover:scale-110">
            <Icon size={30} strokeWidth={1.8} />
        </div>

        <h3 className="text-center text-sm font-semibold text-gray-800 group-hover:text-green-700">
            {category.name}
        </h3>
    </div>
</div>
        </section>
    );
}
