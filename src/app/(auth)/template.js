import Header from "./Header"
import { getToken } from "../Context/cookies"
import { redirect } from "next/navigation"
import { Container } from "@chakra-ui/react"

export default function Template({ children }) {

    if (getToken() === undefined) redirect('/login')

    return (
        <Container maxW={'100%'}>
            <Header />
            {children}
        </Container>
    )
}