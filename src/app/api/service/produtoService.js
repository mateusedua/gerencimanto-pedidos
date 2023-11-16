import produtoData from "../data/produtoData"

const getProduto = async () => {
    const result = await produtoData.getProdutos()

    if (result.length > 0) {
        return Response.json(result)
    }

    return Response.json({ status: 204 })
}

const insertProduto = async (data) => {

    data.preco = data.preco.replace('.', '').replace(',', '.')

    const result = await produtoData.insertProduto(data)

    if (result > 0) {
        return Response.json({ status: 201 })
    }

    return Response.json({ status: 400 })
}

export default {
    getProduto,
    insertProduto
}