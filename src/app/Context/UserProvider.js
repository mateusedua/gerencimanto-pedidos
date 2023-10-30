
import { createContext, useContext } from "react";
import request from "../utils/request";

export const userContext = createContext({})


export const UserProvider = ({ children }) => {

    const login = async (data) => {
        const result = await request('/api/user', 'POST', data)

        return result.status
    }

    return (
        <userContext.Provider value={{
            login
        }}>
            {children}
        </userContext.Provider>
    )
}

export const useUserProvider = () => {
    return useContext(userContext)
}