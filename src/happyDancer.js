
var HappyDancer = function(top, left) {
  Dancer.call(this, top, left);
  this.$node = $('<img class="happyDancer" src="./gifs/giphy1.gif">');
};

HappyDancer.prototype = Object.create(Dancer.prototype);
HappyDancer.prototype.constructor = HappyDancer;