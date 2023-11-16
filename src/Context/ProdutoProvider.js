'use client'

import { createContext, useContext, useEffect, useState } from "react";
import request from "@/utils/request";

export const produtoContext = createContext({})

export const ProdutoProvider = ({ children }) => {

    const [produtos, setProdutos] = useState([])
    const [selectProdutos, setSelectProdutos] = useState([])

    const handleProdutos = async () => {
        const result = await request('/api/produto', 'GET')
        setProdutos(result.data)
        setSelectProdutos(result.data)
    }

    const handleCadastroProduto = async (data) => {
        const result = await request('/api/produto/cadastroProduto', 'POST', data)
        return result
    }

    useEffect(() => {
        const fecthData = async () => {
            await handleProdutos()
        }
        fecthData()
    }, [])

    return <produtoContext.Provider value={{
        selectProdutos,
        setSelectProdutos,
        produtos,
        handleCadastroProduto
    }}>
        {children}
    </produtoContext.Provider>
}

export const useProdutoProvider = () => {
    return useContext(produtoContext)
}