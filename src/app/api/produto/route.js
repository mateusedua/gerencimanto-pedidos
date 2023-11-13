import produtoService from "../service/produtoService"


export async function GET() {
    try {
        const result = await produtoService.getProduto()
        return result
    } catch (err) {
        console.log(err)
    }
}