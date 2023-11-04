import { connect } from "@planetscale/database";
import config from "../infra/database";

const getProdutos = async () => {
    const conn = connect(config)
    const result = await conn.execute(`
        select * from produto
    `)

    return result.rows
}


export default {
    getProdutos
}