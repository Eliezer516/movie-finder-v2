import React from 'react'
import useGlobalState from '../state/global'

export default function Footer() {

	const [pagina, setPagina] = useGlobalState('pagina')

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	return (
		<div>
			<div id="footer" className="fixed bottom-0 left-0 md:opacity-1 md:pointer-events-auto p-4 bg-indigo-200 w-full flex justify-center items-center transition">
				<button className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:ring-purple-300 mx-4" onClick={() => pagina == 1 ? setPagina(1) : setPagina(pagina - 1)} >Menos Resultados</button>
				<button className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:ring-purple-300 mx-4" onClick={() => scrollTop()} >Arriba</button>
				<button className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:ring-purple-300 mx-4" onClick={() => setPagina(pagina + 1)} >Mas Resultados</button>
			</div>
			<div id="footer" className="p-4 bg-indigo-200 w-full flex justify-center items-center transition">
				<button className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:ring-purple-300 mx-4" onClick={() => pagina == 1 ? setPagina(1) : setPagina(pagina - 1)} >Menos Resultados</button>
				<button className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:ring-purple-300 mx-4" onClick={() => scrollTop()} >Arriba</button>
				<button className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:ring-purple-300 mx-4" onClick={() => setPagina(pagina + 1)} >Mas Resultados</button>
			</div>
		</div>
	)
}