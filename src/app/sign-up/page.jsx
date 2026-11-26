
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import {
    ArrowRight,
    Utensils,
    LockKeyhole,
    Eye,
    EyeOff,
} from "lucide-react";
import toast from "react-hot-toast";
import Logo from "../Images/foodly_logo.png";
import { authClient, signUp } from "../../lib/auth-client";

export default function RegisterPage() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        setLoading(true);

        const { error } = await signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            callbackURL: "/",
        });

        toast.success("Account created successfully!");
        router.push("/");
        router.refresh();
    };

    const handleGoogleSignUp = async () => {
        setGoogleLoading(true);

        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/?googleSignUp=success",
        });
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-12">
            <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

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
                            EAT GOOD • LIVE HAPPY
                        </span>

                        <h1 className="mt-7 text-5xl font-extrabold leading-tight">
                            Join Foodly,
                            <br />
                            Taste the
                            <br />
                            <span className="text-orange-100">Happiness.</span>
                        </h1>

                        <p className="mt-6 max-w-sm leading-7 text-orange-50">
                            Create your account and explore delicious meals,
                            amazing restaurants, and convenient food delivery.
                        </p>

                        <div className="mt-8 flex items-center gap-3">
                            <div className="flex -space-x-3">
                                <div className="h-10 w-10 rounded-full border-2 border-[#FF6B00] bg-orange-200" />
                                <div className="h-10 w-10 rounded-full border-2 border-[#FF6B00] bg-green-200" />
                                <div className="h-10 w-10 rounded-full border-2 border-[#FF6B00] bg-yellow-200" />
                            </div>

                            <p className="text-sm text-orange-50">
                                Discover food you'll love!
                            </p>
                        </div>
                    </div>

                    <p className="relative text-sm text-orange-100">
                        © 2026 Foodly. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
                    <div className="w-full max-w-md">

                        <Link href="/" className="mb-8 flex items-center gap-2 lg:hidden">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6B00] text-white">
                                <Utensils size={22} />
                            </div>

                            <span className="text-2xl font-extrabold text-[#1F2937]">
                                Foodly<span className="text-[#FF6B00]">.</span>
                            </span>
                        </Link>

                        <div>
                            <p className="font-bold tracking-widest text-[#FF6B00]">
                                GET STARTED
                            </p>

                            <h2 className="mt-3 text-3xl font-extrabold text-[#1F2937] sm:text-4xl">
                                Create an account
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                Join Foodly today and enjoy your favorite food.
                            </p>
                        </div>

                        <Form
                            className="mt-7 flex flex-col gap-4"
                            onSubmit={onSubmit}
                        >
                            <TextField isRequired name="name">
                                <Label className="font-semibold text-[#1F2937]">
                                    Full Name
                                </Label>
                                <Input
                                    placeholder="Enter your full name"
                                    className="mt-2 w-full rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 outline-none focus-within:border-[#FF6B00]"
                                />
                                <FieldError />
                            </TextField>

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
                                type={showPassword ? "text" : "password"}
                                minLength={8}
                                validate={(value) => {
                                    if (value.length < 8) {
                                        return "Password must be at least 8 characters";
                                    }
                                    if (!/[A-Z]/.test(value)) {
                                        return "Password must contain an uppercase letter";
                                    }
                                    if (!/[0-9]/.test(value)) {
                                        return "Password must contain a number";
                                    }
                                    return null;
                                }}
                            >
                                <Label className="font-semibold text-[#1F2937]">
                                    Password
                                </Label>

                                <div className="relative mt-2">
                                    <Input
                                        placeholder="Create a password"
                                        className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 pr-12 outline-none focus-within:border-[#FF6B00]"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FF6B00]"
                                    >
                                        {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                                    </button>
                                </div>

                                <Description className="mt-1 text-xs text-gray-400">
                                    Minimum 8 characters, 1 uppercase letter and 1 number.
                                </Description>
                                <FieldError />
                            </TextField>

                            <TextField
                                isRequired
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                            >
                                <Label className="font-semibold text-[#1F2937]">
                                    Confirm Password
                                </Label>

                                <div className="relative mt-2">
                                    <Input
                                        placeholder="Confirm your password"
                                        className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 pr-12 outline-none focus-within:border-[#FF6B00]"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FF6B00]"
                                    >
                                        {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                                    </button>
                                </div>
                                <FieldError />
                            </TextField>

                            <Button
                                type="submit"
                                isDisabled={loading}
                                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B00] py-3.5 font-bold text-white transition hover:bg-[#e85f00]"
                            >
                                {loading ? "Creating Account..." : "Create Account"}
                                <ArrowRight size={19} />
                            </Button>
                        </Form>

                        <div className="my-5 flex items-center gap-4">
                            <div className="h-px flex-1 bg-gray-200" />
                            <span className="text-xs font-medium text-gray-400">
                                OR SIGN UP WITH
                            </span>
                            <div className="h-px flex-1 bg-gray-200" />
                        </div>

                        <Button
                            type="button"
                            variant="bordered"
                            isDisabled={googleLoading}
                            onPress={handleGoogleSignUp}
                            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3.5 font-semibold text-[#1F2937] transition hover:border-[#FF6B00] hover:bg-orange-50"
                        >
                            <FcGoogle size={22} />
                            {googleLoading ? "Connecting..." : "Continue with Google"}
                        </Button>

                        <p className="mt-7 text-center text-sm text-gray-500">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="font-bold text-[#16A34A] hover:text-[#FF6B00]"
                            >
                                Login
                            </Link>
                        </p>

                        <Link
                            href="/"
                            className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-gray-400 transition hover:text-[#FF6B00]"
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
