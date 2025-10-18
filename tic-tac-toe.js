"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // Display the squares on the board
    const board = document.getElementById("board");
    var squares = board.children;
    var turn = 0;
    var game_state = [];

    for (const item of squares){
        item.classList.add("square");
        item.addEventListener("click", () =>{
            // item.classList.add("X");
            set_square(item);
            console.log(game_state);
        });
    }

    var set_square = function(item) {
        if (turn % 2 == 0){
            item.innerHTML = 'X';
            item.classList.add('X');
            game_state.push('X');
        }
        else{
            item.innerHTML = 'O';
            item.classList.add('O');
            game_state.push('O');         
        }
        turn++;
    }
});

