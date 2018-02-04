import React from 'react';
import GridSquare from './GridSquare.jsx';
import ResetButton from './ResetButton.jsx';

class TicTacToe extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			black: 0,
			white: 0,
			sideToMove: 0
		};
		this.findWinner = this.findWinner.bind(this);
		this.createButton = this.createButton.bind(this);
	}

	findWinner()
	{
		let blackP = this.state.black;
		let whiteP = this.state.white;
		if((blackP & 7) == 7 || (blackP & 56) == 56 || (blackP & 448) == 448 || (blackP & 73) == 73 || (blackP & 146) == 146 || (blackP & 292) == 292 || (blackP & 273) == 273 || (blackP & 84) == 84)
			return 0;
		else if((whiteP & 7) == 7 || (whiteP & 56) == 56 || (whiteP & 448) == 448 || (whiteP & 73) == 73 || (whiteP & 146) == 146 || (whiteP & 292) == 292 || (whiteP & 273) == 273 || (whiteP & 84) == 84)
			return 1;
		else
			return -1;
	}

	createButton(position)
	{
		let buttonText = " ";
		let clickFunction = () =>
		{
			if(this.state.sideToMove == 0)
				this.setState(
				{
					black: this.state.black | (1 << position),
					white: this.state.white,
					sideToMove: 1
				});
			else
				this.setState(
				{
					black: this.state.black,
					white: this.state.white | (1 << position),
					sideToMove: 0
				});
		}
		if((this.state.black & (1 << position)) > 0)
		{
			buttonText = "X";
			clickFunction = (() => {});
		}
		else if((this.state.white & (1 << position)) > 0)
		{
			buttonText = "O";
			clickFunction = (() => {});
		}
		else if(this.findWinner() != -1)
			clickFunction = (() => {});
		return(
			<GridSquare
				text={buttonText}
				callback={clickFunction}
			></GridSquare>
		)
	}

	render()
	{
		let stateText = "";
		if(this.findWinner() == 0)
			stateText = "Game over: X wins!";
		else if(this.findWinner() == 1)
			stateText = "Game over: O wins!";
		else if((this.state.black | this.state.white) == 511)
			stateText = "Tie game!";
		else
		{
			if(this.state.sideToMove == 0)
				stateText = "X's move";
			else
				stateText = "O's move";
		}
		return(
			<div>
				<ResetButton callback={() => this.setState({black: 0, white: 0, sideToMove: 0})}>
				</ResetButton>
				<div>
					{this.createButton(0)}
					{this.createButton(1)}
					{this.createButton(2)}
				</div>
				<div>
					{this.createButton(3)}
					{this.createButton(4)}
					{this.createButton(5)}
				</div>
				<div>
					{this.createButton(6)}
					{this.createButton(7)}
					{this.createButton(8)}
				</div>
				{stateText}
			</div>
		)
	}
}

export default TicTacToe;