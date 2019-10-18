"use strict";

function Scorecard() {
  this.frameCount = 0;
  this.bowlCount = 0;
  this.totalScore = 0;
  this.frameScore = [];
}

Scorecard.prototype.getTotalScore = function() {
  for (var i = 0; i < this.frameScore.length; i++)
  this.totalScore += this.frameScore[i]
  return this.totalScore;
}

Scorecard.prototype.bowl = function(knockedPins) {
  this.bowlCount += 1
  this.frameScore.push(knockedPins)
}

//
//
// var s = 0;
// for(var i=0; i<myArray.length; i++)
//     s += myArray[i];
