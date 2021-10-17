var player = $('#player');

function die() {
  allowedInput = false;
  player.dead = true;
  backgroundMoving(false);
  enemiesMoving(false);
  stopGame();
  player.removeClass('slide');
  player.removeClass('walk');
  player.removeClass('jump');
  player.addClass('die');
  player[0].addEventListener("animationend", function () {
    player.addClass('dead');
    player.addClass('erase');
  });
  blackCover.show();
  afterGame.show();
  blackCover.addClass('black-cover-fade-in');
  afterGame.addClass('after-game-fade-in');
}

function jump() {
  player.addClass('jump');
  player[0].addEventListener("animationend", function () {
    if (!player.dead) {
      allowedInput = true;
    }
    player.removeClass('jump');
  });
}

function slide() {
  player.addClass('slide');
  player[0].addEventListener("animationend", function () {
    if (!player.dead) {
      allowedInput = true;
    }
      player.removeClass('slide');
  });
}
