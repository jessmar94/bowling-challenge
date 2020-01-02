"use strict";

function Frame() {
  this.frameScore = 0
  this.roll = [];
  this.strike = false;
  this.spare = false;
}

Frame.prototype.getFrameScore = function() {
  this.frameScore = this.calcFrameScore()
  return this.frameScore
}

Frame.prototype.bowl = function(knockedPins) {
  if (knockedPins <= 10 && this.calcFrameScore(knockedPins) <= 10 && this.validateFrameLength()) {
    this.roll.push(knockedPins)
    this.isStrike()
    this.isSpare()
    return this.getFrameScore()
  } else {
    return this.getFrameScore()
  }
}

Frame.prototype.validateFrameLength = function() {
  if (this.roll.length >= 2) {
    return false
  } else {
    return true
  }
}

Frame.prototype.calcFrameScore = function(num=0) {
  return this.roll.reduce((a, b) => a + b, num)
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
