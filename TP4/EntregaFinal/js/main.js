var game;
var points = 0;
var gameElement = $('#game-background');
var preGame = $('#pre-game');
var btnPlay = $('#play-btn');
var infoPanel = $('#info-panel');
var pointsElement = $('#points');
var blackCover = $('#black-cover');
var afterGame = $('#after-game');
var btnPlayAgain = $('#play-again-btn');

afterGame.hide();
blackCover.hide();
gameElement.hide();
preGame.show();
infoPanel.hide();

btnPlay.click(function(){
  gameElement.show();
  preGame.hide();
  infoPanel.show();
  allowedInput = true;
});

btnPlayAgain.click(function(){
  afterGame.removeClass('after-game-fade-in');
  blackCover.removeClass('black-cover-fade-in');
  afterGame.hide();
  blackCover.hide();
  restartGame();
});

function update() {
  setInterval(function () {
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].id == 'enemy-bat') {
        if (enemies[i].offsetLeft > 210 && enemies[i].offsetLeft < 240 && player[0].offsetTop != 380 && !player.dead) {
          allowedInput = false;
          die();
        }
      } else {
        if (enemies[i].offsetLeft > 80 && enemies[i].offsetLeft < 115 && player[0].offsetTop >= 300 && !player.dead) {
          player.deathByLog = true;
          allowedInput = false;
          die();
        }
      }
    }
  }, 50);
}

function addPoint (enemy) {
  if (!enemy.counted && !player.dead) {
    if (enemy.selector == '#enemy-bat') {
      points += 25;
    }else{
      points += 15;
    }
    enemy.counted = true;
    pointsElement.removeClass('pointsAnim');
    setTimeout(function(){
      pointsElement.addClass('pointsAnim');
    }, 10)
    pointsElement[0].innerHTML = points;
  }
}

function restartGame() {
  location.reload();
}

function stopGame() {
    clearInterval(game);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  game = setInterval(function() {
    enemiesIntervals();
  }, 5000)
}

startGame();

update();
