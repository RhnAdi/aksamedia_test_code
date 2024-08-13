import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export default function Button(props: ButtonProps) {
    return(
        <button className="bg-[#4C70FF]  p-3 md:p-4 w-full text-white rounded text-lg font-semibold hover:bg-[#4C70FF]/50" {...props}>
            {props.title}
        </button>
    )
}