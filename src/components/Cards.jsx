import React from 'react'

export default function Cards({data}) {

	const {Title, Poster, Type, Year} = data


	return (
		<div className="rounded-md shadow-lg border">
			<div className="card-header">
				<img src={Poster ? Poster : "https://blogdigital.es/wp-content/uploads/2015/09/imagen-no-encontrada.jpg"} alt={Title} className="w-full"/>
			</div>
			<div className="card-body p-4">
				<h2 className="text-xl text-center font-bold">{Title}</h2>
			</div>
		</div>
	)
}