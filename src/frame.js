"use strict";

function Frame() {
  // this.bowlCount = 0;
  // this.totalScore = 0;
  this.roll = [];
  // this.initFrames = [];
}

Frame.prototype.getBowls = function() {
  return this.roll
}

Frame.prototype.bowl = function(knockedPins) {
  if (this.frameOver()) {
  this.roll.push(knockedPins)
  }
}

Frame.prototype.frameOver = function() {
  if (this.frame.length >= 2) {
    return false
  } else {
    return true
  }
}
