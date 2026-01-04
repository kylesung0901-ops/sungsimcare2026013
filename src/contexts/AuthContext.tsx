"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { app } from '@/lib/firebase';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    isAdmin: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    isAdmin: false,
    login: async () => { },
    logout: async () => { },
});

const ADMIN_EMAILS = ['kylesung0901@gmail.com', 'shim113807@gmail.com'];

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (!app) {
            setLoading(false);
            return;
        }
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsAdmin(user ? ADMIN_EMAILS.includes(user.email?.toLowerCase() || '') : false);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const login = async (email: string, password: string) => {
        if (!app) throw new Error("Firebase not initialized");
        const auth = getAuth(app);
        await signInWithEmailAndPassword(auth, email, password);
    };

    const logout = async () => {
        if (!app) return;
        const auth = getAuth(app);
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, loading, isAdmin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
