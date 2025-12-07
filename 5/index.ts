import fs from 'fs';

const docs = fs.readFileSync(`${__dirname}/test.txt`, 'ascii');
const lines = docs.split('\n');
const [ ranges, availables ] = [ lines.slice(0, lines.indexOf('')).map(e => e.split('-').map(e => Number.parseInt(e))), lines.slice(lines.indexOf('') + 1).map(e => Number.parseInt(e)) ] as [[number, number][], number[]];

function part1() {
    let goods = 0;

    for (const num of availables) {
        for (const [low, high] of ranges) {
            if (num >= low && num <= high) {
                goods++;
                break;
            }
        }
    }

    return goods;
}

function part2() {
    const intervals: [number, number][][] = [];
    
    for (const [low, high] of ranges.sort((a, b) => a[0] - b[0])) {
        let found = false;
        for (const col of intervals) {
            for (const [sl, sh] of col) {
                if ((low <= sl && high >= sl) || (low <= sh && high >= sh) || (sl <= low && sh >= low) || (sl <= high && sh >= high)) {
                    col.push([low, high]);
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
        if (!found) intervals.push([[low, high]]);
    }

    return intervals.map(e => e.flat().sort((a, b) => a - b)).map(e => [e[0], e.pop()]).reduce((prev, [low, high]) => prev + (high! - low! + 1), 0);
}

console.log(`Part 1: ${part1()}`);
console.log(`Part 2: ${part2()}`);