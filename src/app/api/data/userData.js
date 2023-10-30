import { connect } from "@planetscale/database"
import config from "../infra/database"

const getUserData = async (data) => {
    const conn = connect(config)
    const result = await conn.execute(`
        select id_usuario,
        nome_usuario
        from usuario
        where email_usuario = ?
        and password_usuario = ?
    `, [data.email, data.password])

    return result.rows
}


export default {
    getUserData
}