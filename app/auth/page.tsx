'use client'

import Button from "@/components/atoms/button";
import Input, { InputPassword } from "@/components/atoms/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LoginAction } from "@/actions/auth";

export default function Auth() {
    const router = useRouter();

    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [error, setError] = useState<boolean>(false)

    const handleLogin = () => {
        if(!username || !password) return 
        const result = LoginAction(username, password);
        if(result) {
            router.replace("/")
        } else {
            setError(true)
        }
    }

    return(
        <div className="flex flex-col md:flex-row">
            <div className="flex-1 w-full bg-[#4C70FF] hidden md:block">
                <div className="px-32 flex flex-col items-center justify-center gap-y-10 h-full">
                    <div className="relative w-80 h-80">
                        <Image src={"/images/illustration_1.png"} fill alt="illustration" />
                    </div>
                    <div className="">
                        <p className="text-3xl text-center font-semibold text-white mb-2">
                            Start your journey with us.
                        </p>
                        <p className="text-lg text-center text-gray-200 mb-2">Discover the world&apos;s best community of freelancer and business owners.</p>
                    </div>
                </div>
                
            </div>
            <div className="flex-1 w-full flex flex-col h-screen">
                <div className="flex flex-col px-4 md:px-18 lg:px-32 w-full gap-y-4 h-full my-10 relative justify-center">
                    <div className="relative md:absolute w-44 h-10 top-0">
                        <Image src={"/images/aksamedia-logo.png"} fill alt="logo" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <p className="text-4xl mb-4">👋</p>
                        <p className="text-2xl font-bold mb-2 dark:text-white">Welcome Back</p>
                        <p className="dark:text-gray-200">Please login to access your account.</p>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <Input 
                            label="Username" 
                            placeholder="Masukkan Username" 
                            onChange={e => setUsername(e.target.value)}
                        />
                        <InputPassword 
                            label="Password" 
                            placeholder="Masukkan Password" 
                            onChange={e => setPassword(e.target.value)} 
                            error={error}
                        />
                    </div>
                    <div className="mt-2">
                        <Button title="Login" onClick={handleLogin} />
                    </div>
                </div>

            </div>
        </div>
    )
}