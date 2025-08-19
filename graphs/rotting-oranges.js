/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const queue = [];
    const rows = grid.length;
    const cols = grid[0].length;
    let fresh = 0;
    let t = 0;

    for (let i=0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(grid[i][j] === 1) fresh++;
            if (grid[i][j] === 2) queue.push([i,j,t]);
        }
    }

    if (fresh === 0) return t;

    while(queue.length > 0) {
        const o = queue.shift();
        const [x,y,mins] = o;
        // for each neighbor, push to queue;
        t = mins;
        if (fresh === 0) return t;
        for (const [i, j] of [[x+1, y], [x-1, y], [x, y+1], [x, y-1]]) {
            if (i >= 0 && i < rows &&
                j >= 0 && j < cols && grid[i][j] === 1) {
                grid[i][j] = 2;
                queue.push([i,j,t+1]);
                fresh--;
            }
        }

        if (fresh === 0) return t+1;
    }

    return fresh === 0 ? t : -1;
};
