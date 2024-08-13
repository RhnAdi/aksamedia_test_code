import { Person } from "@/models/person";

export interface PersonCollection {
    [key: string]: Person
}

export function getAllPerson(): PersonCollection {
    if(typeof window !== undefined) {
        const data = JSON.parse(localStorage.getItem("persons") as string) as PersonCollection
        if(data) {
            return data
        }
    }
    return {}
}

export function savePerson(req: Person): Person {
    const persons = getAllPerson()
    const id = new Date().getTime()
    persons[id] = req
    if(typeof window !== undefined) {
        localStorage.setItem("persons", JSON.stringify(persons))
    }
    return req
}

export function getPersonById(id: string): Person | undefined {
    const persons = getAllPerson()
    return persons[id]
}

export function updatePerson(id: string, req: Person): Person | undefined {
    const persons = getAllPerson()
    let person = persons[id]
    if(!person) {
        return undefined
    }

    person = req
    persons[id] = person

    localStorage.setItem("persons", JSON.stringify(persons))

    return person
}

export function deletePerson(id: string): PersonCollection | undefined {
    const persons = getAllPerson()
    let person = persons[id]
    if(!person) {
        return undefined
    }

    delete persons[id]

    localStorage.setItem("persons", JSON.stringify(persons))
    return persons
}

export function findPersons(keyword: string): PersonCollection {
    const persons = getAllPerson();

    const regex = new RegExp(keyword, "i"); // Case-insensitive search
    const filteredData: PersonCollection = {}
    Object.entries(persons).map(([key, person]) => {
        if(regex.test(person.name) || regex.test(person.address) || regex.test(person.gender)){
            filteredData[key] = person
        }
    });

    return filteredData;
}