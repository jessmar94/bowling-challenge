"use strict";

function Scorecard() {
  this.frameCount = 0;
  this.bowlCount = 0;
  this.totalScore = 0;
  this.frames = [];
  this.initFrames = [];
}

Scorecard.prototype.initFrames = function() {
  for (var i = 0; i < 10; i++) {
    // this.frames.push(new this.frames)
    this.frames[i] = []
  }
}

Scorecard.prototype.getTotalScore = function() {
  for (var i = 0; i < this.frames.length; i++)
  this.totalScore += this.frames[i]
  return this.totalScore;
}

Scorecard.prototype.bowl = function(knockedPins) {
  this.bowlCount += 1
  this.frames.push(knockedPins)
  // something to push every 2nd bowl into new array within array
}
