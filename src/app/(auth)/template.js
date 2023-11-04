
import Header from "./Header"
import { getToken } from "@/Context/cookies"
import { redirect } from "next/navigation"

export default function Template({ children }) {

    if (getToken() === undefined) redirect('/login')

    return (
        <>
            <Header />
            {children}
        </>
    )
}