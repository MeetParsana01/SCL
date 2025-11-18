import { NextResponse } from "next/server";
import { encode } from "tiktoken";
import { generateFormats } from "@/lib/tokenizer";

export async function POST(req) {
  const { input } = await req.json();
  const outputs = generateFormats(input);
  const tokens = {};
  for (const key in outputs) tokens[key] = encode(outputs[key]).length;
  return NextResponse.json({ outputs, tokens });
}
