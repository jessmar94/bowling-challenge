# Bowling Challenge
## Summary
The challenge is to create a scorecard for a game of bowling. The scorecard will take in the values for the pins knocked down by a single player and sum the total score for each round and finally for the entire game.

As this is a scorecard, the user inputs the rolls (i.e. the rolls will not be randomly generated).

This project is made up of two classes: Frame which keeps track of an individual frame's scores and any rules associated with an individual frame (e.g. if you bowl a strike on your first go, you don't get a second go); and Scorecard which has Frame instances and keeps track of the cumulative score of the game, including any bonuses. This project has 11 passing tests.

## How to Install and Run
1. Clone this repository.
2. Move into the folder directory and run the app by typing the following into the terminal:
``` bash
$ cd path/to/directory
$ npm install
Copy the full path for the `SpecRunner.html` file and paste into your browser.
Inspect the file and open up the console.
```

## How to Run Tests
```bash
$ npm test
```

## How to Run Linter
On the src files:
```bash
npx eslint src
```
On the spec files:
```bash
npx eslint spec
```

## Plan
I developed some user stories based on the bowling rules, as specified further below.
``
As a player,
So I can keep track of how many pins I knock down,
I want to input my number of knocked pins on each bowl.
``
``
As a player,
If I don't get a strike on my first bowl,
I want to be able to input my knocked pins for the second bowl in the same frame.  
``
``
As a player
So I can see rubbish I am,
I want to see my total score of 0 when I hit 0 pins on all 10 frames.
``
``
As a player,
So I can see how amazing I am,
I want to see my total score of 300 when I get a strike every time.
``
``
As a player,
So I get the right bonus points for my strikes,
I would like bonus points of the total of the next 2 rolls when I roll a strike.
``
``
As a player,
So I get the right bonus points for my spares,
I would like bonus points of the total of the next 1 roll when I roll a spare.
``
``
As a player,
So I get the score for the bonus round in the 10th frame,
I would to include scores for the bonus round if I bowl a strike or spare.
``

## Bowling Rules

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Strikes
The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares
The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame
If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game
A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game
A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.
More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling
![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## Project Status
As of 3rd January 2020, all user stories have been implemented. If I have more time, I would like to create an interactive interface either with jQuery and HTML or by I would try out TypeScript. I would also set up [Travis CI](https://travis-ci.org) to run my tests.
