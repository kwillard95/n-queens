/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];
  for (var i = 0; i < n; i++) {
    solution[i] = [];
    for (var j = 0; j < n; j++) {
      solution[i][j] = 0;
    }
  }
  for (var i = 0; i < n; i++) {
    solution[i][i] = 1;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solutionCount = 0; //fixme
  var board = new Board({ n: n });

  var recurse = function(row) {
    //make matrix  board.rows()[row]
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.rows()[row][i] = 1;
      if (board.hasAnyRooksConflicts() === false) {
        recurse(row + 1);
      }
      board.rows()[row][i] = 0;
    }
  };
  recurse(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  debugger;
  var solution = new Board({ n: n });
  var x;
  var recurse = function(row) {
    if (row === n) {
      x = solution.rows().map(function(i) {
        var arr = [];
        for ( var j = 0; j < i.length; j++) {
          arr.push(i[j]);
        }
        return arr;
      });
      return;
    }
    for (var i = 0; i < n; i++) {
      solution.rows()[row][i] = 1;
      if (solution.hasAnyQueensConflicts() === false) {
        recurse(row + 1);
      }
      solution.rows()[row][i] = 0;
    }
  };
  recurse(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(x));
  return x;
};



window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({ n: n });

  var recurse = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.rows()[row][i] = 1;
      if (board.hasAnyQueensConflicts() === false) {
        recurse(row + 1);
      }
      board.rows()[row][i] = 0;
    }
  };
  recurse(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

