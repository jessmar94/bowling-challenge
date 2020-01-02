"use strict";

function Scorecard(frameType) {
  this.frames = [];
  this.bonusFrame = [];
  this.bonusScore = 0;
  this.finalFrameBonus = [];
  this.gameOver = false;
  this.initFrames(FrameType);
}

Scorecard.prototype.initFrames = function(frame){
  for (let i = 0; i < 10; i++) {
    this.frames.push(new FrameType());
  }
}

Scorecard.prototype.getCumulativeScore = function() {
  return this.frames.reduce((total, frame) => total + frame.getFrameScore(), 0);
}

// for first 8 frames
Scorecard.prototype.calcFrameBonus = function() {
  for (let i = 0; i < 8; i++) {
    if (this.frames[i].isStrike()) {
      this.bonusFrame[i] = (this.frames[i+1].getFrameScore()) + (this.frames[i+2].getFrameScore());
    } else if (this.frames[i].isSpare()) {
      const [spareScore = 0] = this.frames[i + 1].getRolls();
      this.bonusFrame[i] = spareScore;
    }
  }
  this.getPenultimateFrameBonus();
}

// for 9th frame
Scorecard.prototype.getPenultimateFrameBonus = function() {
  if (this.frames[9].strike) {
    this.bonusFrame[9] = (this.frames[9].frameScore || 0) + (this.frames[10].frameScore || 0)
  } else if (this.frames[9].spare) {
    this.bonusFrame[9] = this.frames[9][0]
  }
}

// for 10th frame
Scorecard.prototype.getFinalFrameBonus = function(pins) {
  if (pins > 10){
    console.log('You cannot knock more than 10 pins')
  } else if (this.frames[10].strike || this.frames[10].spare) {
    if (pins === 10){
      this.finalFrameBonus.push(pins)
      this.lastBonus
    } else {
      this.finalFrameBonus.push(pins)
    }
  }
}

Scorecard.prototype.lastBonus = function(pins) {
  this.finalFrameBonus.push(pins)
}

Scorecard.prototype.calcFinalFrameBonus = function() {
  return this.finalFrameBonus.reduce((a, b) => a + b, 0);
}

Scorecard.prototype.calcBonusScore = function() {
  for (var i = 1; i < 11; i++){
    this.bonusScore += this.bonusFrame[i];
  }
  return this.bonusScore;
}

Scorecard.prototype.getTotalScore = function() {
  return this.getCumulativeScore() + this.calcBonusScore() + this.calcFinalFrameBonus();
}
