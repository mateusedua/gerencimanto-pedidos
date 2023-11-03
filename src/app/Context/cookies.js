'use server'

import { cookies } from 'next/headers'

export const setCookies = (token, nome, id) => {
    cookies().set({
        sameSite: 'lax',
        name: 'token',
        value: token,
        path: '/',
        secure: true
    })
    cookies().set({
        sameSite: 'lax',
        name: 'nome',
        value: nome,
        path: '/',
        secure: true
    })
    cookies().set({
        sameSite: 'lax',
        name: 'idUser',
        value: id,
        path: '/',
        secure: true
    })
}

export const getToken = () => {
    return cookies().get('token')
}

export const getNome = () => {
    return cookies().get('nome')
}

export const getIdUser = () => {
    return cookies().get('idUser')
}