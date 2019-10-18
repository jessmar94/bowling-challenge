"use strict";

function Scorecard() {
  this.frameCount = 0;
  this.bowlCount = 0;
  this.totalScore = 0;
  this.frameScore = [];
}

Scorecard.prototype.getTotalScore = function() {
  return this.totalScore;
}

Scorecard.prototype.bowl = function(knockedPins) {
  this.bowlCount += 1
  this.frameScore.push(knockedPins)
}
