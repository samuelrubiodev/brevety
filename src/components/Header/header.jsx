import Button from "@/components/button";
import Link from "next/link";

export default function Header() {
  return <div className="bg-slate-200 w-full h-20 flex items-center">
    <h1 className="text-black text- m-10 text-4xl">Brevety</h1>
    <Link href="/" className="text-black text-xl hover:cursor-pointer hover:bg-blue-300 p-2 rounded-2xl transition-all duration-300">Inicio</Link>
    <Link href="/how-works" className="text-black text-xl m-10 hover:cursor-pointer hover:bg-blue-300 p-2 rounded-2xl transition-all duration-300">Como funciona</Link>
    <Link href="/api" className="text-black text-xl m-10 hover:cursor-pointer hover:bg-blue-300 p-2 rounded-2xl transition-all duration-300">API</Link>
    <Button title="Ingresar" />
  </div>
}