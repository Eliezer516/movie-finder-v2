import { useState, useEffect } from "react";
import useGlobalState from '../state/global.js'


export default function Navbar({handleProof}) {
  const [pelicula, setPelicula] = useState("")


  const [busqueda, setBusqueda] = useGlobalState('busqueda')

  const buscarPelicula = async (pelicula, tipo) => {
    setPelicula(pelicula)
    
    if (pelicula.length > 3) {
      try {
        const peticion = await fetch(
          `http://www.omdbapi.com/?s=${pelicula}&type=series&apikey=422350ff`
        );
        const json = await peticion.json();
        const resultado = await json.Search;
        console.log(resultado);
        resultado === undefined ? setBusqueda([]) : setBusqueda(resultado)
      } catch (err) {
        console.error(err);
      }
    }
  };


  return (
    <>
      <nav className="w-full p-6 flex mb-6 bg-indigo-200 shadow-lg">
        <h2 className="text-3xl mr-6">Buscador de peliculas</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input className="mr-4 p-2 transition focus:outline-none focus:ring focus:ring-indigo-500 rounded-md" type="text" value={pelicula} onChange={(e) => buscarPelicula(e.target.value)} />
          <input type="radio" name="tipo" id="movie" value="movie" />
          <label htmlFor="movie">Pelicula</label>  
          <input type="radio" name="tipo" id="serie" value="series" />
          <label htmlFor="serie">Serie</label>
        </form>
      </nav>
    </>
  );
}
