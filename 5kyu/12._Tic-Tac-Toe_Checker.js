/*
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

1 if "X" won,
2 if "O" won,
-1 if the board is not yet finished AND no one has won yet (there are empty spots),
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/

function isSolved(board) {

    for(let i = 0; i < 3; i++) {
        if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != 0) {
            return board[i][0];
        }

        if(board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != 0) {
            return board[0][i];
        }
    }

    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != 0) {
        return board[0][0];
    }

    if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != 0) {
        return board[0][2];
    }

    for(let m = 0; m < 3; m++) {
        for(let n = 0; n < 3; n++) {
            if(board[m][n] == 0) {
                return -1;
            }
        }
    }

    return 0;
}

console.log(isSolved([[0, 0, 1], [0, 1, 2], [2, 1, 0]])); // -1 (not finished)
console.log(isSolved([[1, 2, 1], [2, 1, 2], [2, 1, 1]])); // 1 (X won)
console.log(isSolved([[2, 1, 2], [1, 2, 1], [1, 2, 2]])); // 2 (O won)
console.log(isSolved([
    [1, 2, 1], 
    [1, 2, 2], 
    [2, 1, 1]
])); // 0 (cat's game)
console.log(isSolved([[0, 0, 0], [0, 0, 0], [0, 0, 0]])); // -1 (not finished)
