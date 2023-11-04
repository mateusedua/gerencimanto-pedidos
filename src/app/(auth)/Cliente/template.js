import Header from "../Header"
import { getToken } from "@/Context/cookies"
import { redirect } from "next/navigation"
import { ClienteProviderS } from "@/provider/clienteProvider"

export default function Template({ children }) {

    if (getToken() === undefined) redirect('/login')

    return (
        <>
            <ClienteProviderS>
                <Header />
                {children}
            </ClienteProviderS>
        </>
    )
}