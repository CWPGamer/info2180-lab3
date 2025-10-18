"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // Display the squares on the board
    const board = document.getElementById("board");
    const squares = board.querySelectorAll('div');
    const win_text = document.getElementById('status');
    console.log(squares);
    var turn = 0;
    // var game_state = [];
    var game_state = ['', '', '', '', '', '', '' ,'', ''];
    const win_conditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8] , [0,4,8], [2,4,6]];


    function squares_full() {
        let full = true;
        for (const item of game_state){
            if (item === '')
                full = false;
        }
        return full;
    };
    function squares_empty() {
        let empty = true;
        for (const item of game_state){
            if (item !== '')
                empty = false;
        }
        return empty;
    };

    function check_squares(){
        for (let i = 0; i < win_conditions.length; i++){
            var a = win_conditions[i][0];
            var b = win_conditions[i][1];
            var c = win_conditions[i][2];
            if (game_state[a]!=='' && game_state[a]===game_state[b] && game_state[a]===game_state[c]){
                win_text.innerHTML = `Congratulations! ${game_state[a]} is the Winner!`
                return true;
            }

        }
    }

    // for (const item of squares){
    squares.forEach((item, index) => {
        item.classList.add("square");
        item.addEventListener("click", () =>{
            if (turn % 2 == 0){
                item.classList.remove('O');
                item.classList.add('X');
                item.innerHTML = 'X';
                game_state[index] = 'X';
            }
            else{
                item.classList.remove('X');
                item.classList.add('O');
                item.innerHTML = 'O';
                game_state[index] = 'O';
            }
            if (check_squares()){
                return;
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
    });
});