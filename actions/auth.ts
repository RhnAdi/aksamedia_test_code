import { User } from "@/models/user"

export interface AuthCollection {
    username: string
}

export function LoginAction(username: string, password: string): boolean {
    if(password === "admin"){
        localStorage.setItem("user", JSON.stringify({username: username}))
        return true
    }
    return false
}

export function LogoutAction() {
    localStorage.removeItem("user")
}

export function updateProfile(username: string) {
    if(typeof window !== undefined) {
        const user = JSON.parse(localStorage.getItem("user") as string) as AuthCollection

        user.username = username
        localStorage.setItem("user", JSON.stringify(user))
        return true
    }
    return false
}

export function getUser(): User | undefined {
    if(typeof window !== undefined) {
        const user = JSON.parse(localStorage.getItem("user") as string) as AuthCollection
        return user
    }
}