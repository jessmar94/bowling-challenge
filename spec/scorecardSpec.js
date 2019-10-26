"use strict";

describe("Scorecard", function() {
  var card
  var frame

  beforeEach(function() {
    card = new Scorecard;
    frame = new Frame;
  })

  describe('initialization', function() {
    it('starts with keys 1-10 and empty array values', function() {
      expect(card.frames).toEqual({ 1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]})
    })
    it('starts with a frameCount of 1', function() {
      expect(card.frameKeyNumber).toEqual(1)
    })

    it('starts with a total score of 0', function() {
      expect(card.totalScore).toEqual(0)
    })
  })

  describe('initFrames', function() {
    it('pushes a frame into the frames hash', function() {
      frame = [5,2]
      card.initFrames(frame)
      expect(card.frames).toEqual({ 1:[5, 2], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]})
    })
  })

  describe('total score for gutter game', function() {
    it('returns a total score of 0', function() {
      let frames = []
      for (var i = 0; i < 10; i++) {
        frames[i] = new Frame()
        frames[i].bowl(0)
        frames[i].bowl(0)
      }
      for (var i = 0; i < 10; i++) {
        card.initFrames(frames[i])
      }
      expect(card.getTotalScore()).toEqual(0)
    })
  })
})
