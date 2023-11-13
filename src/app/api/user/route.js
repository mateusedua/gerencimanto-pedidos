import userService from "../service/userService"



export async function POST(request) {
    try {
        const body = await request.json()

        const result = await userService.getUserService(body)

        return result
    } catch (err) {
        console.log(err)
    }
}