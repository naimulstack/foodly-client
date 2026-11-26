
import Image from "next/image";
import Link from "next/link";
import {
    Utensils,
    Heart,
    Truck,
    ShieldCheck,
    Clock,
    Users,
    Target,
    Eye,
    ArrowRight,
    CheckCircle,
    ChefHat,
    Store,
} from "lucide-react";

const features = [
    {
        icon: Utensils,
        title: "Quality Food",
        description:
            "Discover delicious meals prepared with care by restaurants you can trust.",
    },
    {
        icon: Truck,
        title: "Fast Delivery",
        description:
            "Get your favorite meals delivered fresh and quickly to your doorstep.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Ordering",
        description:
            "Enjoy a smooth and reliable ordering experience with flexible payment options.",
    },
    {
        icon: Clock,
        title: "Easy & Convenient",
        description:
            "Browse menus, explore restaurants, and order your favorite food with ease.",
    },
];

const steps = [
    {
        number: "01",
        title: "Explore Foods",
        description:
            "Browse delicious foods and discover restaurants near you.",
        icon: Utensils,
    },
    {
        number: "02",
        title: "Place Your Order",
        description:
            "Choose your favorite meals and complete your order easily.",
        icon: CheckCircle,
    },
    {
        number: "03",
        title: "Enjoy Your Food",
        description:
            "Our delivery riders bring your fresh food right to your door.",
        icon: Truck,
    },
];

