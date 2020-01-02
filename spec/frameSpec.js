"use strict";

describe("Frame", function() {

  let frame;

  beforeEach(function() {
    frame = new Frame();
  })

  describe('getRolls', function() {
    it('saves a roll when user bowls twice', function() {
      frame.bowl(5)
      frame.bowl(3)
      expect(frame.getRolls()).toContain(5)
      expect(frame.getRolls()).toContain(3)
    })

    it('does not save roll when user bowls >2', function() {
      frame.bowl(5)
      frame.bowl(3)
      frame.bowl(4)
      expect(frame.getFrameScore()).toEqual(8)
    })

    it('does not save roll when knockedPins is >10', function() {
      frame.bowl(15)
      expect(frame.getFrameScore()).toEqual(0)
    })
  })

  describe('validateFrameLength', function() {
    it('returns false when roll array length is >=2', function() {
      frame.bowl(5)
      frame.bowl(3)
      frame.bowl(4)
      frame.roll.length = 3
      expect(frame.validateFrameLength()).toBe(false)
    })
  })

  describe('getFrameScore', function() {
    it('returns the score so far', function() {
      frame.bowl(5)
      frame.bowl(3)
      expect(frame.getFrameScore()).toEqual(8)
    })
  })

  describe('strike functin', function() {
    it('returns true if players bowls 10', function() {
      frame.bowl(10)
      expect(frame.isStrike()).toEqual(true)
    })
  })

  describe('spare function', function() {
    it('returns true if frame score is 10', function() {
      frame.bowl(5)
      frame.bowl(5)
      expect(frame.isSpare()).toEqual(true)
    })
  })
})
