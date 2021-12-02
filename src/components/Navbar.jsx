import { useState, useEffect } from "react";
import useGlobalState from '../state/global.js'


export default function Navbar({handleProof}) {
  const [pelicula, setPelicula] = useState("")
  const [tipo, setTipo] = useState("")

  // ESTADO GLOBAL
  const [busqueda, setBusqueda] = useGlobalState('busqueda')
  const [pagina] = useGlobalState('pagina')



  useEffect(() => {
    const buscarPelicula = async () => {
        try {
          const peticion = await fetch(
            `http://www.omdbapi.com/?s=${pelicula}&type=${tipo}&page=${pagina}&apikey=422350ff`
          );
          const json = await peticion.json();
          const resultado = await json.Search;
          console.log(resultado);
          resultado === undefined ? setBusqueda([]) : setBusqueda(resultado)
        } catch (err) {
          console.error(err);
        }
    };

    buscarPelicula();
  }, [pelicula, tipo, pagina])


  return (
    <nav id="navbar" className="transition w-full text-center md:text-left p-6 flex flex-col md:flex-row mb-6 bg-indigo-200 shadow-lg">
      <h2 className="text-2xl mr-6 mb-2 md:mb-0">Buscador de peliculas</h2>
      <form className="flex justify-center flex-col md:flex-row" onSubmit={(e) => e.preventDefault()}>
        <input className="mr-4 p-2 transition focus:outline-none focus:ring focus:ring-indigo-500 rounded-md" type="text" value={pelicula} onChange={(e) => setPelicula(e.target.value)} />
        <div className="mt-2 flex justify-center align-center">
          <div className="bg-gray-200 rounded-lg">
            <div className="inline-flex rounded-lg">
              <input className="input-radio" hidden type="radio" name="tipo" id="movie" value="movie" defaultChecked onChange={(e) => setTipo(e.target.value)} />
              <label className="radio text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75" htmlFor="movie">Pelicula</label>  
            </div>
            <div className="inline-flex rounded-lg">
              <input className="input-radio" hidden type="radio" name="tipo" id="serie" value="series" onChange={(e) => setTipo(e.target.value)} />
              <label className="radio text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75" htmlFor="serie">Serie</label>
            </div>
            <div className="inline-flex rounded-lg">
              <input className="input-radio" hidden type="radio" name="tipo" id="juego" value="game" onChange={(e) => setTipo(e.target.value)} />
              <label className="radio text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75" htmlFor="juego">Juego</label>
            </div>
          </div>
        </div>
      </form>
    </nav>
  );
}
