"use strict";

describe("Scorecard", function() {
  var card
  var frame

  beforeEach(function() {
    card = new Scorecard;
    frame = new Frame;
  })

  describe('initFrames', function() {
    it('pushes a frame into the frames hash', function() {
      frame = [5,2]
      card.initFrames(frame)
      expect(card.frames).toEqual({ 1:[5, 2], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]})
    })
  })

  describe('gutter game', function() {
    it('returns a total score of 0 for gutter game', function() {
      let frames = []
      for (var i = 0; i < 10; i++) {
        frames[i] = new Frame()
        frames[i].bowl(0)
        frames[i].bowl(0)
      }
      for (var i = 0; i < 10; i++) {
        card.initFrames(frames[i])
      }
      expect(card.getCumulativeScore()).toEqual(0)
    })
  })

  describe('total score', function() {
    it('returns total score when no strike or spare', function() {
      let frames = []
      for (var i = 0; i < 10; i++) {
        frames[i] = new Frame()
        frames[i].bowl(4)
        frames[i].bowl(4)
      }
      for (var i = 0; i < 10; i++) {
        card.initFrames(frames[i])
      }
      expect(card.getTotalScore()).toEqual(80)
    })
  })

  describe('a perfect game', function(){
    it('shows a total score of 300 for a perfect game', function(){
      let frames = [];
      for (var i = 0; i < 10; i++) {
        frames[i] = new Frame();
        frames[i].bowl(10)
        frames[i].bowl(0)
      }
      for (var i = 0; i < 10; i++){
        card.initFrames(frames[i])
      }
      card.getFinalFrameBonus(10)
      card.lastBonus(10)
      expect(card.getTotalScore()).toEqual(300);
    })
  })

  describe('a normal game', function(){
    it('shows the total score', function(){
      let frames = [];
      for (var i = 0; i < 9; i++) {
        frames[i] = new Frame();
        frames[i].bowl(6)
        frames[i].bowl(0)
      }

      let frame10 = new Frame();
      frame10.bowl(7)
      frame10.bowl(3)
      frames.push(frame10)

      for (var i = 0; i < 10; i++){
        card.initFrames(frames[i])
      }
      card.getFinalFrameBonus(5)
      expect(card.getTotalScore()).toEqual(69);
    })
  })
})
