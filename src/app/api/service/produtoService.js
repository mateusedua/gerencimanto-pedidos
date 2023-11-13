import produtoData from "../data/produtoData"

const getProduto = async () => {
    const result = await produtoData.getProdutos()

    if (result.length > 0) {
        return Response.json(result)
    }

    return Response.json({ status: 204 })
}

export default {
    getProduto
}