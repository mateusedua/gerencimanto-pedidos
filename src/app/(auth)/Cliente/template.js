'use client'


import Header from "../Header"
import { getToken } from "@/app/Context/cookies"
import { redirect } from "next/navigation"
import { ClienteProvider } from "@/app/Context/ClienteProvider"

export default function Template({ children }) {

    if (getToken() === undefined) redirect('/login')

    return (
        <>
            <head>
                <title>Cliente</title>
            </head>
            <ClienteProvider>
                <Header />
                {children}
            </ClienteProvider>
        </>
    )
}