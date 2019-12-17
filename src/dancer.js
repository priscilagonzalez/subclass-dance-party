// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top; // dancer's vertical alignment
  this.left = left; // dancer's horizontal alignment
  this.timeBetween = timeBetweenSteps; // dancer waits a certain amount of time

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote

// When the step method is invoked, it runs a setTimeout function
Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  //dancer.step
  var currentThis = this;
  console.log('current this', currentThis);
  setTimeout(function() {
    currentThis.step();
  }, this.timeBetween);
};

// this one sets the position to some random default point within the body

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};

