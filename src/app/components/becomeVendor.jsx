
import Link from "next/link";
import {
    Store,
    TrendingUp,
    Users,
    Bike,
    Wallet,
    Headset,
    ClipboardList,
    CheckCircle,
    ArrowRight,
    Utensils,
    Clock,
    ShieldCheck,
    ChartNoAxesCombined,
} from "lucide-react";

const benefits = [
    {
        icon: TrendingUp,
        title: "Grow Your Business",
        description: "Reach more customers and increase your restaurant's sales with Foodly.",
        color: "bg-orange-100 text-[#FF6B00]",
    },
    {
        icon: Users,
        title: "Reach More Customers",
        description: "Connect with hungry customers looking for their next favorite meal.",
        color: "bg-green-100 text-[#16A34A]",
    },
    {
        icon: Bike,
        title: "Reliable Delivery",
        description: "Let our dedicated delivery riders handle your food deliveries.",
        color: "bg-orange-100 text-[#FF6B00]",
    },
    {
        icon: Wallet,
        title: "Flexible Payments",
        description: "Manage your earnings with convenient payment options.",
        color: "bg-green-100 text-[#16A34A]",
    },
    {
        icon: ChartNoAxesCombined,
        title: "Track Your Performance",
        description: "Monitor orders, sales, and restaurant performance in one place.",
        color: "bg-orange-100 text-[#FF6B00]",
    },
    {
        icon: Headset,
        title: "Dedicated Support",
        description: "Get assistance whenever you need help managing your restaurant.",
        color: "bg-green-100 text-[#16A34A]",
    },
];

const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Register Your Restaurant",
        description: "Submit your restaurant information and contact details.",
    },
    {
        number: "02",
        icon: CheckCircle,
        title: "Get Verified",
        description: "Our team reviews your application and verifies your restaurant.",
    },
    {
        number: "03",
        icon: Utensils,
        title: "Start Receiving Orders",
        description: "Add your food menu and start accepting customer orders.",
    },
];

export default function BecomeVendorPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="overflow-hidden bg-[#FFF7F0] px-4 py-20 sm:px-6 lg:px-10">
                <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-[#FF6B00]">
                            <Store size={16} />
                            PARTNER WITH FOODLY
                        </span>

                        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                            Grow Your
                            <span className="block text-[#FF6B00]">
                                Restaurant Business
                            </span>
                            With Foodly
                        </h1>

                        <p className="mt-6 max-w-lg leading-7 text-gray-600">
                            Bring your delicious food to more customers.
                            Join Foodly as a restaurant partner and take
                            your business to the next level.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/vendor/register"
                                className="inline-flex items-center gap-2 rounded-full bg-[#FF6B00] px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
                            >
                                Become a Partner
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-full border border-gray-300 bg-white px-7 py-3.5 font-bold text-gray-700 transition hover:border-[#FF6B00] hover:text-[#FF6B00]"
                            >
                                Contact Us
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-gray-600">
                            <span className="flex items-center gap-2">
                                <CheckCircle size={17} className="text-[#16A34A]" />
                                Easy Registration
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle size={17} className="text-[#16A34A]" />
                                Business Growth
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-5 rounded-full bg-orange-200/50 blur-3xl" />

                        <img
                            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000"
                            alt="Restaurant owner managing a restaurant"
                            className="relative h-[330px] w-full rounded-3xl object-cover shadow-xl sm:h-[440px]"
                        />

                        <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white p-4 shadow-lg sm:left-5">
                            <div className="flex items-center gap-3">
                                <div className="rounded-xl bg-green-100 p-3 text-[#16A34A]">
                                    <TrendingUp size={25} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800">
                                        Grow With Foodly
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Reach more food lovers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <p className="font-bold tracking-widest text-[#FF6B00]">
                            WHY PARTNER WITH US
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold text-[#1F2937] sm:text-4xl">
                            Everything You Need to Grow
                        </h2>
                        <p className="mt-4 leading-7 text-gray-500">
                            We provide the tools and support to help your
                            restaurant succeed in the online food marketplace.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((benefit) => {
                            const Icon = benefit.icon;

                            return (
                                <div
                                    key={benefit.title}
                                    className="rounded-2xl border border-gray-100 p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
                                >
                                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${benefit.color}`}>
                                        <Icon size={27} />
                                    </div>

                                    <h3 className="mt-5 text-xl font-bold text-[#1F2937]">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-gray-500">
                                        {benefit.description}
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
                            GET STARTED
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-[#1F2937] sm:text-4xl">
                            Become a Foodly Partner
                        </h2>

                        <p className="mt-4 text-gray-500">
                            Getting started is simple. Follow these three steps.
                        </p>
                    </div>

                    <div className="grid gap-10 md:grid-cols-3">
                        {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <div key={step.number} className="text-center">
                                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100 text-[#FF6B00]">
                                        <Icon size={34} />
                                    </div>

                                    <p className="mt-5 text-sm font-extrabold tracking-widest text-[#16A34A]">
                                        STEP {step.number}
                                    </p>

                                    <h3 className="mt-2 text-xl font-bold text-[#1F2937]">
                                        {step.title}
                                    </h3>

                                    <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-gray-500">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Vendor Features */}
            <section className="px-4 py-20 sm:px-6 lg:px-10">
                <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
                    <div>
                        <p className="font-bold tracking-widest text-[#FF6B00]">
                            YOUR RESTAURANT, YOUR CONTROL
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#1F2937] sm:text-4xl">
                            Manage Your Restaurant With Ease
                        </h2>

                        <p className="mt-5 leading-7 text-gray-500">
                            Foodly gives restaurant owners a simple way to
                            manage their menus, orders, and business activities.
                        </p>

                        <div className="mt-8 space-y-5">
                            {[
                                "Manage your food menu and prices",
                                "Receive and manage customer orders",
                                "Track your restaurant sales",
                                "Update restaurant information",
                                "Monitor your business performance",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle className="shrink-0 text-[#16A34A]" size={21} />
                                    <span className="text-sm font-medium text-gray-700">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000"
                            alt="Restaurant team working together"
                            className="h-[350px] w-full rounded-3xl object-cover shadow-lg sm:h-[430px]"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 pb-20 sm:px-6 lg:px-10">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#16A34A] px-6 py-16 text-center sm:px-12">
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#16A34A]">
                            <Store size={32} />
                        </div>

                        <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
                            Ready to Grow Your Restaurant?
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl leading-7 text-white/85">
                            Join Foodly today and connect your restaurant
                            with more hungry customers.
                        </p>

                        <Link
                            href="/vendor/register"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-bold text-[#16A34A] transition hover:bg-orange-500 hover:text-white"
                        >
                            Join Foodly Today
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
