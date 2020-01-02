"use strict";

function Frame() {
  this.roll = [];
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
  return this.roll.length < 2;
}

Frame.prototype.isStrike = function() {
  return this.roll[0] === 10;
}

Frame.prototype.isSpare = function() {
  return this.getFrameScore() === 10;
}
// 
// if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
//   module.exports = Frame;
// }
