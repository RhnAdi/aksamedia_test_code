'use client'

import { findPersons, getAllPerson, PersonCollection } from "@/actions/person";
import ModalDelete from "@/components/moleculs/ModalDelete";
import PersonItem from "@/components/moleculs/PersonItem";
import Search from "@/components/moleculs/Search";
import Pagination from "@/components/organizm/Pagination";
import { Person } from "@/models/person";
import { createUrl } from "@/utils/url";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiEdit, BiPlus, BiTrash } from "react-icons/bi";

export default function Dashboard(){
    const searchParams = useSearchParams()
    const router = useRouter()
    const [persons, setPersons] = useState<PersonCollection>({})
    const pathname = usePathname()
    const keywordParams = searchParams.get("keyword")
    const pageParams = searchParams.get("page")
    const [keyword, setKeyword] = useState<string | null>(keywordParams)
    
    const [currentPage, setCurrentPage] = useState<number>(pageParams && parseInt(pageParams) || 1);
    const itemsPerPage = 10; // Jumlah data per halaman
    const totalPages = Math.ceil(Object.keys(persons).length / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = Object.entries(persons)
    .slice(startIndex, endIndex)
    .map(([key, person]) => ({ key, person }));


    
    const getCurrentPathname = (keyword?: string, page?: number): string => {
        let str = pathname
        const opt: {[key: string]: string | number} = {}
        if(keyword){
            opt["keyword"] = keyword
        }
        if(page){
            opt["page"] = page
        }
        str = createUrl(pathname, opt)
        return str
    }
    
    const handleSearch = (key: string | null) => {
        if(!key){
            const personsData = getAllPerson()
            setPersons(personsData)
            router.replace(getCurrentPathname(keyword as string, 1))
            return
        }
        const searchPersons = findPersons(key)
        setPersons(searchPersons)
        router.replace(getCurrentPathname(keyword as string, 1))
    }

    useEffect(() => {
        if(keyword){
            handleSearch(keyword)
        } else {
            const personsData = getAllPerson()
            setPersons(personsData)
        }
    }, [])
    return(
        <div className="px-4 md:px-8 lg:px-16 py-10">
            <div className="p-1 w-full">
                    <div className="pb-4 justify-between gap-y-2 flex flex-col md:flex-row">
                        <button onClick={() => router.push("/dashboard/add")} className="w-min py-2 px-4 rounded-lg text-white bg-green-500 flex gap-x-2 items-center">
                            <BiPlus />
                            <p>Add</p>
                        </button>
                        <Search value={keyword} onChangeKeyword={(v) => setKeyword(v)} onSearch={handleSearch}/>
                    </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow border-b border-gray-200 rounded">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Gender
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Age
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paginatedData.map(({key, person}) => {
                                    return <PersonItem key={key} _id={key} person={person} update={(data) => setPersons(data)}/>
                                })
                            }
                        </tbody>
                    </table>
                    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">{Object.entries(persons).length}</span></span>
                        <Pagination 
                            count={totalPages} 
                            active={currentPage} 
                            onChangePage={(page) => {
                                setCurrentPage(page)
                                router.replace(getCurrentPathname(keyword as string, page as number))
                            }} 
                        />
                    </nav>
                </div>
            </div>
        </div>
    )
}