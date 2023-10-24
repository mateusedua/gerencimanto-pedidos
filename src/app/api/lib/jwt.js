import { sign, verify } from 'jsonwebtoken'

export const encodeData = (data) => {
    return sign(data, process.env.KEY)
}

export const decodeToken = (token) => {
    return verify(token, process.env.KEY)
}