
"use client";

import { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageCircle,
    Headset,
    CheckCircle,
} from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        title: "Our Location",
        description: "Chattogram, Bangladesh",
    },
    {
        icon: Phone,
        title: "Phone Number",
        description: "+880 1XXX-XXXXXX",
    },
    {
        icon: Mail,
        title: "Email Address",
        description: "support@foodly.com",
    },
    {
        icon: Clock,
        title: "Working Hours",
        description: "Everyday, 9:00 AM - 10:00 PM",
    },
];

const faqs = [
    {
        question: "How can I track my food order?",
        answer:
            "You can check your order status from your My Orders section after logging in.",
    },
    {
        question: "What payment methods does Foodly accept?",
        answer:
            "Foodly supports Cash on Delivery and online payment options.",
    },
    {
        question: "How can I become a Foodly vendor?",
        answer:
            "Visit our Become a Vendor page and submit your restaurant information to get started.",
    },
    {
        question: "How can I report an issue with my order?",
        answer:
            "Contact our support team with your order details so we can help you.",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <main className="bg-[#F8FAFC]">
            {/* Hero Section */}
            <section className="bg-[#FFF7F0] px-4 py-16 text-center sm:px-6 lg:py-20">
                <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold tracking-wide text-[#FF6B00]">
                    GET IN TOUCH
                </span>

                <h1 className="mt-6 text-4xl font-extrabold text-[#1F2937] sm:text-5xl">
                    We'd Love to
                    <span className="block text-[#FF6B00]">
                        Hear From You
                    </span>
                </h1>

                <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-500">
                    Have a question, suggestion, or need assistance?
                    Our team is always happy to help you.
                </p>
            </section>

            {/* Contact Information */}
            <section className="px-4 pt-12 sm:px-6 lg:px-10">
                <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {contactInfo.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-[#FF6B00]">
                                <item.icon size={23} />
                            </div>

                            <h3 className="mt-5 font-bold text-[#1F2937]">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Form */}
            <section className="px-4 py-16 sm:px-6 lg:px-10">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">
                    {/* Left Content */}
                    <div className="lg:col-span-2">
                        <p className="font-bold tracking-widest text-[#FF6B00]">
                            CONTACT SUPPORT
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#1F2937] sm:text-4xl">
                            Let's Start a
                            <span className="block text-[#FF6B00]">
                                Conversation
                            </span>
                        </h2>

                        <p className="mt-5 leading-8 text-gray-500">
                            Whether you need help with an order, want to
                            partner with us, or simply have something to
                            share, send us a message.
                        </p>

                        <div className="mt-8 rounded-2xl bg-[#1F2937] p-7 text-white">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-orange-400">
                                <Headset size={25} />
                            </div>

                            <h3 className="mt-5 text-xl font-bold">
                                Need Quick Assistance?
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-300">
                                Our support team is ready to help you with
                                your questions and concerns.
                            </p>

                            <a
                                href="mailto:support@foodly.com"
                                className="mt-5 inline-flex items-center gap-2 font-bold text-orange-400 transition hover:text-orange-300"
                            >
                                Email Our Team
                                <Send size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-9 lg:col-span-3">
                        <h3 className="text-2xl font-extrabold text-[#1F2937]">
                            Send Us a Message
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Fill out the form below and let us know how we can help.
                        </p>

                        {submitted && (
                            <div className="mt-6 flex items-center gap-3 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-700">
                                <CheckCircle size={20} />
                                Thank you! Your message has been submitted.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Your Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#FF6B00] focus:bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#FF6B00] focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What is this about?"
                                    required
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#FF6B00] focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Your Message
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    rows={5}
                                    required
                                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-[#FF6B00] focus:bg-white"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-6 py-3.5 font-bold text-white transition hover:bg-orange-600 sm:w-auto"
                            >
                                Send Message
                                <Send size={17} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white px-4 py-20 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-10 text-center">
                        <p className="font-bold tracking-widest text-[#FF6B00]">
                            GOT QUESTIONS?
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-[#1F2937] sm:text-4xl">
                            Frequently Asked Questions
                        </h2>

                        <p className="mt-4 text-gray-500">
                            Find quick answers to some common questions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group rounded-2xl border border-gray-100 bg-[#F8FAFC] p-5"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#1F2937]">
                                    {faq.question}

                                    <span className="text-xl text-[#FF6B00] transition group-open:rotate-45">
                                        +
                                    </span>
                                </summary>

                                <p className="mt-4 border-t border-gray-200 pt-4 text-sm leading-7 text-gray-500">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-[#FFF7F0] px-4 py-16 text-center sm:px-6">
                <div className="mx-auto max-w-2xl">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-[#FF6B00]">
                        <MessageCircle size={28} />
                    </div>

                    <h2 className="mt-6 text-3xl font-extrabold text-[#1F2937]">
                        We're Here to Help!
                    </h2>

                    <p className="mt-4 leading-7 text-gray-500">
                        Your feedback helps us make Foodly better.
                        Get in touch and let us know what you think.
                    </p>

                    <a
                        href="mailto:support@foodly.com"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#FF6B00] px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
                    >
                        Contact Support
                        <Send size={17} />
                    </a>
                </div>
            </section>
        </main>
    );
}
