var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="happy Dancer" src="./gifs/giphy2.gif">');
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
};

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

//var oldStep = blinkyDancer.step;

// we inherit methods from Dancer class
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep(); // invoking line 11
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  Dancer.prototype.step.call(this); // `this` references BlinkyDancer
  console.log('this', this);
  this.$node.toggle();
};