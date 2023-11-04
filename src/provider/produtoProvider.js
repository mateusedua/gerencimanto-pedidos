'use client'

import { ProdutoProvider } from "@/Context/ProdutoProvider"

export function ProdutoProviderS({ children }) {
    return <ProdutoProvider>{children}</ProdutoProvider>
}