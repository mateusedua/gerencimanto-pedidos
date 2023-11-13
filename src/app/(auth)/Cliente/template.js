import Header from "../Header"
import { ClienteProviderS } from "@/provider/clienteProvider"

export default function Template({ children }) {

    return (
        <>
            <title>Cliente</title>
            <ClienteProviderS>
                <Header />
                {children}
            </ClienteProviderS>
        </>
    )
}