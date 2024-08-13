import { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from "react";
import { BsEye } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type?: string;
    error?: boolean
}

export default function Input(props: InputProps) {
    return(
        <div className="flex flex-col w-full">
            <label className="text-[#455360] dark:text-gray-400 text-base mb-1">{props.label}</label>
            <div className="relative flex items-center">
                <input type={props.type} className="p-3 rounded bg-[#ECF2F7] dark:bg-slate-700 w-full dark:text-white" {...props} />
            </div>
        </div>
    )
}

export function InputPassword(props: InputProps) {
    const [show, setShow] = useState<boolean>(false)
    return(
        <div className="flex flex-col w-full">
            <label className="text-[#455360] dark:text-gray-400 text-base mb-1">{props.label}</label>
            <div className="relative flex items-center">
                <input type={show ? "string" : "password"} className="p-3 rounded bg-[#ECF2F7] dark:bg-slate-700 w-full dark:text-white" {...props} />
                <button className="absolute right-4" onClick={() => setShow(state => !state)}>
                    {
                        show ?
                        <FaEye className="text-gray-500" />
                        :
                        <FaEyeLowVision className="text-gray-500" />
                    }
                </button>
            </div>
            {
                props.error &&
                <p className="text-red-500 text-sm mt-2">Password salah (isi dengan "admin")</p>
            }
        </div>
    )
}

export function SelectInputGender(props: {value:"male" | "female",  onChange: (gender: "male" | "female") => void}) {
    return(
        <form className="w-full">
            
            <label htmlFor="gender" className="text-[#455360] dark:text-gray-400 text-base mb-1">
                Select an option
            </label>
            <select 
                id="gender" 
                className="p-3 rounded bg-[#ECF2F7] dark:bg-slate-700 w-full" 
                onChange={e => props.onChange(e.target.value as "male" | "female")}>
                <option selected={props.value == "male"} value="male">Male</option>
                <option selected={props.value == "female"} value="female">Female</option>
            </select>
        </form>
    )
}