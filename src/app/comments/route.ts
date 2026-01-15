import { Comments } from "./data";

export async function GET(){
    return Response.json(Comments);
}

export async function POST(request: Request){
    const comment = await request.json();
    const newComment= {
        id: Comments.length + 1,
        text: comment.text
    }
    Comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: {"Content-Type" : "application/json"},
        status: 201,
    })
}