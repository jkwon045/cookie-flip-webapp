function flip(squares, i, dir){
    var step = 0;
    var current = i;
    var symbol = squares[i];
    var arr = [];
    var side = false;

    if(dir == "w"){
        step = 8;
        while(current > 0){
            //if the symbol above is the opposite and not null
            //store the number
            current -= step;
            if(squares[current] != symbol && squares[current] != null){
                if(current > 7){
                    arr.push(current);
				}
                else{
                    arr.splice(0,arr.length);   
				}            
			}
            else if(squares[current] === null){
                //this will hit if we havent reached the same symbol as the current player
                console.log("null");
                arr.splice(0,arr.length);
                return null;
			}
            else if(squares[current] === symbol){
                console.log("same symbol " + squares[current]);
                break;     
			}
		}

	}
    else if(dir == "a"){
        step = 1;
        
        while(!side){
            if(current % 8 == 0){
                side = true;
			}else{
                current -= step;
			}
            
            if(squares[current] != symbol && squares[current] != null){
                if(current % 8 != 0){
                    arr.push(current);
				}
                else{
                    arr.splice(0,arr.length);
				}
                
			}
            else if(squares[current] === null){
                //this will hit if we havent reached the same symbol as the current player
                console.log("null");
                arr.splice(0,arr.length);
                return null;
			}
            else if(squares[current] === symbol){
                console.log("same symbol " + squares[current]);
                break;     
			}
            
		}
	}
    else if(dir == "s"){
        step = 8;
        while(current < 64){
            //if the symbol above is the opposite and not null
            //store the number
            current += step;
            if(squares[current] != symbol && squares[current] != null){
                if(current < 56){
                    arr.push(current);
				}
                else{
                    arr.splice(0,arr.length);   
				}            
			}
            else if(squares[current] === null){
                //this will hit if we havent reached the same symbol as the current player
                console.log("null");
                arr.splice(0,arr.length);
                return null;
			}
            else if(squares[current] === symbol){
                console.log("same symbol " + squares[current]);
                break;     
			}
		}
	}
    else if(dir == "d"){
        step = 1;
        current += step;
        while(!side){
            if(current % 8 == 7){
                side = true;     
			}
            if(squares[current] != symbol && squares[current] != null){
                if(current % 8 != 7){
                    arr.push(current);
				}
                else{
                    arr.splice(0,arr.length);       
				}
            }
            else if(squares[current] === null){
                //this will hit if we havent reached the same symbol as the current player
                console.log("null");
                arr.splice(0,arr.length);
                return null;
			}
            else if(squares[current] === symbol){
                console.log("same symbol " + squares[current]);
                break;     
			}
            current += step;
		}
    }
    else if(dir == "q"){
        step = 9;
        current -= step;
        while(current >= 0){
            
            if(squares[current] != symbol && squares[current] != null){
                if(current > 8){
                    arr.push(current);
				}
                else{
                    arr.splice(0,arr.length);   
				}         
			}
            
            else if(squares[current] === null){
                //this will hit if we havent reached the same symbol as the current player
                console.log("null");
                arr.splice(0,arr.length);
                return null;
			}
            else if(squares[current] === symbol){
                console.log("same symbol " + squares[current]);
                break;     
			} 
            
		    current -= step;
        }
	}
    else if(dir == "e"){
        step = 7;
        current -= step;
        while(current >= 0){
            
            if(squares[current] != symbol && squares[current] != null){
                if(current > 8){
                    arr.push(current);
				}
                else{
                    arr.splice(0,arr.length);   
				}         
			}
            
            else if(squares[current] === null){
                //this will hit if we havent reached the same symbol as the current player
                console.log("null");
                arr.splice(0,arr.length);
                return null;
			}
            else if(squares[current] === symbol){
                console.log("same symbol " + squares[current]);
                break;     
			} 
            
		    current -= step;
        }

	}
    else if(dir == "z"){
        step = 7;
        current += step;
        while(current < 64){
            
            if(squares[current] != symbol && squares[current] != null){
                if(current < 55){
                    arr.push(current);
				}
                else{
                    arr.splice(0,arr.length);   
				}         
			}
            
            else if(squares[current] === null){
                //this will hit if we havent reached the same symbol as the current player
                console.log("null");
                arr.splice(0,arr.length);
                return null;
			}
            else if(squares[current] === symbol){
                console.log("same symbol " + squares[current]);
                break;     
			} 
            
		    current += step;
        }

	}
    else if(dir == "c"){
        step = 9;
        current += step;
        while(current < 63){
            
            if(squares[current] != symbol && squares[current] != null){
                if(current < 55){
                    arr.push(current);
				}
                else{
                    arr.splice(0,arr.length);   
				}         
			}
            
            else if(squares[current] === null){
                //this will hit if we havent reached the same symbol as the current player
                console.log("null");
                arr.splice(0,arr.length);
                return null;
			}
            else if(squares[current] === symbol){
                console.log("same symbol " + squares[current]);
                break;     
			} 
            
		    current += step;
        }
	}
    
    for(var j = 0; j < arr.length; ++j){
        squares[arr[j]] = symbol;
        //console.log(arr[j]);
	}
    



    return null;
};

export function flipDetection(squares, i) {
    console.log(squares);
    console.log(i);

    //on at 8x8 board:
    //Top and Down: +/- 8
    //Diagnoal: +/- 9 | +/- 7
    //Left and Right: +/- 1
  
    //calculate Top/Down
    
    flip(squares, i, 'w');
    flip(squares, i, 'a');
    flip(squares, i, 's');
    flip(squares, i, 'd');
    

    //calculate Diagnoal
    
    flip(squares, i, 'q');    
    flip(squares, i, 'e');     
    flip(squares, i, 'z');
    flip(squares, i, 'c');




  return null;
};
