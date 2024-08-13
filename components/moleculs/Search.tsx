import { BiSearch } from "react-icons/bi";

export interface SearchProps {
    value: string | null
    onChangeKeyword: (v: string) => void
    onSearch: (key: string | null) => void
}

export default function Search(props: SearchProps) {
    const handleSearch = () => {
        props.onSearch(props.value)
    }
    return(
        <div className="flex gap-x-2 items-center w-full md:w-min">
            <div className="bg-white dark:bg-gray-900 flex-1">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <BiSearch />
                    </div>
                    <input value={props.value || ""} type="text" id="table-search" className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full md:w-72 lg:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for person" onChange={(e) => props.onChangeKeyword(e.target.value)} />
                </div>
            </div>
            <button onClick={handleSearch} className="block px-4 py-2 rounded-lg bg-[#4C70FF] text-white">Find</button>
        </div>
    )
}