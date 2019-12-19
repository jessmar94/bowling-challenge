# Notes on Bowling Challenge

Overall I thought this was great and the way you'd worked out the logic for the 9th and 10th frames was really good. I really liked that you'd used reduce and definitely if you're doing a coding test for a job I would recommend trying to get a reduce in there somewhere. All of your code was really readable and none of the methods were too long. It was easy for me to change which is a really good thing.

The two main things I changed were that you'd used the html version of jasmine and that you'd used objects where arrays would have been better. Using the right tools, and knowing how they work, can really differentiate you in an interview IMO. If you have time it might be worth figuring out how some of the following tools work (at a high level): eslint, jasmine/jest, webpack, babel, react, npm. These are basically the components of create-react-app, if you've used that.

I hope this is helpful! Please let me know if I need to explain anything I've written here or if it's not helpful. It looks like I've changed a lot but most of it is so minor, I just thought it would be better/easier to change everything I would do differently.

## Things I changed

It looks like I've made loads of changes but they're all pretty minor/stylistic changes


First thing I did was move jasmine to npm and add a linter because clearly I have massive OCD.
Also jasmine being run on the server means I can run `npm test` to run the tests rather than opening `SpecRunner.html` and having
to read.

Some properties on the frame are actually functions e.g. the strike property. What I mean by this is that if I want to know whether a frame was a strike I need to check the strike property, but I can easily just set this property and then when I go to access it then it can have an incorrect value.

For example, if I rolled a 2 then a 3 I can then go `frame.strike = true` and it looks like I scored a strike when I didn't. You already have a function `frame.isStrike()` which then calculates this for me. Unless you're in a performance sensitive context it's usually better to not store derived data as state - and if you do, to have it as private state. It just becomes super buggy because you have to track down which method calls (which you might not have written) are mutating the state. The same thing is true for the spare.

Some of your methods then become cleaner because you can replace stuff like

``` JavaScript
Foo.prototype.bar = function() {
  if (qux > 0) {
    this.baz = true;
  }

  return this.baz
}
```

with

``` JavaScript
Foo.prototype.bar = function() {
  return qux > 0
}
```

No need to use objects for sequentially ordered things e.g. a list of ten frames in order. Using objects means you can't use Array methods (like map, reduce, filter). Also (depends on implementation in the language) array lookup is usually faster than object (hash map) lookup. I can go into loads more detail about this but its pretty dry and the main reason I switched your objects to arrays was to use reduce and because you'd indexed them from 1 which is a bit weird. Also I think if you did that in an interview people would find it sort of strange.

Using reduce is great - some people get really funny about functional programming and how amazing it is, so if you get a chance to use it in an interview do, in Ruby as well if you're coding in Ruby.

I've changed the constructor of Scorecard so that it can initialise it's own Frames, rather than having them passed in one by one
In principle, you could unit test your scorecard by passing in a mock frame now but I think unit tests are pointless.
Because the scorecard now initialises it's own frames in it's constructor I can remove your default values for frameScores i.e. the blocks which looked like

```JavaScript
this.frames[i].frameScore || 0
```

Because I know that this.frames[i] will always have a frameScore (I changed this to a method call getFrameScore()) and the scorecard can delegate that responsibility to the Frame class rather than having to deal with invalid values itself.

Every other change was probably made by the linter i.e. changing vars to lets and semicolons everywhere. Don't use var if you can help it, the javascript interpreter does weird things with vars (hoisting if you want to google it) so it's usually a better idea to use const or let - and generally people prefer to use const wherever possible.


## Things you could do

- go through my changes and decide which bits you agree with and which bits you don't (sounds kinda boring though)

- write something else in typescript: you'd probably learn more about npm tooling, plus typescript is cool at the moment so it would be a good thing to talk about in interviews. You mentioned writing a frontend for this, so it could be a react/typescript frontend?
