/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/knight.js":
/*!***********************!*\
  !*** ./src/knight.js ***!
  \***********************/
/***/ ((module) => {

const knightProto = {
    getPosition() {
        return this.position;
    },
    setPosition(pos){
        this.position = pos;
    }
};

const knight = (startPosition) => {
    let knight = Object.create(knightProto, {
        position : { 
            writable: true,
            configurable: true,
            value: startPosition
        }
    });
    return knight;
};

module.exports = knight;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const knight = __webpack_require__(/*! ./knight */ "./src/knight.js");
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7OztBQ3RCQSxlQUFlLG1CQUFPLENBQUMsaUNBQVU7QUFDakM7OztBQUdBO0FBQ0E7O0FBRUEsZ0JBQWdCLGtCQUFrQjtBQUNsQyxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMva25pZ2h0LmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrbmlnaHRQcm90byA9IHtcbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gICAgfSxcbiAgICBzZXRQb3NpdGlvbihwb3Mpe1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zO1xuICAgIH1cbn07XG5cbmNvbnN0IGtuaWdodCA9IChzdGFydFBvc2l0aW9uKSA9PiB7XG4gICAgbGV0IGtuaWdodCA9IE9iamVjdC5jcmVhdGUoa25pZ2h0UHJvdG8sIHtcbiAgICAgICAgcG9zaXRpb24gOiB7IFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogc3RhcnRQb3NpdGlvblxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGtuaWdodDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga25pZ2h0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJjb25zdCBrbmlnaHQgPSByZXF1aXJlKFwiLi9rbmlnaHRcIik7XG5jb25zdCBib2FyZCA9IG5ldyBBcnJheSg4KS5maWxsKDApLm1hcCgoKSA9PiBuZXcgQXJyYXkoOCkuZmlsbCgwKSk7XG5cblxuLy8gZGV0ZXJtaW5lIGFkamFjZW5jeSBsaXN0XG5sZXQgbW92ZUxpc3QgPSBuZXcgQXJyYXkoOCkuZmlsbCgwKS5tYXAoKCkgPT4gbmV3IEFycmF5KDgpKTtcblxuZm9yIChsZXQgeCA9IDA7IHggPCBib2FyZC5sZW5ndGg7IHgrKyl7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBib2FyZFt4XS5sZW5ndGg7IHkrKyl7XG4gICAgICAgIGxldCBtb3ZlcyA9W107XG4gICAgICAgIGlmICh4ICsgMiA8IGJvYXJkLmxlbmd0aCAmJiB5ICsgMSA8IGJvYXJkW3hdLmxlbmd0aCl7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKFt4ICsgMiwgeSArIDFdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCArIDIgPCBib2FyZC5sZW5ndGggJiYgeSAtIDEgPj0gMCl7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKFt4ICsgMiwgeSAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCAtIDIgPj0gMCAmJiB5ICsgMSA8IGJvYXJkW3hdLmxlbmd0aCl7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKFt4IC0gMiwgeSArIDFdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCAtIDIgPj0gMCAmJiB5IC0gMSA+PSAwKXtcbiAgICAgICAgICAgIG1vdmVzLnB1c2goW3ggLSAyLCB5IC0gMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4ICsgMSA8IGJvYXJkLmxlbmd0aCAmJiB5ICsgMiA8IGJvYXJkW3hdLmxlbmd0aCl7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKFt4ICsgMSwgeSArIDJdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCArIDEgPCBib2FyZC5sZW5ndGggJiYgeSAtIDIgPj0gMCl7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKFt4ICsgMSwgeSAtIDJdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCAtIDEgPj0gMCAmJiB5ICsgMiA8IGJvYXJkW3hdLmxlbmd0aCl7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKFt4IC0gMSwgeSArIDJdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCAtIDEgPj0gMCAmJiB5IC0gMiA+PSAwKXtcbiAgICAgICAgICAgIG1vdmVzLnB1c2goW3ggLSAxLCB5IC0gMl0pO1xuICAgICAgICB9XG4gICAgICAgIG1vdmVMaXN0W3hdW3ldID0gbW92ZXM7ICBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGtuaWdodHNNb3ZlKHJvb3QsIGVuZFBvcyl7XG4gICAgbGV0IHRyaWVkT3B0aW9ucyA9IFtyb290XTtcbiAgICBsZXQgcXVldWUgPSBbXTsgXG4gICAgXG4gICAgZnVuY3Rpb24gZXF1YWxzIChhLCBiKXtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmluZFNob3J0ZXN0UGF0aChyb290LCBlbmRQb3Mpe1xuICAgICAgICBsZXQgcGF0aCA9IFtdO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxzKHJvb3QsIGVuZFBvcykpe1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaChyb290KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwb3NzaWJsZU1vdmVzID0gbW92ZUxpc3Rbcm9vdFswXV1bcm9vdFsxXV07XG4gICAgICAgICAgICBpZiAoKEpTT04uc3RyaW5naWZ5KHBvc3NpYmxlTW92ZXMpLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGVuZFBvcykpKSl7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKHJvb3QpO1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaChlbmRQb3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBtb3ZlIG9mIHBvc3NpYmxlTW92ZXMpe1xuICAgICAgICAgICAgICAgIGlmICghKEpTT04uc3RyaW5naWZ5KHF1ZXVlKS5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShtb3ZlKSkpICYmICEoSlNPTi5zdHJpbmdpZnkodHJpZWRPcHRpb25zKS5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShtb3ZlKSkpKXtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUucHVzaChtb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgdHJpZWRPcHRpb25zLnB1c2gobW92ZSk7XG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihxdWV1ZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dE5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBmaW5kU2hvcnRlc3RQYXRoKG5leHROb2RlLCBlbmRQb3MpO1xuICAgICAgICAgICAgICAgLy8gaWYgdGhlIG5leHROb2RlIHJvb3QgaXMgY2hpbGQgb2Ygcm9vdCB1bnNoaWZ0IFxuICAgICAgICAgICAgICAgaWYocG9zc2libGVNb3Zlcy5pbmNsdWRlcyhwYXRoWzBdKSl7IFxuICAgICAgICAgICAgICAgICAgICBwYXRoLnVuc2hpZnQoKHJvb3QpKTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgXG4gICAgfVxuICAgIHJldHVybiBmaW5kU2hvcnRlc3RQYXRoKHJvb3QsIGVuZFBvcyk7XG59XG5cbmNvbnNvbGUubG9nKGtuaWdodHNNb3ZlKFswLDBdLCBbMSwyXSkpO1xuY29uc29sZS5sb2coa25pZ2h0c01vdmUoWzAsMF0sIFszLDNdKSk7XG5jb25zb2xlLmxvZyhrbmlnaHRzTW92ZShbMywzXSwgWzAsMF0pKTtcbmNvbnNvbGUubG9nKGtuaWdodHNNb3ZlKFs1LDddLCBbMCwzXSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9