'use client'

import Header from "./Header"

export default function Template({ children }) {
    return (
        <>
            <head>
                <title>Início</title>
            </head>
            <Header />
            {children}
        </>
    )
}