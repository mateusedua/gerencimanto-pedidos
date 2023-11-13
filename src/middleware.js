import { NextResponse } from "next/server";
import { getToken } from "./Context/cookies";


export function middleware(request) {

    const { nextUrl } = request

    if (getToken() === undefined) return NextResponse.redirect(new URL('/login', request.url))
    if (nextUrl.pathname === '/Login') return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: [
        '/',
        '/Produto',
        '/Cliente',
        '/Login',
        '/api/produto'
    ]
}