'use client'

import Header from "./Header"

export default function Template({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}