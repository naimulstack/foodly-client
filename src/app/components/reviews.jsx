
"use client";

import { useEffect, useState } from "react";
import { Star, MessageSquare, Quote } from "lucide-react";

export default function ReviewsPage() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`)
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (reviews.length <= 4) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % reviews.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [reviews]);

    const averageRating = reviews.length
        ? (
              reviews.reduce((total, review) => total + review.rating, 0) /
              reviews.length
          ).toFixed(1)
        : "0.0";

    const visibleReviews = [...reviews, ...reviews.slice(0, 3)];

    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            {/* Hero Section */}
            <section className="bg-[#FFF7F0] px-4 py-16 text-center sm:px-6">
                <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-[#FF6B00]">
                    CUSTOMER FEEDBACK
                </span>

                <h1 className="mt-6 text-4xl font-extrabold text-[#1F2937] sm:text-5xl">
                    What Our Customers
                    <span className="block text-[#FF6B00]">
                        Say About Foodly
                    </span>
                </h1>

                <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-500">
                    Your satisfaction means everything to us. Discover what
                    our customers think about their Foodly experience.
                </p>
            </section>

            {/* Rating Summary */}
            <section className="px-4 pt-12 sm:px-6 lg:px-10">
                <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
                    <div className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm">
                        <p className="text-sm font-semibold text-gray-500">
                            Average Customer Rating
                        </p>

                        <h2 className="mt-3 text-5xl font-extrabold text-[#1F2937]">
                            {averageRating}
                            <span className="text-xl text-gray-400">/5</span>
                        </h2>

                        <div className="mt-3 flex justify-center gap-1 text-yellow-400">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={21}
                                    fill="currentColor"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-[#FF6B00]">
                            <MessageSquare size={24} />
                        </div>

                        <h2 className="mt-3 text-4xl font-extrabold text-[#1F2937]">
                            {reviews.length}
                        </h2>

                        <p className="mt-2 text-sm font-semibold text-gray-500">
                            Total Customer Reviews
                        </p>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="overflow-hidden py-16">
                <div className="mb-8 px-4 sm:px-6 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <p className="font-bold tracking-widest text-[#FF6B00]">
                            CUSTOMER STORIES
                        </p>

                        <h2 className="mt-2 text-3xl font-extrabold text-[#1F2937]">
                            Latest Reviews
                        </h2>
                    </div>
                </div>

                {loading ? (
                    <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="h-64 animate-pulse rounded-2xl bg-gray-200"
                            />
                        ))}
                    </div>
                ) : reviews.length === 0 ? (
                    <div className="mx-4 rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center">
                        <MessageSquare
                            className="mx-auto text-gray-400"
                            size={40}
                        />

                        <h3 className="mt-4 text-xl font-bold text-gray-700">
                            No Reviews Yet
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Be the first to share your Foodly experience!
                        </p>
                    </div>
                ) : (
                    <div className="mx-auto max-w-7xl overflow-hidden px-1">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${current * 25}%)`,
                            }}
                        >
                            {visibleReviews.map((review, index) => (
                                <div
                                    key={`${review._id}-${index}`}
                                    className="w-1/2 shrink-0 px-3 lg:w-1/4"
                                >
                                    <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                                        <div className="flex items-center justify-between">
                                            <Quote
                                                size={32}
                                                className="text-orange-200"
                                                fill="currentColor"
                                            />

                                            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-[#16A34A]">
                                                Verified Customer
                                            </span>
                                        </div>

                                        <div className="mt-5 flex items-center gap-1 text-yellow-400">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    size={17}
                                                    fill={
                                                        star <= review.rating
                                                            ? "currentColor"
                                                            : "none"
                                                    }
                                                    className={
                                                        star <= review.rating
                                                            ? ""
                                                            : "text-gray-300"
                                                    }
                                                />
                                            ))}

                                            <span className="ml-2 text-sm font-bold text-gray-700">
                                                {review.rating}/5
                                            </span>
                                        </div>

                                        <p className="mt-4 min-h-20 text-sm leading-7 text-gray-600">
                                            "{review.comment}"
                                        </p>

                                        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
                                            <div className="flex min-w-0 items-center gap-3">
                                                {review.image ? (
                                                    <img
                                                        src={review.image}
                                                        alt={review.name}
                                                        className="h-11 w-11 rounded-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-[#FF6B00]">
                                                        {review.name?.charAt(0)}
                                                    </div>
                                                )}

                                                <div className="min-w-0">
                                                    <h3 className="truncate font-bold text-[#1F2937]">
                                                        {review.name}
                                                    </h3>

                                                    <p className="text-xs text-gray-400">
                                                        {new Date(
                                                            review.createdAt
                                                        ).toLocaleDateString(
                                                            "en-US",
                                                            {
                                                                day: "numeric",
                                                                month: "short",
                                                                year: "numeric",
                                                            }
                                                        )}
                                                    </p>
                                                </div>
                                            </div>

                                            <span className="max-w-28 truncate rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-[#FF6B00]">
                                                {review.foodName}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}
