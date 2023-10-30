import userService from "../service/userService"



export async function POST(request) {
    const body = await request.json()

    const result = await userService.getUserService(body)

    return result
}