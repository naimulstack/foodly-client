import Image from "next/image";
import Link from "next/link";

import {
    MapPin,
    Phone,
    Mail,
    ArrowRight,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";
import Logo from "../Images/foodly_logo.png"


export default function Footer() {
    return (
        <footer className="bg-[#1F2937] text-white">
            <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 lg:px-8">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-flex items-center">
                            <Image
                                src={Logo}
                                alt="Foodly Logo"
                                width={500}
                                height={75}
                                className="h-11 w-auto object-contain"
                            />
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
                            Discover delicious food from your favorite
                            restaurants and enjoy fresh meals delivered
                            straight to your doorstep.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            {[
                                { icon: FaFacebookF, link: "#" },
                                { icon: FaInstagram, link: "#" },
                                { icon: FaXTwitter, link: "#" },
                                { icon: FaYoutube, link: "#" },
                            ].map(({ icon: Icon, link }, index) => (
                                <Link
                                    key={index}
                                    href={link}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition hover:bg-[#FF6B00] hover:text-white"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold">
                            Quick Links
                        </h3>

                        <ul className="mt-6 space-y-4 text-sm text-gray-400">
                            {[
                                { name: "Home", href: "/" },
                                { name: "All Foods", href: "/foods" },
                                { name: "Restaurants", href: "/restaurants" },
                                { name: "Reviews", href: "/reviews" },
                                { name: "Why Choose Us", href: "/why-choose-foodly" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="inline-flex items-center gap-2 transition hover:translate-x-1 hover:text-[#FF6B00]"
                                    >
                                        <ArrowRight size={14} />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-bold">
                            Customer Support
                        </h3>

                        <ul className="mt-6 space-y-4 text-sm text-gray-400">
                            {[
                                { name: "Contact Us", href: "/contact" },
                                { name: "Become a Vendor", href: "/become-vendor" },
                                { name: "My Orders", href: "/my-orders" },
                                { name: "Privacy Policy", href: "/privacy-policy" },
                                { name: "Terms & Conditions", href: "/terms" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="inline-flex items-center gap-2 transition hover:translate-x-1 hover:text-[#FF6B00]"
                                    >
                                        <ArrowRight size={14} />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold">
                            Get In Touch
                        </h3>

                        <div className="mt-6 space-y-5 text-sm text-gray-400">
                            <div className="flex items-start gap-3">
                                <MapPin
                                    size={19}
                                    className="mt-0.5 shrink-0 text-[#FF6B00]"
                                />
                                <p>
                                    Chattogram, Bangladesh
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone
                                    size={18}
                                    className="shrink-0 text-[#FF6B00]"
                                />
                                <p>+880 1XXX-XXXXXX</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail
                                    size={18}
                                    className="shrink-0 text-[#FF6B00]"
                                />
                                <p>support@foodly.com</p>
                            </div>
                        </div>

                        <div className="mt-7">
                            <h4 className="font-semibold">
                                Need Help?
                            </h4>

                            <Link
                                href="/contact"
                                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#FF6B00] px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                            >
                                Contact Support
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-white/10 pt-7">
                    <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Foodly. All rights reserved.
                        </p>

                        <p className="text-sm font-medium text-gray-400">
                            Eat Good <span className="text-[#FF6B00]">•</span>{" "}
                            Live Happy
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
