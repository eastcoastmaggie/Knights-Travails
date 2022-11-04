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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7OztBQ3RCQSxlQUFlLG1CQUFPLENBQUMsaUNBQVU7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQixrQkFBa0I7QUFDbEMsb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2tuaWdodC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qga25pZ2h0UHJvdG8gPSB7XG4gICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICAgIH0sXG4gICAgc2V0UG9zaXRpb24ocG9zKXtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvcztcbiAgICB9XG59O1xuXG5jb25zdCBrbmlnaHQgPSAoc3RhcnRQb3NpdGlvbikgPT4ge1xuICAgIGxldCBrbmlnaHQgPSBPYmplY3QuY3JlYXRlKGtuaWdodFByb3RvLCB7XG4gICAgICAgIHBvc2l0aW9uIDogeyBcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHN0YXJ0UG9zaXRpb25cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBrbmlnaHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtuaWdodDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiY29uc3Qga25pZ2h0ID0gcmVxdWlyZShcIi4va25pZ2h0XCIpO1xuY29uc3QgYm9hcmQgPSBuZXcgQXJyYXkoOCkuZmlsbCgwKS5tYXAoKCkgPT4gbmV3IEFycmF5KDgpLmZpbGwoMCkpO1xubGV0IHRyaWVkT3B0aW9ucyA9IFtdO1xuXG4vLyBkZXRlcm1pbmUgYWRqYWNlbmN5IGxpc3RcbmxldCBtb3ZlTGlzdCA9IG5ldyBBcnJheSg4KS5maWxsKDApLm1hcCgoKSA9PiBuZXcgQXJyYXkoOCkpO1xuXG5mb3IgKGxldCB4ID0gMDsgeCA8IGJvYXJkLmxlbmd0aDsgeCsrKXtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGJvYXJkW3hdLmxlbmd0aDsgeSsrKXtcbiAgICAgICAgbGV0IG1vdmVzID1bXTtcbiAgICAgICAgaWYgKHggKyAyIDwgYm9hcmQubGVuZ3RoICYmIHkgKyAxIDwgYm9hcmRbeF0ubGVuZ3RoKXtcbiAgICAgICAgICAgIG1vdmVzLnB1c2goW3ggKyAyLCB5ICsgMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4ICsgMiA8IGJvYXJkLmxlbmd0aCAmJiB5IC0gMSA+PSAwKXtcbiAgICAgICAgICAgIG1vdmVzLnB1c2goW3ggKyAyLCB5IC0gMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4IC0gMiA+PSAwICYmIHkgKyAxIDwgYm9hcmRbeF0ubGVuZ3RoKXtcbiAgICAgICAgICAgIG1vdmVzLnB1c2goW3ggLSAyLCB5ICsgMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4IC0gMiA+PSAwICYmIHkgLSAxID49IDApe1xuICAgICAgICAgICAgbW92ZXMucHVzaChbeCAtIDIsIHkgLSAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggKyAxIDwgYm9hcmQubGVuZ3RoICYmIHkgKyAyIDwgYm9hcmRbeF0ubGVuZ3RoKXtcbiAgICAgICAgICAgIG1vdmVzLnB1c2goW3ggKyAxLCB5ICsgMl0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4ICsgMSA8IGJvYXJkLmxlbmd0aCAmJiB5IC0gMiA+PSAwKXtcbiAgICAgICAgICAgIG1vdmVzLnB1c2goW3ggKyAxLCB5IC0gMl0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4IC0gMSA+PSAwICYmIHkgKyAyIDwgYm9hcmRbeF0ubGVuZ3RoKXtcbiAgICAgICAgICAgIG1vdmVzLnB1c2goW3ggKyAxLCB5ICsgMl0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4IC0gMSA+PSAwICYmIHkgLSAyID49IDApe1xuICAgICAgICAgICAgbW92ZXMucHVzaChbeCArIDEsIHkgLSAyXSk7XG4gICAgICAgIH1cbiAgICAgICAgbW92ZUxpc3RbeF1beV0gPSBtb3ZlczsgIFxuICAgIH1cbn1cblxuICAgIGNvbnN0IGVxdWFscyA9IChhLCBiKSA9PiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYik7XG4gICAgZnVuY3Rpb24gZmluZFNob3J0ZXN0UGF0aChzdGFydFBvcywgZW5kUG9zKXtcbiAgICAgICAgbGV0IHBhdGggPSBbc3RhcnRQb3NdO1xuICAgICAgICBsZXQgcXVldWUgPSBbc3RhcnRQb3NdOyAgICAgIFxuXG4gICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAoZXF1YWxzIChzdGFydFBvcywgZW5kUG9zKSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VuZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IG1vdmVMaXN0W3N0YXJ0UG9zWzBdXVtzdGFydFBvc1sxXV07XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1vdmUgb2YgcG9zc2libGVNb3Zlcyl7XG4gICAgICAgICAgICAgICAgaWYgKGVxdWFscyhtb3ZlLCBlbmRQb3MpKXtcbiAgICAgICAgICAgICAgICAgICAgcGF0aC5wdXNoKG1vdmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlmICghcXVldWUuaW5jbHVkZXMobW92ZSkgJiYgIXRyaWVkT3B0aW9ucy5pbmNsdWRlcyhtb3ZlKSl7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRyaWVkT3B0aW9ucy5wdXNoKG1vdmUpO1xuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXRoID0gcGF0aC5jb25jYXQoZmluZFNob3J0ZXN0UGF0aChxdWV1ZS5zaGlmdCgpLCBlbmRQb3MpKTtcbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9XG4gICAgfVxuXG5jb25zb2xlLmxvZyhmaW5kU2hvcnRlc3RQYXRoKFswLDBdLCBbNSwyXSkpO1xuY29uc3QgcGllY2UgPSBrbmlnaHQoWzAsMV0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==