
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: process.env.LOCAL_URL,
});

export const { signIn, signUp, useSession } = authClient;
