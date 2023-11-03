import { createContext, useContext } from "react";



export const produtoContext = createContext({})

export const ProdutoProvider = ({ children }) => {


    return <produtoContext.Provider value={{

    }}>
        {children}
    </produtoContext.Provider>
}

export const useProdutoProvider = () => {
    return useContext(produtoContext)
}