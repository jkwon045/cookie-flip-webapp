import React, { useState } from "react";
import Board from "./Board";

const num_squares = 16;

const Game = () =>{
	const [boards, setBoards] = useState([Array(num_squares).fill(null)]);
	const [count, setCount] = useState(0);
	const [xIsNext, setXisNext] = useState(true);
	
	const xO = xIsNext ? "X" : "O";


	const handleClick = (i) =>{
	


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