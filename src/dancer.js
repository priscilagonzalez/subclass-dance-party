// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetween = timeBetweenSteps; // dancer waits a certain amount of time
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step(); //
  this.setPosition(top, left); // sets position of dancer
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote

// When the step method is invoked, it runs a setTimeout function
Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // if `this` is stated, it is referenced to Dancer.prototype.step
  var puppy = this;
  /*
   * When setTimeout is run, it is placed in a queue within the browser to be executed.
   * A `this` keyword within the function within setTimeout doesn't have access to the
   * Dancer.prototype when it is invoked; rather, the `this` keyword now points to window
   */
  setTimeout(function() {
    puppy.step();
    console.log('hello');
  }, this.timeBetween);
};

// When the setPosition method is invoked, it sets the position to some random default
// point within the body
Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};
