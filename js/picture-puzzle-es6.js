'use strict';

let tiles = [];

let solved = false;

class Tile {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }

  setPosition (x, y) {
    if (x === undefined) { x = this.x }
    if (y === undefined) { y = this.y }
    var div = $(this.id);
    div.removeClass(`pos${this.y}${this.x}`);
    div.addClass(`pos${y}${x}`);
    this.x = x;
    this.y = y;
  }
}

tiles = [
  new Tile('#tile_1', 0, 0),
  new Tile('#tile_2', 1, 0),
  new Tile('#tile_3', 2, 0),
  new Tile('#tile_4', 3, 0),
  new Tile('#tile_5', 0, 1),
  new Tile('#tile_6', 1, 1),
  new Tile('#tile_7', 2, 1),
  new Tile('#tile_8', 3, 1),
  new Tile('#tile_9', 0, 2),
  new Tile('#tile_10', 1, 2),
  new Tile('#tile_11', 2, 2),
  new Tile('#tile_12', 3, 2),
  new Tile('#tile_13', 0, 3),
  new Tile('#tile_14', 1, 3),
  new Tile('#tile_15', 2, 3),
  new Tile('#tile_16', 3, 3),
]
let solution = [];

for (var i = 0; i < tiles.length; i++) {
  solution.push({
    x: tiles[i].x,
    y: tiles[i].y
  })
  tiles[i].setPosition();
}

function isSwapable(tile) {
  var blank = tiles[15];
  if (Math.abs(tile.x - blank.x) + Math.abs(tile.y - blank.y) === 1) return true;
  return false;
}

function swap(tile) {
  if (isSwapable(tile)) {
    var blank = tiles[15];
    var x1 = tile.x;
    var y1 = tile.y;

    var x2 = blank.x;
    var y2 = blank.y;

    tile.setPosition(x2, y2);
    blank.setPosition(x1, y1);
    return true;
  }
  return false;
}

function isSolved() {
  for(var i = 0; i < tiles.length; i++) {
    console.log(tiles[i].x, tiles[i].y);
    console.log(solution[i].x, solution[i].y);
    console.log('---');
    if (tiles[i].x     != solution[i].x
        || tiles[i].y  != solution[i].y) {
      return false;
    }
  }
  return true;
};

function shuffle() {
  let count = 0;
  while(count++ < 1000) {
    setTimeout(function() {
      var i = Math.floor(Math.random()*15);
      swap(tiles[i]);  
    }, count * 5);
  }
}

shuffle();

$('div.tile').on("click", function () {
  if (solved) {
    return true;
  }
  var i = this.id.indexOf('_');
  var tileIndex = Number(this.id.slice(i+1))-1;
  swap(tiles[tileIndex]);
  if (isSolved()) {
    $('h2#solved').html('You did it!');
    solved = true;
    $('div#tile_16').addClass('solved');
    $('button#shuffle').show();
  } else {
    $('h2#solved').html('');
  }
});

$('button#shuffle').on("click", function () {
  shuffle();
  $('h2#solved').html('');
  solved = false;
  $('div#tile_16').removeClass('solved');
  $('button#shuffle').hide();

})
