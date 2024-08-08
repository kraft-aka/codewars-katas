// Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

// ALF has the technology to bring the spaceship home if he can lock on to its location.

// Given a map:

// ..........
// ..........
// ..........
// .......X..
// ..........
// ..........
// The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.

// In this example:

// findSpaceship(map) => [7, 2]

function findSpaceship(map) {
  if (!map || !map.includes("X")) return "Spaceship lost forever.";
  const first = map
    .split("\n")
    .reverse()
    .find((i) => i.includes("X"))
    .indexOf("X");
  const second = map
    .split("\n")
    .reverse()
    .findIndex((i) => i.includes("X"));
  return [first, second];
}
