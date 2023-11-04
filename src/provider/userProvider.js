'use client'

import { UserProvider } from "@/Context/UserProvider"

export function UserProviderS({ children }) {
    return <UserProvider>{children}</UserProvider>
}