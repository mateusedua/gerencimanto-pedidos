import { connect } from "@planetscale/database";
import config from "../infra/database";

const getProdutos = async () => {
    const conn = connect(config)
    const result = await conn.execute(`
        select * from produto
    `)

    return result.rows
}

const insertProduto = async (data) => {
    const conn = connect(config)
    const result = await conn.execute(`
        insert into produto(nome_produto,preco_produto,quantidade_produto,unidade)
        values(?,?,?,?)
    `, [data.nome, data.preco, data.quantidade, data.unidade])

    return result.rowsAffected
}

export default {
    getProdutos,
    insertProduto
}