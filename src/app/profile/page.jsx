
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    User,
    Mail,
    Phone,
    MapPin,
    CalendarDays,
    Venus,
    Camera,
    Pencil,
    Save,
    X,
    ArrowLeft,
    ShieldCheck,
    ShoppingBag,
    Heart,
} from "lucide-react";
import { Button, Input, Label } from "@heroui/react";
import { toast } from "react-hot-toast";
import { useSession } from "../../lib/auth-client";

const initialProfile = {
    name: "",
    email: "",
    phone: "",
    gender: "Male",
    dateOfBirth: "",
    division: "",
    district: "",
    area: "",
    street: "",
    postalCode: "",
    image: "",
};

export default function ProfilePage() {
    const { data: session, isPending } = useSession();

    const [profile, setProfile] = useState(initialProfile);
    const [savedProfile, setSavedProfile] = useState(initialProfile);
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const email = session?.user?.email;

    useEffect(() => {
        if (isPending) return;

        if (!email) {
            setLoading(false);
            return;
        }

        const fetchProfile = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/user-profile/${encodeURIComponent(email)}`
            );

            const data = await response.json();

            const userProfile = {
                ...initialProfile,
                name: session.user.name || "",
                email,
                image: session.user.image || "",
                ...data,
                email,
            };

            setProfile(userProfile);
            setSavedProfile(userProfile);
            setLoading(false);
        };

        fetchProfile();
    }, [email, isPending, session]);

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        if (file.size > 2 * 1024 * 1024) {
            toast.error("Image size must be less than 2MB");
            return;
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            setProfile({
                ...profile,
                image: reader.result,
            });
        };

        reader.readAsDataURL(file);
    };

    const handleSave = async () => {
        setSaving(true);

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/user-profile`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(profile),
            }
        );

        const data = await response.json();

        if (data.success) {
            setSavedProfile(profile);
            setEditMode(false);
            toast.success("Profile updated successfully!");
        } else {
            toast.error("Failed to update profile");
        }

        setSaving(false);
    };

    const handleCancel = () => {
        setProfile(savedProfile);
        setEditMode(false);
    };

    const fields = [
        {
            label: "Full Name",
            name: "name",
            icon: User,
            placeholder: "Enter your full name",
        },
        {
            label: "Email Address",
            name: "email",
            icon: Mail,
            placeholder: "Enter your email",
            type: "email",
        },
        {
            label: "Phone Number",
            name: "phone",
            icon: Phone,
            placeholder: "01XXXXXXXXX",
        },
        {
            label: "Date of Birth",
            name: "dateOfBirth",
            icon: CalendarDays,
            type: "date",
        },
    ];

    if (isPending || loading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC]">
                <p className="font-semibold text-gray-500">Loading profile...</p>
            </main>
        );
    }

    if (!email) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#F8FAFC]">
                <User size={45} className="text-[#FF6B00]" />
                <h2 className="text-xl font-bold text-gray-800">
                    Please login to view your profile
                </h2>
                <Link
                    href="/login"
                    className="rounded-xl bg-[#FF6B00] px-6 py-3 font-semibold text-white"
                >
                    Login Now
                </Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#F8FAFC] px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">

                <Link
                    href="/"
                    className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#FF6B00]"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>

                <div className="mb-8">
                    <p className="font-bold tracking-widest text-[#FF6B00]">
                        MY ACCOUNT
                    </p>

                    <h1 className="mt-2 text-3xl font-extrabold text-[#1F2937] sm:text-4xl">
                        My Profile
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Manage your personal information and delivery address.
                    </p>
                </div>

                <div className="grid gap-7 lg:grid-cols-[320px_1fr]">

                    {/* Profile Sidebar */}
                    <aside className="h-fit overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

                        <div className="h-28 bg-gradient-to-r from-[#FF6B00] to-[#16A34A]" />

                        <div className="px-6 pb-6">
                            <div className="-mt-14 flex flex-col items-center">

                                <div className="relative">
                                    <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-orange-50">
                                        {profile.image ? (
                                            <img
                                                src={profile.image}
                                                alt="Profile"
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <User size={48} className="text-[#FF6B00]" />
                                        )}
                                    </div>

                                    {editMode && (
                                        <label className="absolute bottom-1 right-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-[#FF6B00] text-white shadow-md">
                                            <Camera size={17} />

                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="hidden"
                                            />
                                        </label>
                                    )}
                                </div>

                                <h2 className="mt-4 text-xl font-extrabold text-[#1F2937]">
                                    {profile.name}
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    {profile.email}
                                </p>

                                <span className="mt-3 flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                                    <ShieldCheck size={14} />
                                    Foodly Member
                                </span>
                            </div>

                            <div className="my-6 h-px bg-gray-100" />

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <ShoppingBag size={18} className="text-[#FF6B00]" />
                                    My Orders
                                </div>

                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Heart size={18} className="text-[#FF6B00]" />
                                    Favorite Foods
                                </div>

                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <MapPin size={18} className="text-[#FF6B00]" />
                                    Delivery Address
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Profile Details */}
                    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8">

                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
                            <div>
                                <h2 className="text-xl font-extrabold text-[#1F2937]">
                                    Personal Information
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Update your account details.
                                </p>
                            </div>

                            {!editMode && (
                                <Button
                                    onPress={() => setEditMode(true)}
                                    className="flex items-center gap-2 rounded-xl bg-[#FF6B00] px-5 py-2.5 font-semibold text-white hover:bg-[#e85f00]"
                                >
                                    <Pencil size={16} />
                                    Edit Profile
                                </Button>
                            )}
                        </div>

                        <div className="mt-7 grid gap-6 sm:grid-cols-2">

                            {fields.map((field) => (
                                <div key={field.name}>
                                    <Label className="mb-2 block text-sm font-semibold text-[#1F2937]">
                                        {field.label}
                                    </Label>

                                    <div className="relative">
                                        <Input
                                            name={field.name}
                                            type={field.type || "text"}
                                            value={profile[field.name]}
                                            onChange={handleChange}
                                            isReadOnly={!editMode || field.name === "email"}
                                            placeholder={field.placeholder}
                                            className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 pl-10 text-sm outline-none focus-within:border-[#FF6B00]"
                                        />

                                        <field.icon
                                            size={17}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        />
                                    </div>
                                </div>
                            ))}

                            <div>
                                <Label className="mb-2 block text-sm font-semibold text-[#1F2937]">
                                    Gender
                                </Label>

                                <div className="relative">
                                    <select
                                        name="gender"
                                        value={profile.gender}
                                        onChange={handleChange}
                                        disabled={!editMode}
                                        className="w-full appearance-none rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 pl-10 text-sm outline-none focus:border-[#FF6B00] disabled:opacity-70"
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>

                                    <Venus
                                        size={17}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="my-8 border-t border-gray-100" />

                        <div>
                            <h2 className="text-xl font-extrabold text-[#1F2937]">
                                Delivery Address
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Where should we deliver your food?
                            </p>
                        </div>

                        <div className="mt-6 grid gap-6 sm:grid-cols-2">

                            {[
                                { label: "Division", name: "division", placeholder: "Enter division" },
                                { label: "District", name: "district", placeholder: "Enter district" },
                                { label: "Area / City", name: "area", placeholder: "Enter area or city" },
                                { label: "Street Address", name: "street", placeholder: "House, road, street" },
                                { label: "Postal Code", name: "postalCode", placeholder: "Enter postal code" },
                            ].map((field) => (
                                <div
                                    key={field.name}
                                    className={field.name === "street" ? "sm:col-span-2" : ""}
                                >
                                    <Label className="mb-2 block text-sm font-semibold text-[#1F2937]">
                                        {field.label}
                                    </Label>

                                    <Input
                                        name={field.name}
                                        value={profile[field.name]}
                                        onChange={handleChange}
                                        isReadOnly={!editMode}
                                        placeholder={field.placeholder}
                                        className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm outline-none focus-within:border-[#FF6B00]"
                                    />
                                </div>
                            ))}
                        </div>

                        {editMode && (
                            <div className="mt-8 flex flex-wrap justify-end gap-3 border-t border-gray-100 pt-6">

                                <Button
                                    onPress={handleCancel}
                                    isDisabled={saving}
                                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 font-semibold text-gray-600"
                                >
                                    <X size={17} />
                                    Cancel
                                </Button>

                                <Button
                                    onPress={handleSave}
                                    isDisabled={saving}
                                    className="flex items-center gap-2 rounded-xl bg-[#16A34A] px-6 py-2.5 font-semibold text-white hover:bg-green-700"
                                >
                                    <Save size={17} />
                                    {saving ? "Saving..." : "Save Changes"}
                                </Button>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </main>
    );
}
