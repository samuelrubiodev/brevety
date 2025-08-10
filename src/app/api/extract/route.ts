"use server";

import { NextResponse } from "next/server";
import { extract } from '@extractus/article-extractor'
import type { NextRequest } from "next/server";
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { generateObject } from "ai";
import { z } from "zod";

import { PROMPT_SYSTEM } from "@/env/env";

const openRouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  console.log("Starting extraction request");
  try {
    const article = await extract(url);
    console.log("Extraction successful:", article);

    const { object } = await generateObject({
      model: openRouter("qwen/qwen3-235b-a22b-thinking-2507"),
      prompt: `Please extract the following fields from the article:\n\n
        Title: ${article?.title}\n\n Content: ${article?.content}\n\n`,
      system: PROMPT_SYSTEM,
      providerOptions: {
        openrouter: {
          provider: {
            order: [
              "parasail/fp8",
              "deepinfra/fp8",
              "cerebras",
              "together"
            ]
          }
        }
      },
      schema: z.object({
        article: z.object({
          title: z.string(),
          author: z.string().nullable(),
          date: z.string().nullable(),
          source: z.string().nullable(),
          summary: z.string(),
        })
      }),
    });
    return NextResponse.json(object, { status: 200 });

  } catch (error) {
    console.error("API extract error:", error); 
    return NextResponse.json({ error: 'No se pudo procesar la URL' }, { status: 500 });
  }
}
