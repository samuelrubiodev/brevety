"use client";

import Header from "@/components/Header/header";
import Input from "@/components/input";
import Button from "@/components/button";
import { FormEvent } from "react";
import { SUMMARY_RESPONSE } from "@/env/env";
import { useState } from "react";

export default function Home() {
  const [summary, setSummary] = useState<SUMMARY_RESPONSE | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/extract', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: form.url.value }),
      });

      if (!res.ok) {
        throw new Error('Error al procesar la solicitud');
      }

      const data = await res.json();
      setSummary(data.article as SUMMARY_RESPONSE);
    } catch (error) {
      console.error("Error al obtener el resumen:", error);
      setSummary(null);
    } finally {
      setIsLoading(false);
    }

    const res = await fetch('/api/extract', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: form.url.value }),
    });
    const data = await res.json()
    console.log(data.article as SUMMARY_RESPONSE);
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
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-100 text-black p-10 rounded-lg shadow-md w-1/2 mx-auto">
        {isLoading && <p>Cargando...</p>}
        {summary && (
          <div>
            <h2 className="text-3xl">{summary.title}</h2>
            <p className="text-lg">{summary.summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}
