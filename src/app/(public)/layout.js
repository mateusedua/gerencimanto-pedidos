import { redirect } from "next/navigation"
import { getToken } from "../../Context/cookies"

export default function RootLayout({ children }) {


    if (getToken() !== undefined) redirect('/')


    return (
        <>
            {children}

        </>
    )
}