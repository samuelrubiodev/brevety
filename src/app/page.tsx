"use client";

import Header from "@/components/Header/header";
import Input from "@/components/input";
import Button from "@/components/button";
import { FormEvent } from "react";
import { ArticleData } from "@extractus/article-extractor";

export default function Home() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const res = await fetch('/api/extract', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: form.url.value }),
    });
    const data = await res.json() as ArticleData
    console.log(data);
  }
  
  return (
    <div>
      <Header/>
      <div className="flex justify-center justify-self-center m-10 flex-col">
        <h1 className="text-black text-5xl">Resumen inteligente de artículos en segundos</h1>
        <div className="m-10 flex flex-row justify-center w-full">
          <form onSubmit={handleSubmit}>
            <Input className="w-100" placeHolder="Ingrese url de la noticia"/>
            <Button
              className="justify-center ml-2" 
              title="Resumen rapido"/>
          </form>
        </div>
        <h1 className="text-black text-3xl text-center">Resumen de la noticia</h1>
      </div>
    </div>
  );
}
