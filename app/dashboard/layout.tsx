'use client'
import Navbar from "@/components/organizm/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter()
    useEffect(() => {
        if(typeof window !== undefined){
            const user = localStorage.getItem("user")
            if(!user) {
                router.replace("/auth")
            }
        }
    }, [router])
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}
