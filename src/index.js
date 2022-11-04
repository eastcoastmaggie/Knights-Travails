const knight = require("./knight");
const board = new Array(8).fill(0).map(() => new Array(8).fill(0));
let triedOptions = [];

// determine adjacency list
let moveList = new Array(8).fill(0).map(() => new Array(8));

for (let x = 0; x < board.length; x++){
    for (let y = 0; y < board[x].length; y++){
        let moves =[];
        if (x + 2 < board.length && y + 1 < board[x].length){
            moves.push([x + 2, y + 1]);
        }
        if (x + 2 < board.length && y - 1 >= 0){
            moves.push([x + 2, y - 1]);
        }
        if (x - 2 >= 0 && y + 1 < board[x].length){
            moves.push([x - 2, y + 1]);
        }
        if (x - 2 >= 0 && y - 1 >= 0){
            moves.push([x - 2, y - 1]);
        }
        if (x + 1 < board.length && y + 2 < board[x].length){
            moves.push([x + 1, y + 2]);
        }
        if (x + 1 < board.length && y - 2 >= 0){
            moves.push([x + 1, y - 2]);
        }
        if (x - 1 >= 0 && y + 2 < board[x].length){
            moves.push([x + 1, y + 2]);
        }
        if (x - 1 >= 0 && y - 2 >= 0){
            moves.push([x + 1, y - 2]);
        }
        moveList[x][y] = moves;  
    }
}

    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    function findShortestPath(startPos, endPos){
        let path = [startPos];
        let queue = [startPos];      

        if (queue.length > 0){
            queue.shift();
            if (equals (startPos, endPos)){
                console.log('end');
                return path;
            }

            let possibleMoves = moveList[startPos[0]][startPos[1]];
            for (const move of possibleMoves){
                if (equals(move, endPos)){
                    path.push(move);
                    return path;
                } 
                if (!queue.includes(move) && !triedOptions.includes(move)){
                   
                    queue.push(move);
                    triedOptions.push(move);
                }  
            }

            path = path.concat(findShortestPath(queue.shift(), endPos));
            return path;
        }
    }

console.log(findShortestPath([0,0], [5,2]));
const piece = knight([0,1]);