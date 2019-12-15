"use strict";

function Scorecard() {
  this.frames = { 1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[] };
  this.bonusFrame = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0}
  this.frameNumber = 1;
  this.cumulativeScore = 0;
  this.gameOver = false;
}

Scorecard.prototype.initFrames = function(frame){
  this.frames[this.frameNumber] = frame;
  this.frameNumber++;
}

Scorecard.prototype.getCumulativeScore = function() {
  for (var i = 1; i < 11; i++) {
    this.cumulativeScore += this.frames[i].frameScore;
  }
  return this.cumulativeScore
}

// for first 8 frames
// Scorecard.prototype.calcFrameBonus = function() {
//   for (var i = 1; i < 9; i++) {
//     if (this.frames[i].strike) {
//       this.bonusFrame = (this.frames[i+1].frameScore || 0) + (this.frames[i+2].frameScore || 0)
//     }
//     else if (this.frames[i].spare) {
//       this.bonusFrame = this.frames[i+1][0]
//     }
//   }
//   return this.bonusFrame
// }

Scorecard.prototype.getTotalScore = function() {
  return this.getCumulativeScore() 
}
