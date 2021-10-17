var layers = $('.background');
var gameMovement = false;
function backgroundMoving(state) {
    if (state == true) {
        for (var i = 0; i < layers.length; i++) {
            layers[i].style.animationPlayState = 'running';
            gameMovement = true;
        }
    }else{
        for (var i = 0; i < layers.length; i++) {
            layers[i].style.animationPlayState = 'paused';
            gameMovement = false;
        }
    }
}