
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FoodImage from "../Images/a_can_you_make_the_sim.webp";

export default function BottomBanner() {
    return (
        <section className="px-4 py-6 sm:px-6 lg:px-10">
            <div
                className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-md"
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(22, 163, 74, 0.85), rgba(22, 163, 74, 0.45)), url(${FoodImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="relative flex min-h-[170px] items-center justify-center">
                    {/* Banner Content */}
                    <div className="z-10 mx-auto px-6 py-5 text-center">                         <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                        Fast & Reliable
                        <br />
                        Delivery Service
                    </h2>

                        <p className="mt-2 text-xs text-white/90 sm:text-sm">
                            Get your food delivered at your doorstep.
                        </p>

                        <Link
                            href="/foods"
                            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#E63946] px-4 py-2 text-xs font-bold text-white shadow transition hover:bg-orange-500 hover:text-white"
                        >
                            Order Now
                            <ArrowRight size={15} />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
