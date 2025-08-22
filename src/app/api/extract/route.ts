"use server";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  console.log("Starting extraction request");

  try {
    const response = await fetch(
      process.env.WEBHOOK_N8N_URL || "",
      {
        headers: {
          Authorization: "Bearer " + process.env.WEBHOOK_TOKEN,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          "url": url,
          "language": "es"
        })
      }
    );
    const result = await response.json();

    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error("API extract error:", error); 
    return NextResponse.json({ error: 'No se pudo procesar la URL' }, { status: 500 });
  }
}
