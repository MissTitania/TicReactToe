import React from 'react'

const ResetButton = (callback) =>
{
	return(<button onClick={() => callback()}>Reset Game</button>)
}

export default ResetButton
