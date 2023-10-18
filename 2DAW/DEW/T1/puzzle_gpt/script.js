// Tamaño de la cuadrícula (en este caso, 3x3)
const numRows = 3;
const numCols = 3;

// Crea el rompecabezas
function createPuzzle() {
  const container = document.getElementById('puzzle-container');
  const tileCount = numRows * numCols;

  for (let i = 1; i < tileCount; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.textContent = i;
    container.appendChild(tile);
    tile.addEventListener('click', () => tryMove(tile));
  }

  // Agrega la última pieza vacía
  const emptyTile = document.createElement('div');
  emptyTile.classList.add('tile', 'empty');
  container.appendChild(emptyTile);
}

// Intercambia dos baldosas
function swapTiles(tile1, tile2) {
  const tempText = tile1.textContent;
  tile1.textContent = tile2.textContent;
  tile2.textContent = tempText;
}

// Intenta mover una baldosa
function tryMove(tile) {
  const emptyTile = document.querySelector('.empty');
  if (isAdjacent(tile, emptyTile)) {
    swapTiles(tile, emptyTile);
  }
}

// Verifica si dos baldosas son adyacentes
function isAdjacent(tile1, tile2) {
  const tile1Index = Array.from(tile1.parentElement.children).indexOf(tile1);
  const tile2Index = Array.from(tile2.parentElement.children).indexOf(tile2);

  return (
    Math.abs(tile1Index - tile2Index) === 1 ||
    Math.abs(tile1Index - tile2Index) === numCols
  );
}

// Baraja las baldosas
function shufflePuzzle() {
  const tiles = Array.from(document.querySelectorAll('.tile'));
  const emptyTile = document.querySelector('.empty');

  for (let i = 0; i < 1000; i++) {
    const adjacentTiles = tiles.filter((tile) => isAdjacent(tile, emptyTile));
    const randomTile = adjacentTiles[Math.floor(Math.random() * adjacentTiles.length)];
    swapTiles(randomTile, emptyTile);
  }
}

createPuzzle();
document.getElementById('shuffle-button').addEventListener('click', shufflePuzzle);
