function select(fig){
    dragging = true;
    figSelected = fig;
    fig.selected = true;
    firstSelected = true;
    x = fig.x;
    y = fig.y;
    var aux = figurasArray[figurasArray.length - 1];
    var pos = figurasArray.indexOf(fig);
    figurasArray[figurasArray.length - 1] = fig;
    figurasArray[pos] = aux;
}
function switchFillStyles(socket, color, done){
    if (socket) {
        ctx.fillStyle = fillSocketColor;
        ctx.strokeStyle = strokeSocketColor;
        if (done) {
            ctx.strokeStyle = strokeSocketColorDone;
        }
    } else {
        ctx.fillStyle = color;
        ctx.strokeStyle = strokeColor;
    }
}
function circleDetectClickInside(fig) {
    if (!fig.done) {
        var val = Math.sqrt(Math.pow((detectX - fig.x), 2) + Math.pow((detectY - fig.y), 2));
        if (val < fig.radius && !firstSelected) {
            select(fig);
            click.load();
            click.play();
        }
    }
}
function pointsDetectClickInside(fig) {
    if (!fig.done) {
        for (var i = 0, j = fig.puntos.length - 1 ; i < fig.puntos.length; j = i++){
            if (fig.puntos[i].Y > detectY != fig.puntos[j].Y > detectY &&
                detectX < (fig.puntos[j].X - fig.puntos[i].X) *
                (detectY - fig.puntos[i].Y) / (fig.puntos[j].Y - fig.puntos[i].Y) + fig.puntos[i].X) {
                    if (!firstSelected && fig.x < detectX) {
                        select(fig);
                        click.load();
                        click.play();
                    }
                }
            }
        }
    }
