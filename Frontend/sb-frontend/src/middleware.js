import { NextResponse } from 'next/server'

export default function middleware(req) {
    let verify = req.cookies.get('session')
    let url = req.url

    if (verify == undefined && url.includes('/account')) {
        return NextResponse.redirect("http://localhost:3000/")
    }

    if (verify !== undefined && url == "http://localhost:3000/") {
        return NextResponse.redirect("http://localhost:3000/account")
    }
        
}