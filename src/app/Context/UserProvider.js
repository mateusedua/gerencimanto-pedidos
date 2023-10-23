import { createContext, useContext } from "react";


export const userContext = createContext({})


export const UserProvider = ({ children }) => {

    const login = (data) => {

    }

    return (
        <userContext.Provider value={{

        }}>
            {children}
        </userContext.Provider>
    )
}

export const useUserProvider = () => {
    return useContext(userContext)
}