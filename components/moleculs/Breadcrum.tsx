import Link from "next/link";
import { BiHome } from "react-icons/bi";

export interface BreadcrumbItemProps {
    href: string
    title: string
}

export interface BreadcrumbProps {
    data: BreadcrumbItemProps[]
}

export default function Breadcrumb(props: BreadcrumbProps) {
    return(
        <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
            <Link href="/dashboard" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <BiHome size={20} className="me-2.5" />
                Home
            </Link>
            </li>
            {
                props.data.map((v, idx) => {
                    return(
                        <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                {
                                    props.data.length == idx ?
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{v.title}</span>
                                    :
                                    <Link href={v.href} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{v.title}</Link>
                                }
                            </div>
                        </li>
                    )
                })
            }
        </ol>
        </nav>
    )
}