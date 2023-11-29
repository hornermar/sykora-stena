export const getExpandedNeighbours = (
 round: number,
 grid: string[][],
 x: number,
 y: number
) => {
 const neighbours = [];

 // Iterate over the cells in the square that is 2 steps in each direction
 for (let i = -round; i <= round; i++) {
  for (let j = -round; j <= round; j++) {
   // Exclude the cell itself
   if (i !== 0 || j !== 0) {
    const neighbourX = x + i;
    const neighbourY = y + j;

    // Check that the neighbour coordinates are within the grid
    if (
     neighbourX >= 0 &&
     neighbourY >= 0 &&
     neighbourY < grid.length &&
     neighbourX < grid[0].length
    ) {
     neighbours.push(grid[neighbourY][neighbourX]);
    }
   }
  }
 }

 return neighbours;
};
