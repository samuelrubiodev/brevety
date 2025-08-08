"use client";

import Input from "@/components/input";
import Button from "@/components/button";
import { FormEvent } from "react";
import { SUMMARY_RESPONSE } from "@/env/env";
import { useState } from "react";
import { OrbitProgress } from "react-loading-indicators";

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
  }
  
  return (
    <main className="flex-1 bg-gradient-to-br from-blue-300 via-violet-200 to-indigo-200 p-10">
      <div className="flex justify-center justify-self-center flex-col">
        <h1 className="text-black text-5xl font-black">Resume articulos con IA en segundos</h1>
        <div className="m-10 flex flex-row justify-center w-full">
          <form onSubmit={handleSubmit}>
            <Input className="w-100" placeHolder="Ingrese la url de la noticia"/>
            <Button
              className="justify-center ml-2 transition-all duration-300" 
              title="Resumen rapido"/>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {isLoading && <OrbitProgress color="blue" size="large" easing="ease-in-out" />}
        {summary && (
          <div className="bg-gray-100 text-black p-10 rounded-lg border-gray-300 shadow-md w-1/2 mx-auto">
            <h2 className="text-3xl mb-5">{summary.title}</h2>
            <p className="text-lg">{summary.summary}</p>
          </div>
        )}
      </div>
    </main>
  );
}
