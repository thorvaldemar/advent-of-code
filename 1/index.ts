import fs from 'fs';

const instructions = fs.readFileSync(`${__dirname}/test.txt`, 'ascii').trim().split('\n').map(e => e.trim());

function calcZeroHit(direct: boolean) {
    let dial = 50;
    let zeroCount = 0;
    
    for (const instr of instructions) {
        const dir = instr[0]!.toUpperCase() as ('R' | 'L');
        const num = parseInt(instr.substring(1));
        if (Number.isNaN(num)) continue;
    
        for (let i = 0; i < num; i++) {
            dial += dir === 'L' ? -1 : 1;
            if (dial > 99) dial = 0;
            else if (dial < 0) dial = 99;
            
            if (!direct && dial === 0) zeroCount++;
        }

        if (direct && dial === 0) zeroCount++;
    }

    return zeroCount;
}

console.log(`Part 1: ${calcZeroHit(true)}`);
console.log(`Part 2: ${calcZeroHit(false)}`);