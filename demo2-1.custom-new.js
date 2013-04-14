function Point(x, y)
{
  this.x = x;
  this.y = y;
}

Point.prototype.getDist = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}

var a = new Point(3, 4);

console.log(a.getDist())

function newer(F, args) {
  var o = Object.create(F.prototype);
  F.apply(o, args);
  return o;
}

var b = newer(Point, [3,4]);

console.log(b.getDist())