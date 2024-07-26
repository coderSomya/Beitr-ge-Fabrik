import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request){

    const req = await request.json();
    const {title, content} = req;

    const result = await prisma.post.create({
        data: {
            title: title,
            content: content,
            author: {
                create: {
                    name: 'somya'
                }
            },
        }
    })
    return NextResponse.json({data: result})
}