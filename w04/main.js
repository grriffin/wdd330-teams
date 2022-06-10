let xturn = true;

function cellClicked(event) {
  const target = event.target;

  if (occupied(target)) {
    return;
  }

  target.classList.add('occupied');
  if (xturn) {
    target.classList.add('x');
  } else {
    target.classList.add('o');
  }

  // stretch
  checkBoard();
  xturn = !xturn;
}

function occupied(element) {
  return element.className.includes('occupied');
}

/************stretch ************************* */
function reset() {
  xturn = true;
  const cells = document.getElementById('grid').children;
  for(let i = 0; i < cells.length; ++i) {
    cells[i].classList.remove('x');
    cells[i].classList.remove('o');
    cells[i].classList.remove('occupied');
  }
}

function same(x1, x2, x3) {
  return x1 == x2 && x2 == x3;
}

function checkBoard() {
  const cells = document.getElementById('grid').children;
  for (let i = 0; i < 3; ++i) {
    const startCell = i*3;
    // rows
    if (occupied(cells[startCell]) 
      && same(cells[startCell].className, cells[startCell+1].className, cells[startCell+2].className)) {
      if (cells[startCell].className.includes('x')) {
        console.log("x won!");
      } else {
        console.log("o won!");
      }
      break;
    }

    // columns
    if (occupied(cells[i]) &&
        same(cells[i].className, cells[i+3].className, cells[i+6].className)) {
      if (cells[startCell].className.includes('x')) {
        console.log('x won!');
      } else {
        console.log('o won!');
      }
      break;
    }
  }

  // diagonal
  if (occupied(cells[0]) &&
      same(cells[0].className, cells[4].className, cells[8].className)) {
    if (cells[0].className.includes('x')) {
      console.log('x won!');
    } else {
      console.log('o won!');
    }
  }
  
  // diagonal
  if (occupied(cells[2]) &&
      same(cells[2].className, cells[4].className, cells[6].className)) {
    if (cells[2].className.includes('x')) {
      console.log('x won!');
    } else {
      console.log('o won!');
    }
  }  
}

/************ end stretch ************************* */

window.onload = function () {
  const gameBoard = document.getElementById('grid');
  gameBoard.addEventListener('click', cellClicked);
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', reset);
};


