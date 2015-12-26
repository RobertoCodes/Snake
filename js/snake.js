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
