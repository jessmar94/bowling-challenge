"use strict";

describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  describe('on initialization', function() {
    it('starts with an empty frame array', function() {
      expect(frame.roll).toEqual([])
    })
  })

  describe('getRolls', function() {
    it('saves a roll when user bowls twice', function() {
      frame.knockedPins(5)
      frame.knockedPins(3)
      expect(frame.getRolls()).toContain(5)
      expect(frame.getRolls()).toContain(3)
    })
  })

  describe('frameOver', function() {
    it('returns false when roll array length is >=2', function() {
      frame.knockedPins(5)
      frame.knockedPins(3)
      frame.knockedPins(4)
      frame.roll.length = 3
      expect(frame.frameOver()).toBe(false)
    })
  })
})
