import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function RootLayout({ children }) {

    const { value } = cookies().get('token')
    if (value) redirect('/')

    return (
        <>
            {children}

        </>
    )
}