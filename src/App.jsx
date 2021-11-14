import { useState } from "react";
import Navbar from "./components/Navbar";
import Cards from './components/Cards'
import useGlobalState from './state/global.js'

function App() {

  // const [peliculas, setPeliculas] = useState([])
  const [peliculas] = useGlobalState('busqueda')

  const handleProof = (event) => {
    console.log("hola mundo");
  }

  return (
    <div className="App">
      <Navbar handleProof={handleProof} />
      <div className="container mx-auto px-2 md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 grid-cols-auto">
        {/*{peliculas.map((data, index) => <li key={index}><img src={data.Poster} />{data.Title}</li>)}*/}
        {peliculas.map((data, index) => <Cards key={index} data={data} />)}
      </div>
    </div>
  );
}

export default App;
