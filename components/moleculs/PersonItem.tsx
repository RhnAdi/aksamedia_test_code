import { Person } from "@/models/person"
import router from "next/router"
import { useState } from "react"
import { BiEdit, BiTrash } from "react-icons/bi"
import ModalDelete from "./ModalDelete"
import { useRouter } from "next/navigation"
import { deletePerson, PersonCollection } from "@/actions/person"

export interface PersonItemProps {
    _id: string
    person: Person
    update: (data: PersonCollection) => void
}

export default function PersonItem(props: PersonItemProps) {
    const router = useRouter()
    const { person,_id } = props
    const [showDelete, setShowDelete] = useState<boolean>(false)
    const handleDelete = () => {
        const res = deletePerson(_id)
        if(res){
            props.update(res)
        }
        setShowDelete(false)

    }
    return(
        <tr key={_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                { person.name }
            </th>
            <td className="px-6 py-4 capitalize">
                { person.gender}
            </td>
            <td className="px-6 py-4">
                { person.age }
            </td>
            <td className="px-6 py-4">
                { person.address }
            </td>
            <td className="px-6 py-4 flex gap-x-2">
                <button className="flex items-center gap-x-2 py-2 px-4 rounded-lg bg-yellow-500" onClick={() => router.push("/dashboard/edit?id="+_id)}>
                    <BiEdit size={20} color="white" />
                    <p className="text-white">Edit</p>
                </button>
                <button onClick={() => setShowDelete(true)} className="flex items-center gap-x-2 py-2 px-4 rounded-lg bg-red-500">
                    <BiTrash size={20} color="white" />
                    <p className="text-white">Delete</p>
                </button>
            </td>
            <ModalDelete show={showDelete} id={person.name} onDelete={handleDelete} onCancel={() => setShowDelete(false)}/>
        </tr>
    )
}