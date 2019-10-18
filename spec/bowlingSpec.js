"use strict";

describe("Scorecard", function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  })

  describe('on initialization', function() {
    it('starts with a frame count of 0', function() {
      expect(scorecard.frameCount).toEqual(0)
    })

    it('starts a bowl count of 0', function() {
      expect(scorecard.bowlCount).toEqual(0);
    })

    it('starts with an empty total score array', function() {
      expect(scorecard.totalScore).toEqual(0)
    })
    // add one for framescore
  })

  describe('Gutter Game', function() {

    it('has a bowl count of 20', function() {
      for (var i = 0; i < 20; i++) {
        scorecard.bowl(0)
      }
      expect(scorecard.bowlCount).toEqual(20)
    })

    it('pushes # knocked pins into frameScore array when bowl 3x', function() {
      for (var i = 0; i < 3; i++) {
        scorecard.bowl(0)
      }
      expect(scorecard.frameScore).toEqual([0,0,0])
    })

    it('has a total score of 0', function() {
      for (var i = 0; i < 20; i++) {
        scorecard.bowl(0)
      }
      expect(scorecard.getTotalScore()).toEqual(0)
    })
  })
})
