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
    it('starts with a frameCount of 0', function() {
      expect(frame.frameScore).toEqual(0)
    })
  })

  describe('getRolls', function() {
    it('saves a roll when user bowls twice', function() {
      frame.knockedPins(5)
      frame.knockedPins(3)
      expect(frame.getRolls()).toContain(5)
      expect(frame.getRolls()).toContain(3)
    })

    it('does not save roll when user bowls >2', function() {
      frame.knockedPins(5)
      frame.knockedPins(3)
      frame.knockedPins(4)
      expect(frame.getCurrentScore()).toEqual(8)
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

  describe('calcFrameScore', function() {
    it('totals the score for the frame', function() {
      frame.knockedPins(5)
      frame.knockedPins(3)
      expect(frame.calcFrameScore()).toEqual(8)
    })
  })

  describe('getCurrentScore', function() {
    it('returns the score so far', function() {
      frame.knockedPins(5)
      frame.knockedPins(3)
      frame.calcFrameScore()
      expect(frame.getCurrentScore()).toEqual(8)
    })
  })

  describe('strike functin', function() {
    it('returns true if players bowls 10', function() {
      frame.knockedPins(10)
      expect(frame.strike()).toBe(true)
    })
  })

  describe('spare function', function() {
    it('returns true if frame score is 10', function() {
      frame.knockedPins(5)
      frame.knockedPins(5)
      expect(frame.spare()).toBe(true)
    })
  })
})
