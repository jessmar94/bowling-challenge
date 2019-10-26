"use strict";

function Scorecard() {
  this.frames = { 1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[] };
  this.frameKeyNumber = 1
  this.totalScore = 0
}

Scorecard.prototype.initFrames = function(frame) {
  this.frames[this.frameKeyNumber] = frame;
  this.frameKeyNumber++;
}

Scorecard.prototype.getTotalScore = function() {
  for (var i = 1; i < 11; i++) {
    this.totalScore += this.frames[i].frameScore;
  }
  // add in Strike Bonus calculation
  return this.totalScore
}

Scorecard.prototype.getFrameScore = function(key) {
  return this.frameScore
}

Scorecard.prototype.calcStrikeBonus = function() {
  for (var i = 1; i < 9; i++){
    return 10 + (this.frames[i + 1].frameScore || 0)
      + (this.frames[i + 2].frameScore || 0);
    if (this.frames[i + 1].strike === true) {
      return 20 + (this.frames[i + 2].frameScore || 0)
    }
  }
}
