function Star(x, y, innerRadius, outerRadius, spikes, color) {
    this.x = x;
    this.y = y;
    this.height = (innerRadius + outerRadius)*2;
    this.width = this.height;
    this.innerRadius = innerRadius;
    this.outerRadius = outerRadius;
    this.radius = innerRadius + outerRadius/3;
    this.spikes = spikes;
    this.center = {};
    this.done = false;
    this.color = color;
}
Star.prototype.draw = function (cx, cy, socket) {
    if (!socket && !this.done) {
        this.y = cy;
        this.x = cx;
        this.center =
        {
            x: this.x - this.width,
            y: this.y
        }
    }
    var rot=Math.PI/2*3;
    var xAux = cx;
    var yAux = cy;
    var step = Math.PI/this.spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - this.outerRadius);
    for(i=0; i < this.spikes; i++){
        xAux = cx + Math.cos(rot) * this.outerRadius;
        yAux = cy + Math.sin(rot) * this.outerRadius;
        ctx.lineTo(xAux, yAux);
        rot += step;
        xAux = cx + Math.cos(rot) * this.innerRadius;
        yAux = cy + Math.sin(rot) * this.innerRadius;
        ctx.lineTo(xAux, yAux);
        rot += step;
    }
    ctx.lineTo(cx, cy - this.outerRadius);
    ctx.closePath();
    switchFillStyles(socket, this.color, this.done);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = fillColor;
};


Star.prototype.detectClickInside = function () {
    circleDetectClickInside(this);
};
