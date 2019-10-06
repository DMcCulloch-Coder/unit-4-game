# unit-4-game

Star Wars RPG Game
created by David McCulloch

----------------------------------
Instructions:
-First, Select a character by clicking on its picture.
    -The character you select will be placed in my character section
    -The other characters will be your opponents.

-Then, select which opponent you will fight first.
    -HINT: Choose carefully, the order in which they are selected could mean
    the difference between victory and defeat.

-Once you have selected an opponent they will be moved to the Current Opponent section.
    -Press the fight button to duke it out.
    -Each time you press it you will fight until one of you are defeated.

-If you defeat your opponent, select your next one.
    -If you run out of health, you lose and the game will start all over again.
    -If you defeat all three opponents, you will Win!

-------------------------------------

Code Notes:

-HTML is laid out with divs, the characters are put in divs and those divs are moved
around as they are selected as different elements in the game.

-Character stats are collected in and object of objects that is reference in js.

-JS is set up with global variables, defining functions, and caling functions / on click events.

-on click events, other than the fight button, deal with moving divs.
    -in each case they are moved, their classes are changed based on their role and placement.

-the fight button interacts with the stats and is updated via spans and p tags that shows many of the stats to the user.