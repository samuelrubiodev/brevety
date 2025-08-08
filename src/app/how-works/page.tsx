export default function HowWorksPage() {
  return (
    <div className="flex-1 bg-gradient-to-br from-cyan-200 via-blue-200 to-slate-100">
      <h1 className="text-5xl font-bold text-center mt-10 text-slate-700">Como funciona</h1>
      <div className="flex justify-evenly items-center mt-10">
        <div className="bg-white h-70 w-70 border-2 rounded-3xl shadow-sm text-shadow-lg">
          <p className="mt-5 text-center font-black text-4xl text-cyan-700">Paso 1</p>
          <div className="flex justify-center items-center h-2/3 mr-3 ml-3 text-stone-600">
            <p className="text-center bg-blue-100 rounded-2xl p-2">Ingresa la URL de una noticia o artículo público y envíala para procesarla.</p>
          </div>
        </div>
        <div className="bg-white h-70 w-70 border-2 rounded-3xl shadow-sm text-shadow-lg">
          <p className="mt-5 text-center font-black text-4xl text-cyan-700">Paso 2</p>
          <div className="flex justify-center items-center h-2/3 mr-3 ml-3 text-stone-600">
            <p className="text-center ml-2 bg-blue-100 rounded-2xl p-2">Obtenemos el texto del artículo (sin menús ni anuncios) y lo enviamos a un modelo de IA para identificar la información clave.</p>
          </div>
        </div>
        <div className="bg-white h-70 w-70 border-2 rounded-3xl shadow-sm text-shadow-lg">
          <p className="mt-5 text-center font-black text-4xl text-cyan-700">Paso 3</p>
          <div className="flex justify-center items-center h-2/3 mr-3 ml-3 text-stone-600">
            <p className="text-center bg-blue-100 rounded-2xl p-2">Te mostramos el título y un resumen breve (3-5 frases). Cuando es posible, también identificamos autor, fecha y fuente.</p>
          </div>
        </div>
      </div>
    </div>
  );
}