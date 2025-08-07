import Button from "@/components/button";

export default function Header() {
  return <div className="bg-slate-200 w-full h-20 flex items-center">
    <h1 className="text-black text- m-10 text-4xl">Brevety</h1>
    <h2 className="text-black text-xl">Inicio</h2>
    <h2 className="text-black text-xl m-10">Como funciona</h2>
    <h2 className="text-black text-xl m-10">API</h2>
    <Button title="Ingresar" />
  </div>
}