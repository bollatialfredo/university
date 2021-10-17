var enemyLog1 = $('#enemy-log1');
var enemyLog2 = $('#enemy-log2');
var enemyBat = $('#enemy-bat');
var enemies = $('.enemy');
enemies.push($('.enemy-anim')[0]);
var bat = $('#enemy-bat');

function enemiesMoving(state) {
  if (state == true) {
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].style.animationPlayState = 'running';
    }
  }else{
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].style.animationPlayState = 'paused';
    }
    bat[0].style.animationPlayState = 'running';
    if(player.dead && !player.deathByLog){
      bat.addClass('bat-only-fly');
    }
  }
}

function initEnemy(enemy) {
  enemy.counted = false;
  enemy[0].addEventListener("animationend", function () {
    addPoint(enemy);
  });
  if (enemy[0].offsetLeft == 736 || enemy[0].offsetLeft == 902) {

    enemy.removeClass('enemy');
    enemy.removeClass('enemy-anim');
    setTimeout(function(){
      if (enemy.selector == '#enemy-bat') {
          enemy.addClass('enemy-anim');
      }
      enemy.addClass('enemy');
    },100)
  }
}

function enemiesIntervals() {
  setTimeout(function () {
    initEnemy(enemyBat);
  }, getRandomInt(7000, 9000));

  setTimeout(function () {
    initEnemy(enemyLog2);
  }, getRandomInt(4000, 6000));

  setTimeout(function () {
    initEnemy(enemyLog1);
  }, getRandomInt(1000, 3000));
}

initEnemy(enemyBat);
