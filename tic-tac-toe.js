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
            if (turn % 2 == 0){
                item.classList.remove('O');
                item.classList.add('X');
                item.innerHTML = 'X';
                game_state.push('X');
            }
            else{
                item.classList.remove('X');
                item.classList.add('O');
                item.innerHTML = 'O';
                game_state.push('O');
            }
            turn++;
            console.log(game_state);
        });
        item.addEventListener("mouseover", () =>{
            item.classList.add('hover');
        })
        item.addEventListener("mouseout", () =>{
            item.classList.remove('hover');
        })
    }
});