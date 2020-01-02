"use strict";

function Frame() {
  this.roll = [];
  this.strike = false;
  this.spare = false;
}

Frame.prototype.bowl = function(knockedPins) {
  if (knockedPins <= 10 && this.getFrameScore(knockedPins) <= 10 && this.validateFrameLength()) {
    this.roll.push(knockedPins)
  }
  return this.getFrameScore();
}

Frame.prototype.getFrameScore = function() {
  return this.roll.reduce((a, b) => a + b, num)
}

Frame.prototype.validateFrameLength = function() {
  if (this.roll.length >= 2) {
    return false
  } else {
    return true
  }
}

Frame.prototype.isStrike = function() {
  if (this.roll[0] === 10) {
    this.strike = true;
  }
}

Frame.prototype.isSpare = function() {
  if (this.calcFrameScore() === 10) {
    this.spare = true;
  }
}
