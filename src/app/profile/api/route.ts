import { NextRequest } from "next/server";
import { headers,cookies } from "next/headers";

export async function GET(
    request: NextRequest,
){
    // const requestHeader = new Headers(request.headers);
    // console.log(requestHeader.get("Authorization"))
    const headerList = await headers();
    console.log(headerList.get("Authorization"));

    const theme = request.cookies.get("theme");
    console.log(theme);

    const cookieStore = await cookies();
    cookieStore.set("resultPerPage", "20");

    return new Response("<h1>Profile API Data</h1>",{
        headers: {
            "Content-Type": "text/html",
            "Set-Cookies": "theme=dark"
        }
    })
}