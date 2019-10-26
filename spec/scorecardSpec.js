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
      expect(card.frameCount).toEqual(1)
    })
  })
})
