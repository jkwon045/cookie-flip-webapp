import React, { useState } from "react";
import Board from "./Board";

const num_squares = 64;

const Game = () =>{
	const [boards, setBoards] = useState([Array(num_squares).fill(null)]);
	const [count, setCount] = useState(0);
	const [xIsNext, setXisNext] = useState(true);
	
	const xO = xIsNext ? "X" : "O";


	const handleClick = (i) =>{
		const squares = boards[count];
		if (squares[i] == null /* maybe add function to check for a valid move here */){
			squares[i] = xO;
			setXisNext(!xIsNext); /* Only change player if the previous move shifts a piece */
		}
		console.log(squares);
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

/* A move is only valid if there exists 1 or more pieces adjacent to the placed piece that can be flipped. 
   Pieces are flipped if it is between two opposite color pieces. 

   +/- 8 = row above/ row below
   if location % 8 == 7, then location is rightmost place
   if location % 8 == 0, then location is leftmost place
   top left diagonal, top right diagonal = loc - 9, loc - 7
   bottom left diagonal, bottom right diagonal = loc + 7, loc + 9

   maybe move this into its own separate file later?
   */
function validMove(location, board){
	return true;
}

function pieceExistsBottomLeft(location, board){
	locationToCheck = location;
	return false;
}

function pieceExistsBottomRight(location, board){
	locationToCheck = location;
	return false;
}

function pieceExistsTopLeft(location, board){
	locationToCheck = location;
	return false;
}

function pieceExistsTopRight(location, board){
	locationToCheck = location;
	return false;
}

function pieceExistsAbove(location, board){
	locationToCheck = location;
	if( locationToCheck-8 < 0 ){
		return false;
	}

	while ( locationToCheck > 0 ){
		if( board[locationToCheck] == x0 ){
			return true;
		}
		locationToCheck-=8;
	}
	return false;
}

function pieceExistsBelow(location, board){
	locationToCheck = location;
	if( locationToCheck+8 >= numSquares ){
		return false;
	}

	while ( locationToCheck < numSquares ){
		if( board[locationToCheck] == x0 ){
			return true;
		}
		locationToCheck+=8;
	}
	return false;
}

function pieceExistsLeft(location, board){
	locationToCheck = location;
	if( locationToCheck%8 == 0 ){
		return false;
	}

	while( locationToCheck%8 <= 7 ){
		if( board[locationToCheck] == x0 ){
			return true;
		}
		locationToCheck+=1;
	}

	return false;
}

function pieceExistsRight(location, board){
	locationToCheck = location;
	if(locationToCheck%8 == 7){
		return false;
	}

	while( locationToCheck%8 >= 0 ){
		if( board[locationToCheck] == x0 ){
			return true;
		}
		locationToCheck-=1;
	}

	return false;
}
export default Game;