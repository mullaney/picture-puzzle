'use strict';

$('footer').html('');

var tiles = [];

class Tile {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }

  setPosition (x, y) {
    console.log('THIS:', this.id, this.x, this.y);
    if (x === undefined) { x = this.x }
    if (y === undefined) { y = this.y }
    console.log('ARGS:', x, y);
    var div = $(this.id);
    var oldClass = `pos${this.y}${this.x}`;
    console.log('OLD:', oldClass);
    var newClass = `pos${y}${x}`;
    console.log('NEW:', newClass);
    div.removeClass(oldClass);
    div.addClass(newClass);
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

for (var i = 0; i < tiles.length; i++) {
  tiles[i].setPosition();
}

function swap(tile1, tile2) {
  var x1 = tile1.x;
  var y1 = tile1.y;

  var x2 = tile2.x;
  var y2 = tile2.y;

  tile1.setPosition(x2, y2);
  tile2.setPosition(x1, y1);
}
