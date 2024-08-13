import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";

export default function DarkMode(){
    const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

    return(
        <div>
            {
                theme == "dark" ?
                <button className="border border-gray-500 rounded-lg p-2 active:bg-gray-100 dark:active:bg-slate-800" onClick={() => setTheme("light")} >
                    <AiOutlineSun size={24} className="dark:text-white" />
                </button>
                :
                <button className="border border-gray-500 rounded-lg p-2 active:bg-gray-100 dark:active:bg-slate-800" onClick={() => setTheme("dark")} >
                    <AiOutlineMoon size={24} className="dark:text-white" />
                </button>
            }
        </div>
    )
}