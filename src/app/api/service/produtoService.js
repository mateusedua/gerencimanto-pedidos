import produtoData from "../data/produtoData"

const getProduto = async () => {
    const result = await produtoData.getProdutos()
    return result
}

export default {
    getProduto
}