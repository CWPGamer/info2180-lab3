"use strict";

window.onload = function(){
    // Display the squares on the board
    var board = document.getElementById("board");
    console.log(board.children);
    for (var i = 0; i < board.children.length; i++){
        board.children[i].className = "square";
    }
}
