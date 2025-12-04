import fs from 'fs';

const docs = fs.readFileSync(`${__dirname}/test.txt`, 'ascii');
const grid = docs.split('\n').map(e => e.trim().split(''));
const height = grid.length;
const width = grid[0]!.length;

const checkSpaceAvailable = (x: number, y: number) => !grid[y] || !grid[y][x] || !['@', 'X'].includes(grid[y][x]);

function part1() {
    const maxRolls = 4;

    function adjacentRollsCount(x: number, y: number) {
        let c = 0;

        for (let yOffset = -1; yOffset <= 1; yOffset++) {
            for (let xOffset = -1; xOffset <= 1; xOffset++) {
                if (xOffset === 0 && yOffset === 0) continue;
                if (!checkSpaceAvailable(x + xOffset, y + yOffset)) c++;
                if (c >= maxRolls) return c;
            }
        }

        return c;
    }

    let movableRolls = 0;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (!['@', 'X'].includes(grid[y]![x]!)) continue;
            if (adjacentRollsCount(x, y) < maxRolls) {
                grid[y]![x] = 'X';
                movableRolls++;
            }
        }
    }

    return movableRolls;
}

function part2() {
    let sum = 0;
    for (let i = 0; i < 999999; i++) {
        const c = part1();
        if (c <= 0) break;
        sum += c;

        grid.forEach((row, y) => row.forEach((cell, x) => grid[y]![x] = cell.replace('X', '.')))
    }

    return sum;
}

console.log(`Part 1: ${part1()}`);
console.log(`Part 2: ${part2()}`);