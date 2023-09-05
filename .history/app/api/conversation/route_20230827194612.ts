import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(
    req: Request
) {
    try {

    }catch (err) {
        console.log(err) {
            console.log("[CONVERSATION_ERROR]", err);
            return new NextResponse("Internal Server Error", {status: 500});
        }
    }
}