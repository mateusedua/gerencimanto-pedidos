'use client'

import { ClienteProvider } from "@/Context/ClienteProvider"

export function ClienteProviderS({ children }) {
    return <ClienteProvider>{children}</ClienteProvider>
}