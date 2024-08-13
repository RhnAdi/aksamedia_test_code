'use client'

import StartupLoader from "@/components/atoms/StartupLoader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    if(typeof window !== undefined) {
      const user = localStorage.getItem("user")
      if(!user){
        router.replace("/auth")
      } else {
        router.replace("/dashboard")
      }
    }
  }, [])
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-y-4">
      <div className="relative w-64 h-16">
        <Image src={"/images/aksamedia-logo.png"} fill alt="logo" />
      </div>
      <StartupLoader />
    </div>
  );
}
