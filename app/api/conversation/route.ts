import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const {messages} = body;
        
        if(!userId) new NextResponse("Unauthorized",{ status: 401 });
        if(!messages) new NextResponse("No messages found",{ status: 400 });
        if(!openai.apiKey)  new NextResponse("OpenAI API Key not Found",{ status: 500 });

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages
        })

        return NextResponse.json(response.choices[0].message);
    } catch (err) {
        console.log(err)
        return new NextResponse
    }
}