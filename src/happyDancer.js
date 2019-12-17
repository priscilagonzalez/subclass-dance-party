
var HappyDancer = function(top, left, name) {
  Dancer.call(this, top, left);
  this.$node = $('<img class="happy Dancer" src="./gifs/giphy2.gif">');
};

HappyDancer.prototype = Object.create(HappyDancer.prototype);
HappyDancer.prototype.constructor = HappyDancer;