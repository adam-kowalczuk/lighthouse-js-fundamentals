const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (const move of moves) {
    if (move === 'north') {
      y++;
    } else if (move === 'south') {
      y--;
    } else if (move === 'east') {
      x++;
    } else if (move === 'west') {
      x--;
    }
  } return [x,y];
}

console.log(finalPosition(moves));