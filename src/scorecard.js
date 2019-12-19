
function Scorecard(FrameType) {
  this.frames = [];

  this.bonusFrame = [];
  this.finalFrameBonus = [];
  this.gameOver = false;

  this.initFrames(FrameType);
}

Scorecard.prototype.initFrames = function (FrameType) {
  for (let i = 0; i < 10; i++) {
    this.frames.push(new FrameType());
  }
};

Scorecard.prototype.getCumulativeScore = function () {
  return this.frames.reduce((total, frame) => total + frame.getFrameScore(), 0);
};

// for first 8 frames
Scorecard.prototype.calcFrameBonus = function () {
  for (let i = 0; i < 8; i++) {
    if (this.frames[i].isStrike()) {
      this.bonusFrame[i] = this.frames[i + 1].getFrameScore() + this.frames[i + 2].getFrameScore();
    } else if (this.frames[i].isSpare()) {
      const [spareScore = 0] = this.frames[i + 1].getRolls();
      this.bonusFrame[i] = spareScore;
    }
  }

  this.getPenultimateFrameBonus();
};

// for 9th frame
Scorecard.prototype.getPenultimateFrameBonus = function () {
  if (this.frames[8].isStrike()) {
    this.bonusFrame[8] = this.frames[8].getFrameScore() + this.frames[9].getFrameScore();
  } else if (this.frames[8].isSpare()) {
    const [spareScore = 0] = this.frames[8].getRolls();
    this.bonusFrame[8] = spareScore;
  }
};

// for 10th frame
Scorecard.prototype.getFinalFrameBonus = function (pins) {
  if (pins > 10) {
    // eslint-disable-next-line no-console
    console.log('You cannot knock more than 10 pins');
    return;
  }

  // In this line you check if the frame is a strike or a spare, but the way you wrote the 'isSpare' function
  // means that strikes are already spares so you could simplify this to just checking for spares.
  // I think this is easier to read though, so maybe you could change the 'isSpare' function to return false on
  // a strike?
  if (this.frames[9].isStrike() || this.frames[9].isSpare()) {
    this.finalFrameBonus.push(pins);
  }
};

Scorecard.prototype.calcFinalFrameBonus = function () {
  return this.finalFrameBonus.reduce((total, next) => total + next, 0);
};

Scorecard.prototype.calcBonusScore = function () {
  return this.bonusFrame.reduce((total, next) => total + next, 0);
};

Scorecard.prototype.getTotalScore = function () {
  this.calcFrameBonus();
  return this.getCumulativeScore() + this.calcBonusScore() + this.calcFinalFrameBonus();
};

if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
  module.exports = Scorecard;
}
