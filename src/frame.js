"use strict";

function Frame() {
  // this.bowlCount = 0;
  // this.totalScore = 0;
  this.roll = [];
  // this.initFrames = [];
}

Frame.prototype.getRolls = function() {
  return this.roll
}

Frame.prototype.knockedPins = function(score) {
  if (this.frameOver()) {
  this.roll.push(score)
  }
}

Frame.prototype.frameOver = function() {
  if (this.roll.length >= 2) {
    return false
  } else {
    return true
  }
}
