import userData from "../data/userData"
import validData from "@/utils/validData"
import { encodeData } from "../lib/jwt"

const getUserService = async (data) => {

    if (validData(data.email)) return new Response("email not found", { status: 404 })
    if (validData(data.password)) return new Response("password not found", { status: 404 })

    const result = await userData.getUserData(data)

    if (result.length > 0) {
        const token = encodeData(result[0])

        return new Response(
            JSON.stringify({
                token: token,
                data: result[0]
            })
        )
    }

    return new Response("user not found", { status: 404 })

}


export default {
    getUserService
}