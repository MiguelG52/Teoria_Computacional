import { LenguajeProvider } from "./context/lenguajeProvider"
import EvaluarPalabras from "./views/EvaluarPalabras"
import GeneraLenguajes from "./views/GeneraLenguajes"
import LeerAlfabeto from "./views/LeerAlfabeto"
import Regex from "./views/Regex"


function App() {
  return (
    <LenguajeProvider>
      <main className="container mx-auto mt-5 xl:mt-6 p-3 md:flex md:justify-center">
        <div className="md:w-2/3 lg:w-2/5  text-white p-2 rounded-lg">
          <h1 className="font-bold">Alfabetos, lenguajes y expresiones regulares</h1>
          <p className="p-l-5 pb-10">Practica 1</p>
          <div className="flex flex-col gap-10">
            <LeerAlfabeto/>
            <EvaluarPalabras/>
            <GeneraLenguajes/>
            <Regex/>
          </div>
        </div>
      </main>
    </LenguajeProvider>
      
    
  )
}

export default App
