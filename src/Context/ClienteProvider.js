import { createContext, useContext } from "react";



export const clienteContext = createContext({})

export const ClienteProvider = ({ children }) => {

    return (
        <clienteContext.Provider value={{

        }}>
            {children}
        </clienteContext.Provider>
    )
}

export const useClienteProvider = () => {
    return useContext(clienteContext)
}