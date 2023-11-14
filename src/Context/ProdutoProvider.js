'use client'

import { createContext, useContext, useEffect } from "react";
import request from "@/utils/request";

export const produtoContext = createContext({})

export const ProdutoProvider = ({ children }) => {


    const handleProdutos = async () => {
        const result = await request('/api/produto', 'GET')
        console.log(result.data)
    }

    useEffect(() => {
        const fecthData = async () => {
            await handleProdutos()
        }
        fecthData()
    }, [])

    return <produtoContext.Provider value={{

    }}>
        {children}
    </produtoContext.Provider>
}

export const useProdutoProvider = () => {
    return useContext(produtoContext)
}