'use client'

import Header from "../Header"
import { getToken } from "@/app/Context/cookies"
import { redirect } from "next/navigation"
import { Container } from "@chakra-ui/react"
import { ProdutoProvider } from "@/app/Context/ProdutoProvider"

export default function Template({ children }) {

    if (getToken() === undefined) redirect('/login')

    return (
        <>
            <head>
                <title>Produto</title>
            </head>
            <Container maxW={'100%'}>
                <ProdutoProvider>
                    <Header />
                    {children}
                </ProdutoProvider>
            </Container>
        </>
    )
}