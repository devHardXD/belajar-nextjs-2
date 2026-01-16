import { Comments } from "../data";

export async function GET(
    _request:Request, 
    { params }: {  params: Promise<{id: string}>}
){
    const { id } = await params;
    const comment = Comments.find((Comments) => Comments.id === parseInt(id));
    return Response.json(comment);
}