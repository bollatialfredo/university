function Socket(paramPosX, paramPosY, figure) {
  this.x = paramPosX;
  this.y = paramPosY;
  this.figure = figure;
}
Socket.prototype.draw = function () {
    ctx.strokeStyle = strokeSocketColor;
  this.figure.draw(this.x, this.y, true);
}
Socket.prototype.checkIfFigureIsInside = function (fig) {
    if (fig === this.figure) {
        if (this.x < fig.x + socketDifficulty && this.x > fig.x - (socketDifficulty * 2) &&
            this.y < fig.y + socketDifficulty && this.y > fig.y - (socketDifficulty * 2)) {
            fig.draw(this.x, this.y, false);
            clearBackground();
            drawContext();
            drawFigures();
            fig.done = true;
            click2.load();
            click2.play();
            checkGameEnded();
        }
    }
};
