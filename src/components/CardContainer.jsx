import React from 'react'
import Cards from './Cards'

import useGlobalState from '../state/global'

export default function CardContainer() {
	const [peliculas] = useGlobalState('busqueda')
	return (
		<div className="container mx-auto px-2 md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 grid-cols-auto pb-24">
			{peliculas.map((data, index) => <Cards key={index} data={data} />)}
		</div>
	)
}