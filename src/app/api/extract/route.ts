"use server";

import { NextResponse } from "next/server";
import { extract } from '@extractus/article-extractor'
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  console.log("Starting extraction request");
  try {
    const article = await extract(url);
    console.log("Extraction successful:", article);
    return NextResponse.json({ article }, { status: 200 });

  } catch (error) {
    console.error("API extract error:", error); 
    return NextResponse.json({ error: 'No se pudo procesar la URL' }, { status: 500 });
  }
}
