canvas.onmousedown = function (e) {
  detectX = e.layerX;
  detectY = e.layerY;
  for (var i = figurasArray.length - 1; i >= 0; i--) {
    if (!firstSelected) {
      figurasArray[i].detectClickInside();
    }
  }
};

canvas.onmousemove = function (e) {
  if (dragging) {
    canvas.style.cursor = "pointer";
    x += e.movementX;
    y += e.movementY;
    clearBackground();
    drawContext();
    figurasArray.forEach(function (fig) {
      if (fig.selected) {
        fig.draw(x, y, false);
      } else {
        fig.draw(fig.x, fig.y, false);
      }
    });
  }
};

canvas.onmouseup = function (e) {
  canvas.style.cursor = "";
  dragging = false;
  figurasArray.forEach(function (fig) {
    if (fig.selected) {
      fig.selected = false;
      socketsArray.forEach(function (socket) {
        socket.checkIfFigureIsInside(fig);
        clearBackground();
        drawContext();
        drawFigures();
      });
    }
  });
  firstSelected = false;
};
