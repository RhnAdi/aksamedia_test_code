import { LogoutAction } from "@/actions/auth"
import { User } from "@/models/user"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineMoon, AiOutlineSun } from "react-icons/ai"
import { BiHome, BiInfoCircle, BiLogOut, BiSun, BiUser } from "react-icons/bi"
import DarkMode from "../atoms/DarkMode"

export default function Navbar(){
    const [user, setUser] = useState<User>()
    const [menu, setMenu] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
        if(typeof window !== undefined) {
            const userData = JSON.parse(localStorage.getItem("user") as string) as User
            setUser(userData)
        }
    }, [])

    const handleLogout = () => {
        LogoutAction()
        router.replace("/auth")
    }

    return(
        <nav className="px-4 md:px-16 border-b-2 dark:border-slate-800 py-3 md:py-4 flex justify-between items-center bg-blur">
            <div className="relative w-32 h-10 md:w-44 md:h-12">
                <Image src={"/images/aksamedia-logo.png"} fill alt="logo" />
            </div>
            <div className="hidden sm:flex gap-x-4">
                <div className="relative h-full px-4 group">
                    <Link className="text-gray-500 group-hover:text-[#4C70FF] text-semibold" href={"/dashboard"}>Home</Link>
                    <div className="hidden group-hover:block w-full absolute left-0 -bottom-7 bg-[#4C70FF] h-1 rounded-t-full"></div>
                </div>
                <div className="relative h-full px-4 group">
                    <Link className="text-gray-500 group-hover:text-[#4C70FF] text-semibold" href={"https://github.com/RhnAdi"} target="_blank">About</Link>
                    <div className="hidden group-hover:block w-full absolute left-0 -bottom-7 bg-[#4C70FF] h-1 rounded-t-full"></div>
                </div>
            </div>
            <div className="flex gap-x-4 items-center">
                <p className="text-md font-semibold dark:text-white">{user?.username}</p>
                <DarkMode />
                <button className="border border-gray-500 rounded-lg p-2 active:bg-gray-100 dark:active:bg-slate-800" onClick={() => setMenu(state => !state)}>
                    <AiOutlineMenu size={24} className="dark:text-white" />
                </button>
            </div>
            <div className={`${menu ? "absolute" : "hidden"} z-50 w-44 bg-white dark:bg-gray-800 rounded-lg right-4 md:right-12 top-[72px] border border-gray-200 shadow p-2`}>
                <div className="flex flex-col gap-y-2">
                    <button className="md:hidden hover:bg-gray-200 py-1 px-2 text-left w-full rounded flex items-center gap-x-2">
                        <BiHome />
                        <p>Home</p>
                    </button>
                    <button className="md:hidden hover:bg-gray-200 py-1 px-2 text-left w-full rounded flex items-center gap-x-2">
                        <BiInfoCircle />
                        <p>About</p>
                    </button>
                    <button className="hover:bg-gray-200 py-1 px-2 text-left w-full rounded flex items-center gap-x-2" onClick={() => {
                        router.push("/dashboard/profile")
                        setMenu(false)
                    }}>
                        <BiUser />
                        <p>Profile</p>
                    </button>
                    <hr className="h-0.5 w-full bg-gray-300" />
                    <button className="hover:bg-gray-200 py-1 px-2 text-left w-full rounded flex items-center gap-x-2" onClick={handleLogout}>
                        <BiLogOut />
                        <p>Logout</p>
                    </button>

                </div>
            </div>
        </nav>
    )
}