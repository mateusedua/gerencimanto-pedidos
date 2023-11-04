import produtoService from "../service/produtoService"


export async function GET() {
    const result = await produtoService.getProduto()

    return Response.json(result)
}