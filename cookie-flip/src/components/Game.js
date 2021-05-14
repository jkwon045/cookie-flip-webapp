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
		if (squares[i] === null){
			squares[i] = xO;
			setXisNext(!xIsNext); /* Only change player if the previous move shifts a piece */
		}
		console.log(validMove(i, boards[count], xO));
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
function validMove(location, board, xO){
	console.log("ABOVE : " + pieceExistsAbove(location, board, xO));
	console.log("BELOW : " + pieceExistsBelow(location, board, xO));
	console.log("LEFT : " + pieceExistsLeft(location, board, xO));
	console.log("RIGHT : " + pieceExistsRight(location, board, xO));
	console.log("BOTTOM LEFT : " + pieceExistsBottomLeft(location, board, xO));
	console.log("BOTTOM RIGHT : " + pieceExistsBottomRight(location, board, xO));
	console.log("TOP LEFT : " + pieceExistsTopLeft(location, board, xO));
	console.log("TOP RIGHT : " + pieceExistsTopRight(location, board, xO));
	return pieceExistsAbove(location, board, xO) || pieceExistsBelow(location, board, xO)
			|| pieceExistsLeft(location, board, xO) || pieceExistsRight(location, board, xO)
			|| pieceExistsBottomLeft(location, board, xO) || pieceExistsBottomRight(location, board, xO)
			|| pieceExistsTopLeft(location, board, xO) || pieceExistsTopRight(location, board, xO);
}

function pieceExistsBottomLeft(location, board, xO){
	var locationToCheck = location+7;

	if( board[locationToCheck] === xO ){
		return false;
	}

	if( location%8 === 7 && ( locationToCheck+7 < 0 || locationToCheck < 0 )){
		return false;
	}

	while( locationToCheck%8 !== 0 && locationToCheck < num_squares && board[locationToCheck] !== xO){
		if( board[locationToCheck] === xO && board[locationToCheck] !== null ){
			return true;
		}
		locationToCheck+=7;
	}
	return locationToCheck < num_squares && board[locationToCheck] === xO ;
}

function pieceExistsBottomRight(location, board, xO){
	var locationToCheck = location+9;

	if( board[locationToCheck] === xO ){
		return false;
	}

	if( location%8 === 7 && (locationToCheck+9 < 0 || locationToCheck < 0 )){
		return false;
	}

	while( locationToCheck%8 !== 7 && locationToCheck < num_squares && board[locationToCheck] !== xO ){
		if( board[locationToCheck] === xO ){
			return true;
		}
		locationToCheck+=9;
	}
	return locationToCheck < num_squares && board[locationToCheck] === xO;	
}

function pieceExistsTopLeft(location, board, xO){
	var locationToCheck = location-9;

	if( board[locationToCheck] === xO ){
		return false;
	}
	if( location%8 === 0 && (locationToCheck-9 < 0 || locationToCheck < 0)){
		return false;
	}

	while( locationToCheck%8 !== 0 && locationToCheck >= 0 && board[locationToCheck] !== xO ){
		if( board[locationToCheck] === xO ){
			return true;
		}
		locationToCheck-=9;
	}
	return locationToCheck >= 0 && board[locationToCheck] === xO ;
}

function pieceExistsTopRight(location, board, xO){
	var locationToCheck = location-7;

	if( board[locationToCheck] === xO ){
		return false;
	}

	if( location%8 === 7 && (locationToCheck-7 < 0 || locationToCheck < 0) ){
		return false;
	}

	while( locationToCheck%8 !== 7 && locationToCheck >= 0 && board[locationToCheck] !== xO){
		if( board[locationToCheck] === xO ){
			return true;
		}
		locationToCheck-=7;
	}
	return locationToCheck >= 0 && board[locationToCheck] === xO ;
}

function pieceExistsAbove(location, board, xO){
	var locationToCheck = location-8;
	if( locationToCheck-8 < 0 || locationToCheck < 0 || board[locationToCheck] === xO ){
		return false;
	}

	while ( locationToCheck >= 0 && board[locationToCheck] !== null || board[locationToCheck] === xO ){
		if( board[locationToCheck] === xO ){
			return true;
		}
		locationToCheck-=8;
		console.log(location);
	}
	return false;
}

function pieceExistsBelow(location, board, xO){
	var locationToCheck = location+8;
	if( locationToCheck+8 >= num_squares || locationToCheck >= num_squares || board[locationToCheck] === xO ){
		return false;
	}

	while ( locationToCheck < num_squares && board[locationToCheck] !== null ){
		if( board[locationToCheck] === xO ){
			return true;
		}
		locationToCheck+=8;
	}
	return false;
}

function pieceExistsLeft(location, board, xO){
	var locationToCheck = location - 1;
	if( locationToCheck%8 === 0  || board[locationToCheck] === xO ){
		return false;
	}

	while( locationToCheck%8 >= 0 && board[locationToCheck] !== null ){
		if( board[locationToCheck] === xO ){
			return true;
		}
		locationToCheck-=1;
	}

	return false;
}

function pieceExistsRight(location, board, xO){
	var locationToCheck = location+1;
	if(locationToCheck%8 === 7 || board[locationToCheck] === xO ){
		return false;
	}

	while( locationToCheck%8 !== 0 && board[locationToCheck] !== null ){
		if( board[locationToCheck] === xO ){
			return true;
		}
		locationToCheck+=1;
	}

	return false;
}
export default Game;