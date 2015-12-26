var Coord = function (x,y) {
  this.posX = x;
  this.posY = y;
};

Coord.prototype.isEqual = function (coord) {
  return (coord.posX == this.posX) && (coord.posY == this.posY);
};

Coord.prototype.plus = function (dir) {
  switch (dir) {
    case "N":
    return new Coord(this.posX - 1, this.posY);
    break;
    case "S":
    return new Coord(this.posX + 1, this.posY);
    break;
    case "E":
    return new Coord(this.posX, this.posY + 1);
    break;
    case "W":
    return new Coord(this.posX, this.posY - 1);
    break;
  }
};

var Snake = function () {
  this.dir = "N";
  this.segments = [0,0];
}

Snake.prototype.turn = function (dir) {
  if (this.dir == "N" && dir == "S") {
    return;
  } else if (this.dir == "W" && dir == "E") {
    return;
  } else if (this.dir == "E" && dir == "W") {
    return;
  } else if (this.dir == "S" && dir == "N") {
    return;
  } else {
    this.dir = dir;
  }
};

var Board = function (size) {
  this.size = size;
  this.snake = new Snake(this);
  this.food = new Food(this);
};
