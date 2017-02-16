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

window.generateRows = function(n) {
  var results = []; //if n === 0, results should equal [[]];
  var choices = _.range(n);
  
  var permutations = function(n, boardSoFar) {
 
    if (n === 0) {
      results.push(boardSoFar);
      return;
    }

    for (var i = 0; i < choices.length; i++) {
      var currentChoice = choices[i];
      permutations(n - 1, boardSoFar.concat(currentChoice));
    }
  
  };
  permutations(n, []);
  return results;
};

window.generateBoards = function(n) {
  //generate an empty board using 'n' size
   
  //for each of the rows returned from generateRows function
  return generateRows(n).map(function(rowItem) {
    var tempBoard = makeEmptyMatrix(n);
    rowItem.forEach(function(index, row) {
      tempBoard[row][index] = 1;
    });
    return tempBoard;
  });
    //create the appropriate board with the pieces placed accordingly
  //push each board to results or use map
  //return results
};



window.findNRooksSolution = function(n) {
  
  var possible = generateBoards(n);
  var results = [];

  for (var i = 0; i < possible.length; i++) {
    console.log('possible[i]', possible[i]);
    tempBoard = new Board(possible[i]);
    console.log('tempboard', tempBoard);
    if (!tempBoard.hasAnyRooksConflicts()) {
      console.log('this is solution', possible[i]);
      // results.push(possible[i]);
      // return possible[i];
      break;
    }
  }
  // .forEach(function(grid) {
  //   var board = new Board(grid);
  //   if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
  //     return grid;
  //   }
  // });
  // console.log(n);
  // console.log('generateBoards(n) logs: ', generateBoards(n));

  //console.log('Solutions is: ', solutions);
  // var solution = solutions[0]; //fixme

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;
  // return results[0];
  // return results[0];
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
