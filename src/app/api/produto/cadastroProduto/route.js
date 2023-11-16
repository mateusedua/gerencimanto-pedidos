import produtoService from "../../service/produtoService"

export async function POST(request) {
    try {
        const data = await request.json()

        const result = await produtoService.insertProduto(data)

        return result
    } catch (err) {
        console.log(err)
    }
}