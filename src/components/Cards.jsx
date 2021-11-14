import React from 'react'

export default function Cards({data}) {

	const {Title, Poster, Type} = data


	return (
		<div className="rounded-md">
			<img src={Poster} alt={Title} className="w-full"/>
			<span>{Title}</span><br />
			<span>{Type}</span>
		</div>
	)
}