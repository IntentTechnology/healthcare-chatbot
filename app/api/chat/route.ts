import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30; // Allow streaming responses up to 30 seconds

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: openai('gpt-4-turbo'),
    messages,
    systemPrompt: "You are a helpful healthcare assistant. Provide accurate and helpful information about general health topics. Do not provide specific medical advice or diagnoses.",
  });
  return result.toDataStreamResponse();
}

