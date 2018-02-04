import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './TicTacToe.jsx';

function main()
{
	const element = <TicTacToe></TicTacToe>;
	ReactDOM.render(element, document.getElementById('root'));
}

window.addEventListener('DOMContentLoaded', main)
