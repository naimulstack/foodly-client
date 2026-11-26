
import Link from "next/link";
import {
    Utensils,
    Bike,
    CreditCard,
    BadgeCheck,
    Clock,
    Tags,
    Search,
    ShoppingBag,
    Truck,
    Star,
    ArrowRight,
    Heart,
    Headphones,
} from "lucide-react";

const features = [
    {
        icon: Utensils,
        title: "Wide Food Selection",
        description: "Explore a wide variety of delicious meals from different restaurants in one place.",
        color: "bg-orange-100 text-[#FF6B00]",
    },
    {
        icon: Bike,
        title: "Fast & Reliable Delivery",
        description: "Get your favorite meals delivered fresh and hot right to your doorstep.",
        color: "bg-green-100 text-[#16A34A]",
    },
    {
        icon: CreditCard,
        title: "Flexible Payments",
        description: "Enjoy convenient payment options with Cash on Delivery and online payments.",
        color: "bg-orange-100 text-[#FF6B00]",
    },
    {
        icon: BadgeCheck,
        title: "Trusted Restaurants",
        description: "Discover restaurants and enjoy delicious meals from trusted food vendors.",
        color: "bg-green-100 text-[#16A34A]",
    },
    {
        icon: Clock,
        title: "Easy Ordering",
        description: "Order your favorite food in just a few clicks without any hassle.",
        color: "bg-orange-100 text-[#FF6B00]",
    },
    {
        icon: Tags,
        title: "Exclusive Offers",
        description: "Enjoy exciting discounts and special deals on your favorite dishes.",
        color: "bg-green-100 text-[#16A34A]",
    },
    {
        icon: Heart,
        title: "Customer Satisfaction",
        description: "We care about your experience and always aim to make you happy.",
        color: "bg-orange-100 text-[#FF6B00]",
    },
    {
        icon: Headphones,
        title: "Customer Support",
        description: "Get help whenever you need assistance with your food orders.",
        color: "bg-green-100 text-[#16A34A]",
    },
];

const steps = [
    {
        number: "01",
        icon: Search,
        title: "Explore Foods",
        description: "Discover delicious meals and explore your favorite restaurants.",
    },
    {
        number: "02",
        icon: ShoppingBag,
        title: "Place Your Order",
        description: "Choose your favorite dishes and complete your order easily.",
    },
    {
        number: "03",
        icon: Truck,
        title: "Enjoy Delivery",
        description: "Sit back and relax while our riders deliver your food.",
    },
];

const stats = [
    { value: "10+", label: "Restaurants" },
    { value: "100+", label: "Food Items" },
    { value: "24/7", label: "Easy Ordering" },
    { value: "100%", label: "Customer Focus" },
];

export default function WhyChooseFoodly() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#FFF7F0] px-4 py-20 sm:px-6 lg:px-10">
                <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
                    <div>
                        <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FF6B00]">
                            WHY FOODLY?
                        </span>

                        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                            Good Food.
                            <span className="block text-[#FF6B00]">
                                Great Moments.
                            </span>
                            Delivered.
                        </h1>

                        <p className="mt-6 max-w-lg leading-7 text-gray-600">
                            Foodly makes food ordering simple, convenient, and enjoyable.
                            Discover amazing meals, order with ease, and get your favorites
                            delivered right to your doorstep.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/foods"
                                className="inline-flex items-center gap-2 rounded-full bg-[#FF6B00] px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
                            >
                                Explore Foods
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-full border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition hover:border-[#FF6B00] hover:text-[#FF6B00]"
                            >
                                Contact Us
                            </Link>
                        </div>

                        <div className="mt-8 flex items-center gap-3">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((item) => (
                                    <div
                                        key={item}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-orange-100 text-sm font-bold text-[#FF6B00]"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <Star key={item} size={14} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-xs text-gray-500">
                                    Made for food lovers
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-5 rounded-full bg-orange-200/40 blur-3xl" />

                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000"
                            alt="Delicious food collection"
                            className="relative h-[320px] w-full rounded-3xl object-cover shadow-xl sm:h-[430px]"
                        />

                        <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white p-4 shadow-lg sm:left-5">
                            <div className="flex items-center gap-3">
                                <div className="rounded-xl bg-green-100 p-3 text-[#16A34A]">
                                    <Bike size={25} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800">Fast Delivery</p>
                                    <p className="text-xs text-gray-500">
                                        Right to your doorstep
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <p className="font-bold tracking-widest text-[#FF6B00]">
                            THE FOODLY ADVANTAGE
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold text-[#1F2937] sm:text-4xl">
                            Why Choose Foodly?
                        </h2>
                        <p className="mt-4 leading-7 text-gray-500">
                            Everything you need for a better food ordering experience,
                            all in one place.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className="group rounded-2xl border border-gray-100 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
                                >
                                    <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color}`}>
                                        <Icon size={27} />
                                    </div>

                                    <h3 className="text-lg font-bold text-[#1F2937]">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-500">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-14 max-w-xl text-center">
                        <p className="font-bold tracking-widest text-[#16A34A]">
                            SIMPLE & EASY
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold text-[#1F2937] sm:text-4xl">
                            How Foodly Works
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Delicious food is just three simple steps away.
                        </p>
                    </div>

                    <div className="grid gap-10 md:grid-cols-3">
                        {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <div key={step.number} className="relative text-center">
                                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100 text-[#FF6B00]">
                                        <Icon size={34} />
                                    </div>

                                    <span className="mt-5 inline-block text-sm font-extrabold tracking-widest text-[#16A34A]">
                                        STEP {step.number}
                                    </span>

                                    <h3 className="mt-2 text-xl font-bold text-[#1F2937]">
                                        {step.title}
                                    </h3>

                                    <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-500">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="px-4 py-16 sm:px-6 lg:px-10">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 rounded-3xl bg-[#16A34A] px-6 py-12 text-center sm:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                                {stat.value}
                            </h3>
                            <p className="mt-2 text-sm font-medium text-white/80">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-4 pb-20 sm:px-6 lg:px-10">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#FFF1E8] px-6 py-14 text-center sm:px-12">
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-200/50 blur-3xl" />

                    <div className="relative">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#FF6B00] shadow-sm">
                            <Utensils size={28} />
                        </div>

                        <h2 className="mt-6 text-3xl font-extrabold text-[#1F2937] sm:text-4xl">
                            Good Food Is Just a Click Away!
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
                            Discover delicious meals, explore amazing restaurants,
                            and enjoy a wonderful food experience with Foodly.
                        </p>

                        <Link
                            href="/foods"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF6B00] px-8 py-3.5 font-bold text-white transition hover:bg-orange-600"
                        >
                            Order Your Favorite Food
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