export default function AboutPage() {
    return (
        <main className="overflow-hidden bg-white">
            {/* Hero Section */}
            <section className="bg-[#FFF7F0] px-4 py-16 sm:px-6 lg:py-24">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                    <div>
                        <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold tracking-wide text-[#FF6B00]">
                            ABOUT FOODLY
                        </span>

                        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                            Bringing Great Food
                            <span className="block text-[#FF6B00]">
                                Closer to You.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
                            Foodly makes discovering delicious food and
                            ordering from your favorite restaurants easier
                            than ever. We connect food lovers with great
                            restaurants and bring happiness to every meal.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/foods"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#FF6B00] px-6 py-3.5 font-bold text-white transition hover:bg-orange-600"
                            >
                                Explore Foods
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-bold text-[#1F2937] transition hover:border-[#FF6B00] hover:text-[#FF6B00]"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-orange-200/50 blur-3xl" />

                        <div className="relative overflow-hidden rounded-3xl">
                            <Image
                                src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=1000&q=85"
                                alt="Delicious food served at a restaurant"
                                width={700}
                                height={550}
                                unoptimized
                                className="h-[350px] w-full object-cover sm:h-[450px]"
                            />
                        </div>

                        <div className="absolute -bottom-6 left-5 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:left-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-[#FF6B00]">
                                <Heart size={25} fill="currentColor" />
                            </div>

                            <div>
                                <p className="font-extrabold text-[#1F2937]">
                                    Eat Good
                                </p>
                                <p className="text-sm text-gray-500">
                                    Live Happy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="px-4 py-20 sm:px-6 lg:px-10">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                    <div className="relative overflow-hidden rounded-3xl">
                        <Image
                            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1000&q=85"
                            alt="Freshly prepared delicious food"
                            width={700}
                            height={500}
                            unoptimized
                            className="h-[320px] w-full object-cover sm:h-[420px]"
                        />
                    </div>

                    <div>
                        <p className="font-bold tracking-widest text-[#FF6B00]">
                            OUR STORY
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#1F2937] sm:text-4xl">
                            Making Every Food
                            <span className="text-[#FF6B00]">
                                {" "}Moment Special
                            </span>
                        </h2>

                        <p className="mt-6 leading-8 text-gray-500">
                            We believe great food brings people together.
                            Foodly was created with a simple idea: make
                            ordering delicious food easy, convenient, and
                            enjoyable for everyone.
                        </p>

                        <p className="mt-4 leading-8 text-gray-500">
                            From discovering local restaurants to getting
                            your favorite meals delivered, we aim to make
                            every step of your food journey simple and
                            satisfying.
                        </p>

                        <div className="mt-7 space-y-4">
                            {[
                                "Discover your favorite restaurants",
                                "Enjoy convenient online food ordering",
                                "Get fresh meals delivered to your door",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle
                                        size={20}
                                        className="shrink-0 text-[#16A34A]"
                                    />
                                    <p className="text-sm font-medium text-gray-700">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <p className="font-bold tracking-widest text-[#FF6B00]">
                            WHAT DRIVES US
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-[#1F2937] sm:text-4xl">
                            Our Mission & Vision
                        </h2>

                        <p className="mt-4 leading-7 text-gray-500">
                            Everything we do is driven by our passion for
                            great food and better experiences.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-[#FF6B00]">
                                <Target size={28} />
                            </div>

                            <h3 className="mt-6 text-2xl font-extrabold text-[#1F2937]">
                                Our Mission
                            </h3>

                            <p className="mt-4 leading-8 text-gray-500">
                                To make food ordering simple and accessible
                                while connecting customers with quality
                                restaurants and providing a reliable delivery
                                experience.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-[#16A34A]">
                                <Eye size={28} />
                            </div>

                            <h3 className="mt-6 text-2xl font-extrabold text-[#1F2937]">
                                Our Vision
                            </h3>

                            <p className="mt-4 leading-8 text-gray-500">
                                To become a trusted food delivery platform
                                where customers, restaurants, and delivery
                                partners grow together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Foodly */}
            <section className="px-4 py-20 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <p className="font-bold tracking-widest text-[#FF6B00]">
                            WHY FOODLY
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-[#1F2937] sm:text-4xl">
                            More Than Just Food Delivery
                        </h2>

                        <p className="mt-4 leading-7 text-gray-500">
                            We focus on making your food experience better
                            with convenience, quality, and care.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-lg"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#FF6B00] transition group-hover:bg-[#FF6B00] group-hover:text-white">
                                    <feature.icon size={27} />
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-[#1F2937]">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-500">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-[#FFF7F0] px-4 py-20 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-14 max-w-2xl text-center">
                        <p className="font-bold tracking-widest text-[#FF6B00]">
                            SIMPLE PROCESS
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-[#1F2937] sm:text-4xl">
                            How Foodly Works
                        </h2>

                        <p className="mt-4 leading-7 text-gray-500">
                            Your favorite food is just a few simple steps away.
                        </p>
                    </div>

                    <div className="grid gap-10 md:grid-cols-3">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="relative text-center"
                            >
                                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-[#FF6B00] shadow-sm">
                                    <step.icon size={34} />

                                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B00] text-xs font-bold text-white">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-xl font-extrabold text-[#1F2937]">
                                    {step.title}
                                </h3>

                                <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-gray-500">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* For Restaurants & Customers */}
            <section className="px-4 py-20 sm:px-6 lg:px-10">
                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
                    <div className="rounded-3xl bg-[#1F2937] p-8 text-white sm:p-10">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-orange-400">
                            <Store size={28} />
                        </div>

                        <h3 className="mt-6 text-2xl font-extrabold">
                            Grow With Foodly
                        </h3>

                        <p className="mt-4 leading-7 text-gray-300">
                            Are you a restaurant owner? Join Foodly to reach
                            more customers, showcase your menu, and grow your
                            restaurant business.
                        </p>

                        <Link
                            href="/become-vendor"
                            className="mt-7 inline-flex items-center gap-2 font-bold text-[#FF8A3D] transition hover:gap-3"
                        >
                            Become a Vendor
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="rounded-3xl bg-orange-50 p-8 sm:p-10">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#FF6B00]">
                            <Users size={28} />
                        </div>

                        <h3 className="mt-6 text-2xl font-extrabold text-[#1F2937]">
                            Food Lovers Welcome
                        </h3>

                        <p className="mt-4 leading-7 text-gray-600">
                            Discover new flavors, explore local restaurants,
                            and enjoy your favorite meals without leaving
                            your home.
                        </p>

                        <Link
                            href="/foods"
                            className="mt-7 inline-flex items-center gap-2 font-bold text-[#FF6B00] transition hover:gap-3"
                        >
                            Explore Foods
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-4 pb-20 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#FF6B00] px-6 py-14 text-center sm:px-12">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
                        <ChefHat size={34} />
                    </div>

                    <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
                        Ready for Something Delicious?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-orange-50">
                        Explore amazing meals from your favorite restaurants
                        and make every meal a happy moment with Foodly.
                    </p>

                    <Link
                        href="/foods"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-[#FF6B00] transition hover:bg-orange-50"
                    >
                        Order Your Favorite Food
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
