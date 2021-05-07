import React, { useState } from "react";
import Board from "./Board";
import { flipDetection } from "./Detect";

const num_squares = 64;

const Game = () =>{
	const [boards, setBoards] = useState([Array(num_squares).fill(null)]);
	const [count, setCount] = useState(0);
	const [xIsNext, setXisNext] = useState(true);
	
	const xO = xIsNext ? "X" : "O";


	const handleClick = (i) =>{
		const squares = boards[count];
		if(squares[i] !== null){
			return;
		}
		squares[i] = xO;
		//console.log(squares);
		//game logic changing the board
		flipDetection(squares, i);

		setXisNext(!xIsNext);

	};



	return(
		<>
			<Board squares={boards[count]} onClick={handleClick} />
			<div className= "info-wrapper">

				<h3>{true ? "Next Player: " + xO : "test"}</h3>
			</div>
		</>
	);
};

export default Game;