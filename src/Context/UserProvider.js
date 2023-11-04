'use client'

import { createContext, useContext, useState } from "react";
import request from "@/utils/request";
import { setCookies } from "./cookies";

export const userContext = createContext({})


export const UserProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)

    const login = async (data) => {
        setIsLoading(true)
        const result = await request('/api/user', 'POST', data)
        setIsLoading(false)

        if (result.status === 200) {
            const token = result.data.token
            const nome = result.data.data.nome_usuario
            const idUser = result.data.data.id_usuario

            setCookies(token, nome, idUser)
        }

        return result.status
    }

    return (
        <userContext.Provider value={{
            login,
            isLoading
        }}>
            {children}
        </userContext.Provider>
    )
}

export const useUserProvider = () => {
    return useContext(userContext)
}