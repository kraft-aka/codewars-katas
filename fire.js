// Ready! Set! Fire... but where should you fire?

// The battlefield is 3x3 wide grid. HQ has already provided you with an array for easier computing:

// var grid = ['top left',    'top middle',    'top right',
//             'middle left', 'center',        'middle right',
//             'bottom left', 'bottom middle', 'bottom right']
// HQ radios you with 'x' and 'y' coordinates. x=0 y=0 being 'top left' part of the battlefield;

// Your duty is to create a function that takes those Xs and Ys and return the correct grid sector to be hit.

// fire(0,0); => 'top left'
// fire(1,2); => 'bottom middle'
// etc.
// Notice the grid is a monodimensional array, good luck!

//              THE BATTLEFIELD GRID
// ['top left',    'top middle',    'top right',
//  'middle left', 'center',        'middle right',
//  'bottom left', 'bottom middle', 'bottom right']
//
function fire(x, y) {
  if (x === 0 && y === 0) return "top left";
  if (x === 0 && y === 1) return "middle left";
  if (x === 0 && y === 2) return "bottom left";
  if (x === 1 && y === 0) return "top middle";
  if (x === 1 && y === 1) return "center";
  if (x === 1 && y === 2) return "bottom middle";
  if (x === 2 && y === 0) return "top right";
  if (x === 2 && y === 1) return "middle right";
  if (x === 2 && y === 2) return "bottom right";
}
