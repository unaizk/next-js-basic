import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()
 export function GET() {
    return Response.json({
        name : "Unais",
        email : "unais5676@gmail.com"
    })
}

export async function POST(req : NextRequest) {

    const body = await req.json();
    console.log(body);
    
    const user = await client.user.create({
        data : {
            username : body.username,
            password : body.password
        }
    });
     console.log(user.id);
     
    return Response.json({
        message : "Signed up"
    })
}
