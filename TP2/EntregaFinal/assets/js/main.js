var contJugar = document.getElementById('formJugar');
var ctx = document.getElementById("canvas").getContext("2d");
var canvas = ctx.canvas;
canvas.height = 400;
canvas.width = 1300;
ctx.lineWidth = 9;
ctx.fillStyle = fillColor;
ctx.strokeStyle = strokeColor;
var margin = 20;
var strokeColor = 'rgba(37, 28, 66, 0.5)';
var strokeSocketColor = 'rgba(37, 28, 66, 1)';
var strokeSocketColorDone = 'rgba(0, 255, 0, 1)';
var fillColor = "rgba(255, 0, 0, 1)";
var fillSocketColor = "rgba(255, 255, 255, 0.2)";
var dragging = false;
var x = 0;
var y = 0;
var detectX = 0;
var detectY = 0;
var firstSelected = false;
var figSelected = null;
var figurasArray = [];
var socketsArray = [];
var figAmount;
var socketDifficulty;
var animatedImg = document.getElementById('gps_ring');
var gameEnd = false;
var gameStart;

var sec = 0;

function pad ( val ) {
    return val > 9 ? val : "0" + val;
}
setInterval( function(){
    if (gameStart && !gameEnd) {
    var s = pad(++sec%60);
    document.getElementById("seconds").innerHTML= ':' + s;
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}
}, 1000);


function drawImage(){
  var image1 = new Image();
  image1.src = "assets/donald.jpg";

  image1.onload = function(){

      ctx.drawImage(this, 0, 0);

      //var imageData = ctx.getImageData(0, 0, this.width, this.height);
      // console.log(imageData);
      // for (var x = 0; x < imageData.widt; x++) {
      //   for (var y = 0; y < imageData.height; y++) {
      //     setPixel(imageData, x, y, 255, 255, 255, 255);
      //   }
      // }
}
}


document.getElementById('botonJugar').onclick = function() {
    click3.load();
    click3.play();
    contJugar.style.display = 'none';
    canvas.style.display = 'block';
    var select = document.getElementById('usr');
    var difficulty = select.options[select.selectedIndex].text;
    switch (difficulty) {
        case 'Facil':
        figAmount = 3;
        socketDifficulty = 20;
        break;
        case 'Normal':
        figAmount = 5;
        socketDifficulty = 10;
        break;
        case 'Dificil':
        figAmount = 9;
        socketDifficulty = 5;
        break;
        default:

    }
    init();
};

function restart() {
  document.getElementById('win-screen').style.display = 'none';
    sec = 0;
    gameEnd = false;
    gameStart = undefined;
    document.getElementById("seconds").innerHTML = '';
    document.getElementById("minutes").innerHTML = '';
    animatedImg.className = "darken";
    click3.load();
    click3.play();
    contJugar.style.display = 'block';
    canvas.style.display = 'none';
}


function clearBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function init() {
    gameStart = true;
    clearBackground();
    socketsArray = [];
    figurasArray = [];
    var triangulo = new Triangle(40, 100, 70, 100, 'rgba(190, 117, 129, 1)');
    figurasArray.push(triangulo);
    var cuadrado = new Sqare(180, 100, 80, 80, 'rgba(55, 108, 73, 1)');
    figurasArray.push(cuadrado);
    var estrella9 = new Star(340, 65, 30, 45, 9, 'rgba(139, 70, 81, 1)');
    figurasArray.push(estrella9);
    var circulo2 = new Circle(110, 200, 40, 'rgba(148, 135, 74, 1)');
    figurasArray.push(circulo2);
    var rectangulo = new Sqare(230, 220, 50, 100, 'rgba(96, 85, 34, 1)');
    figurasArray.push(rectangulo);
    var estrella6 = new Star(75, 330, 30, 45, 6, 'rgba(153, 197, 168, 1)');
    figurasArray.push(estrella6);
    var rombo = new Romb(130, 360, 60, 70, 'rgba(243, 189, 198, 1)');
    figurasArray.push(rombo);
    var estrella3 = new Star(260, 330, 30, 45, 5, 'rgba(202, 188, 124, 1)');
    figurasArray.push(estrella3);
    var rectangulo2 = new Sqare(330, 380, 100, 50, 'rgba(91, 148, 110, 1)');
    figurasArray.push(rectangulo2);

    var socketTriang = new Socket(500, 350, triangulo);
    socketsArray.push(socketTriang);
    var socketCuadrado = new Socket(1150, 350, cuadrado);
    socketsArray.push(socketCuadrado);
    var socketEstrella2 = new Socket(870, 90, estrella9);
    socketsArray.push(socketEstrella2);
    var socketCirculo2 = new Socket(1040, 200, circulo2);
    socketsArray.push(socketCirculo2);
    var socketRectangulo = new Socket(640, 230, rectangulo);
    socketsArray.push(socketRectangulo);
    var socketEstrella1 = new Socket(550, 90, estrella6);
    socketsArray.push(socketEstrella1);
    var socketRombo = new Socket(1150, 120, rombo);
    socketsArray.push(socketRombo);
    var socketEstrella3 = new Socket(875, 340, estrella3);
    socketsArray.push(socketEstrella3);
    var socketRectangulo2 = new Socket(850, 270, rectangulo2);
    socketsArray.push(socketRectangulo2);

    var auxS = [];
    var auxF = [];
    for (var i = 0; i < figAmount; i++) {
        auxF.push(figurasArray[i]);
        auxS.push(socketsArray[i]);
    }
    figurasArray = auxF;
    socketsArray = auxS;
    drawContext();
    drawFigures();
}
function drawFigures() {
    for (var i = 0; i < figurasArray.length; i++) {
        figurasArray[i].draw(figurasArray[i].x, figurasArray[i].y, false);
    }
}
function drawContext() {
    ctx.fillStyle = 'rgb(227, 229, 203)';
    ctx.fillRect(margin, 0, canvas.width/4-margin + 75, canvas.height);
    ctx.fillStyle = 'rgba(227, 229, 203, 0.5)';
    ctx.fillRect(canvas.width/4 + margin + 75, 0, canvas.width/4 + canvas.width/2-(margin*2), canvas.height);
    for (var i = 0; i < socketsArray.length; i++) {
        socketsArray[i].draw();
    }
}

function checkGameEnded() {
    var gameEnded = true;
    figurasArray.forEach(function (f) {
        if (!f.done) {
            gameEnded = false;
        }
    });
    if (gameEnded) {
        animatedImg.className = "darken gps_ring";
        gameEnd = true;
        document.getElementById('win-screen').style.display = 'block';
        canvas.style.display = 'none';
        win.load();
        win.play();
    }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
