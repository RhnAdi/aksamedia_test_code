'use client'

import { getUser, updateProfile } from "@/actions/auth";
import { savePerson } from "@/actions/person";
import Button from "@/components/atoms/button";
import Input, { SelectInputGender } from "@/components/atoms/input";
import Breadcrumb from "@/components/moleculs/Breadcrum";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Profile(){
    const router = useRouter()
    const [username, setUsername] = useState<string>()

    useEffect(() => {
        const user = getUser()
        setUsername(user?.username)
    }, [])

    const handleSave =() => {
        if(!username) return
        const res = updateProfile(username)

        if(res) {
            router.replace("/")
        }
    }

    return(
        <div className="px-4 md:px-8 lg:px-16 py-10">
            <Breadcrumb data={[{ href: "", title: "Add Person" }]} />
            <div className="flex flex-col gap-y-4 mt-8">
                <p className="text-xl font-semibold dark:text-white">Add Person</p>
                <hr className="h-1 w-full bg-gray-200 dark:bg-slate-800" />
                <Input value={username} label={"Username"} placeholder="Input Name" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mt-4 flex w-full">
                <div className="w-min">
                    <Button onClick={handleSave} title="Save" />
                </div>
            </div>
        </div>
    )
}