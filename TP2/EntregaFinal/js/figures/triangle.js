function Triangle(x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.puntos = [];
    this.selected = false;
    this.done = false;
    this.color = color;
  }

  Triangle.prototype.draw = function (x, y, still) {
    if (!still && !this.done) {
      this.y = y;
      this.x = x;
    }
    this.puntos = [];
    switchFillStyles(still, this.color, this.done);
    ctx.beginPath();
    this.addPunto({X: x, Y: y});
    this.addPunto({X: x + this.width, Y:y});
    this.addPunto({X: x + this.width / 2, Y: y - this.height});
    this.addPunto({X: x, Y: y});
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = fillColor;
  };

  Triangle.prototype.addPunto = function(punto){
    if(this.puntos.length == 0){
      ctx.moveTo(punto.X, punto.Y);
    }else{
      ctx.lineTo(punto.X, punto.Y);
    }
    this.puntos.push(punto);
};

  Triangle.prototype.detectClickInside = function () {
      pointsDetectClickInside(this);
  };
