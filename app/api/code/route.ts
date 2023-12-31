import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: any = {
  role: "system",
  content:
    "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanation.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) new NextResponse("Unauthorized", { status: 401 });
    if (!messages) new NextResponse("No messages found", { status: 400 });
    if (!openai.apiKey)
      return new NextResponse("OpenAI API Key not Found", { status: 500 });

    const freeTrial = await checkApiLimit();
    if (!freeTrial)
      return new NextResponse("Free Trial has been expired", { status: 403 });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    await increaseApiLimit();

    return NextResponse.json(response.choices[0].message);
  } catch (err) {
    console.log(err);
    return new NextResponse();
  }
}
