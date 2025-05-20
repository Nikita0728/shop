import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request:NextRequest){
    const url = request.nextUrl
    const token  = request.cookies.get('access')?.value
    const isAdmin = request.cookies.get('is_admin')?.value === 'true'

    if(url.pathname.startsWith('/adminsite')){
        if(!token){
            return NextResponse.redirect(new URL('/login',request.url))
        }
        if(!isAdmin){
      // Not an admin
      return NextResponse.redirect(new URL('/', request.url))
    }
    }
    return NextResponse.next()
}

export const config = {
  matcher: ['/adminsite/:path*'], // applies middleware to /adminsite and all subroutes
}