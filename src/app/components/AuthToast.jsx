"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

export default function AuthToast() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        if (params.get("googleSignUp") === "success") {
            toast.success("Google sign up successful!");
            window.history.replaceState({}, "", "/");
        }
         if (params.get("googleSignIn") === "success") {
            toast.success("Google login successful!");
            window.history.replaceState({}, "", "/");
        }
    }, []);

    return null;
}