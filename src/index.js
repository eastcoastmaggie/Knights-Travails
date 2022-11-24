const knight = require("./knight");
const board = new Array(8).fill(0).map(() => new Array(8).fill(0));


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
            moves.push([x - 1, y + 2]);
        }
        if (x - 1 >= 0 && y - 2 >= 0){
            moves.push([x - 1, y - 2]);
        }
        moveList[x][y] = moves;  
    }
}

function knightsMove(root, endPos){
    let triedOptions = [root];
    let queue = []; 
    
    function equals (a, b){
        return JSON.stringify(a) === JSON.stringify(b);
    }
    function findShortestPath(root, endPos){
        let path = [];

            if (equals(root, endPos)){
                path.push(root);
                return path;
            }
            let possibleMoves = moveList[root[0]][root[1]];
            if ((JSON.stringify(possibleMoves).includes(JSON.stringify(endPos)))){
                path.push(root);
                path.push(endPos);
                return path;
            }
            for (const move of possibleMoves){
                if (!(JSON.stringify(queue).includes(JSON.stringify(move))) && !(JSON.stringify(triedOptions).includes(JSON.stringify(move)))){
                    queue.push(move);
                    triedOptions.push(move);
                }  
            }
            if(queue.length > 0){
                let nextNode = queue.shift();
                path = findShortestPath(nextNode, endPos);
               // if the nextNode root is child of root unshift 
               if(possibleMoves.includes(path[0])){ 
                    path.unshift((root));
               }

            }
            return path;
    
    }
    return findShortestPath(root, endPos);
}

console.log(knightsMove([0,0], [1,2]));
console.log(knightsMove([0,0], [3,3]));
console.log(knightsMove([3,3], [0,0]));
console.log(knightsMove([5,7], [0,3]));
