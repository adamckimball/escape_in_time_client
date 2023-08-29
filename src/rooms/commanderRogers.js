export const adventureClues = [
  {
    id: 1,
    puzzle: "26 pieces of paper used as a cipher - see map for locations",
    clue: "It seems that all little pieces of paper are important. Did we find them all?",
  },
  {
    id: 2,
    puzzle: "3 airline tickets - see map for locations",
    clue: "After sitting in a CHAIR on a plane, I usually stand up and throw my ticket in the TRASH.",
  },
  {
    id: 3,
    puzzle: "Key hidden under table",
    clue: "Was there something under the table?",
  },
  {
    id: 4,
    puzzle: "Puzzle tube",
    clue: "Sometimes not knowing what to do makes me feel like TRASH.",
  },
  {
    id: 5,
    puzzle: "3 combo lock on backpack",
    clue: "Getting the puzzle tube open should be helpful.",
  },
  {
    id: 6,
    puzzle: "Sentence on the board",
    clue: "The characters on the board look a lot like the characters on the paper.",
    ancestors: [1],
  },
  {
    id: 7,
    puzzle: "Unscramble word from special letters on board - 5 letter lock",
    clue: "The sentence seems to have special letters, but are they scrambled?",
    ancestors: [1, 6],
  },
  {
    id: 8,
    puzzle: "Commander Rogers pictures - 4 number lock",
    clue: "Sometimes coming from a long line of adventurers is important.",
  },
  {
    id: 9,
    puzzle: "Direction Lock - Combination in Commander Rogers' letter",
    clue: "I thought that letter seemed to have good DIRECTIONS for adventures.",
  },
  {
    id: 10,
    puzzle: "Airline tickets and world map - Combination lock",
    clue: "Sometimes I love to MAP out places that I FLY.",
    ancestors: [2],
  },
  {
    id: 11,
    puzzle:
      "Black box with copper gears on top - wind pictures reveal directions",
    clue: "The pictures with wind seem to go in certain directions, and there seems to be something on the papers I can't make out.",
  },
  {
    id: 12,
    puzzle: "Wood puzzle box",
    clue: "It looks like one of the small sides of the wooden box slides up.",
  },
];
