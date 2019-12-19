
function Frame() {
  this.roll = [];
}

Frame.prototype.getRolls = function () {
  // this is just personal preference but I probably wouldn't bother writing this
  // sort of method since there are no private variables in Javascript and this method doesn't
  // do any computation
  return this.roll;
};

Frame.prototype.bowl = function (knockedPins) {
  if (knockedPins <= 10 && this.getFrameScore(knockedPins) <= 10 && this.validateFrameLength()) {
    this.roll.push(knockedPins);
  }

  return this.getFrameScore();
};

Frame.prototype.validateFrameLength = function () {
  return this.roll.length < 2;
};

Frame.prototype.getFrameScore = function (num = 0) {
  return this.roll.reduce((a, b) => a + b, num);
};

Frame.prototype.isStrike = function () {
  return this.roll[0] === 10;
};

// This looks like it might be buggy to me: a strike is also a spare. Maybe you want this?
Frame.prototype.isSpare = function () {
  return this.getFrameScore() === 10;
};

if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
  module.exports = Frame;
}
