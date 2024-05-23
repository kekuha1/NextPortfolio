import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
import { NextResponse } from "next/server";

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_APIKEY;
const model = process.env.AZURE_OPENAI_MODEL;

export async function GET(req) {
  const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

  const messages = [
    {
        role: 'system',
        content: 'You are a helpful assistant.'
    }
  ];

  return NextResponse.json({
    message: "Hello World",
  });
}
