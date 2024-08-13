'use client'

import { getPersonById, updatePerson } from "@/actions/person";
import Button from "@/components/atoms/button";
import Input, { SelectInputGender } from "@/components/atoms/input";
import Breadcrumb from "@/components/moleculs/Breadcrum";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Edit(){
    const router = useRouter()
    const searchParams = useSearchParams()
    const [name, setName] = useState<string>()
    const [gender, setGender] = useState<"male" | "female">("male")
    const [address, setAddress] = useState<string>()
    const [age, setAge] = useState<number>()
    const id = searchParams.get("id") as string

    useEffect(() => {
        const person = getPersonById(id)
        if(person){
            setName(person.name)
            setAddress(person.address)
            setAge(person.age)
            setGender(person.gender)
        }
    }, [])

    const handleUpdate = () => {
        if(!name || !gender || !address || !age) {
            return
        }
        updatePerson( id, {name, gender, address, age})
        router.replace("/dashboard")
    }

    return(
        <div className="px-4 md:px-8 lg:px-16 py-10">
            <Breadcrumb data={[{ href: "", title: "Edit Person" }]} />
            <div className="flex flex-col gap-y-4 mt-8">
                <p className="text-xl font-semibold dark:text-white">Edit Person</p>
                <hr className="h-1 w-full bg-gray-200 dark:bg-slate-800" />
                <Input value={name} label={"Name"} placeholder="Input Name" onChange={(e) => setName(e.target.value)} />
                <div className="flex gap-x-2 items-center">
                    <SelectInputGender value={gender} onChange={(v) => setGender(v)} />
                    <Input value={age} label={"Age"} type="number" onChange={e => setAge(parseInt(e.target.value))}/>
                </div>
                <Input value={address} label={"Address"} placeholder="Input Address" onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="mt-4 flex w-full">
                <div className="w-min">
                    <Button onClick={handleUpdate} title="Update" />
                </div>
            </div>
        </div>
    )
}