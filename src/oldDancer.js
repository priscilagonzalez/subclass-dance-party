
var OldDancer = function(top, left) {
  Dancer.call(this, top, left);
  this.$node = $('<img class="oldDancer" src="./gifs/giphy5.gif">');
};

OldDancer.prototype = Object.create(Dancer.prototype);
OldDancer.prototype.constructor = OldDancer;