
var allowedInput = false;
var instructions = $('#instructions');

$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      if (allowedInput) {
        player.addClass('standing-right');
        player.removeClass('walk');
        backgroundMoving(false);
        enemiesMoving(false);
      }
      break;

    case 38: // up
      if (allowedInput) {
        allowedInput = false;
        jump();
      }
      break;

    case 39: // right
      if (allowedInput) {
        instructions.addClass('erase-instructions');
        player.addClass('walk');
        player.removeClass('standing-right');
        backgroundMoving(true);
        enemiesMoving(true);
      }
      break;

    case 40: // down
      if (allowedInput) {
        allowedInput = false;
        slide();
      }
      break;

    default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});
