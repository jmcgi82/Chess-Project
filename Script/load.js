let board = [];
let lastSelect = "";
let currSelect = "";

let pawn = "";

initialize();

function initialize() {
    loadBoard();
    loadPieces();
    loadListeners();
}

function loadBoard() {
    for (var i = 1; i < 65; i++) {
        for (var f = 1; f < 9; f++) {
            board.push(i.toString() + f.toString())
        }
    }
}

function loadListeners() {
    for (var i = 0; i < 64; i++) {
        document.getElementById(board[i]).addEventListener("click", newSelection);
    }
}

function newSelection(event) {
    if (event.target.innerHTML != "" && currSelect != "") {
        currSelect.classList.remove("selected")
        currSelect = event.target;
        currSelect.classList.add("selected");

        //Possible moves display logic
        possibleMovesLogic();
    } else if (currSelect != "" && event.target.innerHTML == "") {
        event.target.innerHTML = currSelect.innerHTML;
        currSelect.classList.remove("selected");
        currSelect.innerHTML = "";
        currSelect = "";
        
        //gameplay rules and logic
    } else if (event.target.innerHTML != "") {
        if (currSelect == "") {
            currSelect = event.target;
            currSelect.classList.add("selected");
            possibleMovesLogic();
        }
    }

    
}

function loadPieces() {
    document.getElementById(board[0]).innerHTML = "&#9820";
    document.getElementById(board[1]).innerHTML = "&#9821";
    document.getElementById(board[2]).innerHTML = "&#9822";
    document.getElementById(board[3]).innerHTML = "&#9819";
    document.getElementById(board[4]).innerHTML = "&#9818";
    document.getElementById(board[5]).innerHTML = "&#9822";
    document.getElementById(board[6]).innerHTML = "&#9821";
    document.getElementById(board[7]).innerHTML = "&#9820";
    document.getElementById(board[8]).innerHTML = "&#9823";
    document.getElementById(board[9]).innerHTML = "&#9823";
    document.getElementById(board[10]).innerHTML = "&#9823";
    document.getElementById(board[11]).innerHTML = "&#9823";
    document.getElementById(board[12]).innerHTML = "&#9823";
    document.getElementById(board[13]).innerHTML = "&#9823";
    document.getElementById(board[14]).innerHTML = "&#9823";
    document.getElementById(board[15]).innerHTML = "&#9823";

    document.getElementById(board[48]).innerHTML = "&#9817";
    document.getElementById(board[49]).innerHTML = "&#9817";
    document.getElementById(board[50]).innerHTML = "&#9817";
    document.getElementById(board[51]).innerHTML = "&#9817";
    document.getElementById(board[52]).innerHTML = "&#9817";
    document.getElementById(board[53]).innerHTML = "&#9817";
    document.getElementById(board[54]).innerHTML = "&#9817";
    document.getElementById(board[55]).innerHTML = "&#9817";
    document.getElementById(board[56]).innerHTML = "&#9814";
    document.getElementById(board[57]).innerHTML = "&#9815";
    document.getElementById(board[58]).innerHTML = "&#9816";
    document.getElementById(board[59]).innerHTML = "&#9812";
    document.getElementById(board[60]).innerHTML = "&#9813";
    document.getElementById(board[61]).innerHTML = "&#9816";
    document.getElementById(board[62]).innerHTML = "&#9815";
    document.getElementById(board[63]).innerHTML = "&#9814";
}

function possibleMovesLogic() {
    console.log(currSelect.innerHTML);
    console.log(pawn.innerHTML);
    if (currSelect.innerText == "&#9817") {
        
        document.getElementById(currSelect.id.parseInt() - 10).classList.add("possible-moves");
        document.getElementById(currSelect.id.parseInt() - 20).classList.add("possible-moves");
    }
}