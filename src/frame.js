"use strict";

function Frame() {
  this.frameScore = 0
  this.roll = [];
}

Frame.prototype.getRolls = function() {
  return this.roll
}

Frame.prototype.getCurrentScore = function() {
  this.frameScore = this.calcFrameScore()
  return this.frameScore
}

Frame.prototype.knockedPins = function(score) {
  if (score <= 10 && this.calcFrameScore(score) <= 10 && this.frameOver()) {
    this.roll.push(score)
    this.strike()
    return this.getCurrentScore()
  } else {
    return this.getCurrentScore() 
  }
}

Frame.prototype.frameOver = function() {
  if (this.roll.length >= 2) {
    return false
  } else {
    return true
  }
}

Frame.prototype.calcFrameScore = function(num=0) {
  return this.roll.reduce((a, b) => a + b, num)
}

Frame.prototype.strike = function() {
  if(this.roll[0] === 10) {
    return true
  }
}
