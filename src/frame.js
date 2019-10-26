"use strict";

function Frame() {
  this.frameScore = 0
  this.roll = [];
}

Frame.prototype.getRolls = function() {
  return this.roll
}

Frame.prototype.getFrameScore = function() {
  this.frameScore = this.calcFrameScore()
  return this.frameScore
}

Frame.prototype.bowl = function(knockedPins) {
  if (knockedPins <= 10 && this.calcFrameScore(knockedPins) <= 10 && this.frameLength()) {
    this.roll.push(knockedPins)
    this.strike()
    this.spare()
    return this.getFrameScore()
  } else {
    return this.getFrameScore()
  }
}

Frame.prototype.frameLength = function() {
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
  if (this.roll[0] === 10) {
    return true
  }
}

Frame.prototype.spare = function() {
  if (this.calcFrameScore() === 10) {
    return true
  }
}
