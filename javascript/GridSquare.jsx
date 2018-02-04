import React from 'react'

const GridSquare = ({text, callback}) =>
{
	return(
		<button onClick={() => callback()} style=
		{{
			display: "inline-block",
			width: "50px",
			height: "50px"
		}}>
			{text}
		</button>
	)
}

export default GridSquare
