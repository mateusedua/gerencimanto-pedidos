import Header from "../Header"
import { getToken } from "@/Context/cookies"
import { redirect } from "next/navigation"
import { Container } from "@chakra-ui/react"
import { ProdutoProviderS } from "@/provider/produtoProvider"

export default function Template({ children }) {

    if (getToken() === undefined) redirect('/login')

    return (
        <>
            <Container maxW={'100%'}>
                <ProdutoProviderS>
                    <Header />
                    {children}
                </ProdutoProviderS>
            </Container>
        </>
    )
}