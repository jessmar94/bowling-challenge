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
})
