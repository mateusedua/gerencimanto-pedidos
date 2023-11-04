'use client'

import { createContext, useContext } from "react";
import request from "@/utils/request";

export const produtoContext = createContext({})

export const ProdutoProvider = ({ children }) => {


    const handleProdutos = async () => {
        const result = await request('/api')
    }

    return <produtoContext.Provider value={{

    }}>
        {children}
    </produtoContext.Provider>
}

export const useProdutoProvider = () => {
    return useContext(produtoContext)
}