import Header from "./Header"

export default function Template({ children }) {

    return (
        <>
            <title>Pedidos</title>
            <Header />
            {children}
        </>
    )
}