import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = "1", resolution = "512x512" } = body;

    if (!userId) new NextResponse("Unauthorized", { status: 401 });
    if (!prompt) new NextResponse("No prompt found", { status: 400 });
    if (!amount) new NextResponse("No amount found", { status: 400 });
    if (!resolution) new NextResponse("No resolution found", { status: 400 });
    if (!openai.apiKey)
      new NextResponse("OpenAI API Key not Found", { status: 500 });

    const response = await openai.images.generate({
        prompt,
        n: parseInt(amount , 10),
        size: resolution
    });

    return NextResponse.json(response.data);
  } catch (err) {
    console.log(err);
    return new NextResponse();
  }
}
