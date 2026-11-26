
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { ArrowRight, LockKeyhole, Utensils } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import Logo from "../Images/foodly_logo.png";
import { signIn } from "../../lib/auth-client";

export default function LoginPage() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        setLoading(true);

        const { error } = await signIn.email({
            email: data.email,
            password: data.password,
            callbackURL: "/",
        });

        toast.success("Login successful!");
        router.push("/");
        router.refresh();
    };

    const handleGoogleSignIn = async () => {
        setGoogleLoading(true);

        const { error } = await signIn.social({
            provider: "google",
            callbackURL: "/?googleSignIn=success",
        });
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-12">
            <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

                {/* Left Side */}
                <div className="relative hidden flex-col justify-between overflow-hidden bg-[#FF6B00] p-12 text-white lg:flex">
                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
                    <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-white/10" />

                    <Link href="/" className="relative flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#FF6B00]">
                            <Image
                                src={Logo}
                                alt="Foodly Logo"
                                width={800}
                                height={500}
                            />
                        </div>
                    </Link>

                    <div className="relative">
                        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                            Eat Good • Live Happy
                        </span>

                        <h1 className="mt-7 text-5xl font-extrabold leading-tight">
                            Delicious Food,
                            <br />
                            Delivered With
                            <br />
                            <span className="text-orange-100">Love.</span>
                        </h1>

                        <p className="mt-6 max-w-sm leading-7 text-orange-50">
                            Your favorite meals are just a few clicks away.
                            Sign in and discover amazing food around you.
                        </p>
                    </div>

                    <p className="relative text-sm text-orange-100">
                        © 2026 Foodly. All rights reserved.
                    </p>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
                    <div className="w-full max-w-md">

                        <Link href="/" className="mb-10 flex items-center gap-2 lg:hidden">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6B00] text-white">
                                <Utensils size={22} />
                            </div>

                            <span className="text-2xl font-extrabold text-[#1F2937]">
                                Foodly<span className="text-[#FF6B00]">.</span>
                            </span>
                        </Link>

                        <div>
                            <p className="font-bold tracking-widest text-[#FF6B00]">
                                WELCOME BACK
                            </p>

                            <h2 className="mt-3 text-3xl font-extrabold text-[#1F2937] sm:text-4xl">
                                Login to your account
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                Welcome back! Please enter your details to continue.
                            </p>
                        </div>

                        <Form
                            className="mt-8 flex flex-col gap-5"
                            onSubmit={onSubmit}
                        >
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                validate={(value) =>
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                                        ? null
                                        : "Please enter a valid email address"
                                }
                            >
                                <Label className="font-semibold text-[#1F2937]">
                                    Email Address
                                </Label>

                                <Input
                                    placeholder="john@example.com"
                                    className="mt-2 w-full rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 outline-none focus-within:border-[#FF6B00]"
                                />

                                <FieldError />
                            </TextField>

                            <TextField
                                isRequired
                                name="password"
                                type="password"
                                minLength={8}
                                validate={(value) =>
                                    value.length >= 8
                                        ? null
                                        : "Password must be at least 8 characters"
                                }
                            >
                                <Label className="font-semibold text-[#1F2937]">
                                    Password
                                </Label>

                                <Input
                                    placeholder="Enter your password"
                                    className="mt-2 w-full rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 outline-none focus-within:border-[#FF6B00]"
                                />

                                <FieldError />
                            </TextField>

                            <div className="flex w-full items-center justify-end">
                                <Link
                                    href="/forgot-password"
                                    className="text-sm font-semibold text-[#FF6B00] hover:text-[#16A34A]"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                isDisabled={loading}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] py-3.5 font-bold text-white transition hover:bg-[#e85f00]"
                            >
                                {loading ? "Logging in..." : "Login to Foodly"}
                                <ArrowRight size={19} />
                            </Button>

                            <div className="relative my-2 flex w-full items-center gap-4">
                                <div className="h-px flex-1 bg-gray-200" />
                                <span className="text-xs font-medium text-gray-400">
                                    OR CONTINUE WITH
                                </span>
                                <div className="h-px flex-1 bg-gray-200" />
                            </div>

                            <Button
                                type="button"
                                variant="bordered"
                                isDisabled={googleLoading}
                                onPress={handleGoogleSignIn}
                                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3.5 font-semibold text-[#1F2937] transition hover:border-[#FF6B00] hover:bg-orange-50"
                            >
                                <FcGoogle size={22} />
                                {googleLoading ? "Connecting..." : "Continue with Google"}
                            </Button>
                        </Form>

                        <div className="my-7 flex items-center gap-4">
                            <div className="h-px flex-1 bg-gray-200" />
                            <span className="text-xs font-medium text-gray-400">
                                NEW TO FOODLY?
                            </span>
                            <div className="h-px flex-1 bg-gray-200" />
                        </div>

                        <p className="text-center text-sm text-gray-500">
                            Don't have an account?{" "}
                            <Link
                                href="/sign-up"
                                className="font-bold text-[#16A34A] hover:text-[#FF6B00]"
                            >
                                Create Account
                            </Link>
                        </p>

                        <Link
                            href="/"
                            className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-gray-400 transition hover:text-[#FF6B00]"
                        >
                            <LockKeyhole size={15} />
                            Back to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
