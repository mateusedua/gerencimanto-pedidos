import Header from "../Header"
import { Container } from "@chakra-ui/react"
import { ProdutoProviderS } from "@/provider/produtoProvider"

export default function Template({ children }) {

    return (
        <>
            <title>Produto</title>
            <Container maxW={'100%'}>
                <ProdutoProviderS>
                    <Header />
                    {children}
                </ProdutoProviderS>
            </Container>
        </>
    )
}