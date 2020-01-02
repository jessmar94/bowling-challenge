const Frame = require('../src/frame');
const Scorecard = require('../src/scorecard');

describe("Scorecard", function() {
  let card

  beforeEach(function() {
    card = new Scorecard(Frame);
  })

  describe('gutter game', function() {
    it('returns a total score of 0 for gutter game', function() {
      for (let i = 0; i < 10; i++) {
        card.frames[i].bowl(0)
        card.frames[i].bowl(0)
      }
      expect(card.getCumulativeScore()).toEqual(0)
    })
  })

  describe('total score', function() {
    it('returns total score when no strike or spare', function() {
      for (let i = 0; i < 10; i++) {
        card.frames[i] = new Frame()
        card.frames[i].bowl(4)
        card.frames[i].bowl(4)
      }
      expect(card.getTotalScore()).toEqual(80)
    })
  })

  describe('a perfect game', function(){
    it('shows a total score of 300 for a perfect game', function(){
      for (let i = 0; i < 10; i++) {
        card.frames[i].bowl(10)
        card.frames[i].bowl(0)
      }
      card.getFinalFrameBonus(10)
      card.getFinalFrameBonus(10)
      expect(card.getTotalScore()).toEqual(300);
    })
  })

  describe('a normal game', function(){
    it('shows the total score', function(){
      for (let i = 0; i < 9; i++) {
        card.frames[i].bowl(6)
        card.frames[i].bowl(0)
      }

      card.frames[9].bowl(7)
      card.frames[9].bowl(3)

      card.getFinalFrameBonus(5)
      expect(card.getTotalScore()).toEqual(69);
    })
  })
})
