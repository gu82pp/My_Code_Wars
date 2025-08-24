/*
Take a look at wiki description of Connect Four game:
https://en.wikipedia.org/wiki/Connect_Four

The grid is 6 row by 7 columns, those being named from A to G.
You will receive a list of strings showing the order of the pieces which dropped in columns:

  piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]
The list may contain up to 42 moves and shows the order the players are playing.
The first player who connects four items of the same color is the winner.
You should return "Yellow", "Red" or "Draw" accordingly.
*/

function whoIsWinner(piecesPositionList) {

    let board = [[], [], [], [], [], [], []];
    let columnIndexes = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };

    
    function checkWinner() {
        
        for (c = 0; c < 4; c++) {
            for (r = 0; r < 6; r++) {
                if (board[c][r] && board[c][r] === board[c + 1][r] && board[c][r] === board[c + 2][r] && board[c][r] === board[c + 3][r]) {
                    return board[c][r];
                }
            }
        }
        
        for (let c = 0; c < 7; c++) {
            for (let r = 0; r < 3; r++) {
                if (board[c][r] && board[c][r] === board[c][r + 1] && board[c][r] === board[c][r + 2] && board[c][r] === board[c][r + 3]) {
                    return board[c][r];
                }
            }
        }
        
        for (let c = 0; c < 4; c++) {
            for (let r = 0; r < 3; r++) {
                if (board[c][r] && board[c][r] === board[c + 1][r + 1] && board[c][r] === board[c + 2][r + 2] && board[c][r] === board[c + 3][r + 3]) {
                    return board[c][r];
                }
            }
        }
        
        for (let c = 0; c < 4; c++) {
            for (let r = 3; r < 6; r++) {
                if (board[c][r] && board[c][r] === board[c + 1][r - 1] && board[c][r] === board[c + 2][r - 2] && board[c][r] === board[c + 3][r - 3]) {
                    return board[c][r];
                }
            }
        }

        return "Draw";
    }

    for (position of piecesPositionList) {
        const [letter, color] = position.split("_");
        board[columnIndexes[letter]].push(color);
        result = checkWinner();

        if(result !== "Draw") {
            return result;
        }
    }

    return "Draw";
}

console.log(whoIsWinner(["C_Yellow",
    "E_Red",
    "G_Yellow",
    "B_Red",
    "D_Yellow",
    "B_Red",
    "B_Yellow",
    "G_Red",
    "C_Yellow",
    "C_Red",
    "D_Yellow",
    "F_Red",
    "E_Yellow",
    "A_Red",
    "A_Yellow",
    "G_Red",
    "A_Yellow",
    "F_Red",
    "F_Yellow",
    "D_Red",
    "B_Yellow",
    "E_Red",
    "D_Yellow",
    "A_Red",
    "G_Yellow",
    "D_Red",
    "D_Yellow",
    "C_Red"]), "Yellow"
);

console.log(whoIsWinner(["A_Yellow",
    "B_Red",
    "B_Yellow",
    "C_Red",
    "G_Yellow",
    "C_Red",
    "C_Yellow",
    "D_Red",
    "G_Yellow",
    "D_Red",
    "G_Yellow",
    "D_Red",
    "F_Yellow",
    "E_Red",
    "D_Yellow"]), "Red")

console.log(whoIsWinner(["A_Red",
    "B_Yellow",
    "A_Red",
    "E_Yellow",
    "F_Red",
    "G_Yellow"]), "Draw");


