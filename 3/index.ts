import fs from 'fs';

const docs = fs.readFileSync(`${__dirname}/docs.txt`, 'ascii');
const banks = docs.split('\n').map(e => e.trim().split('').map(e => parseInt(e)));

function calcJoltage(len: number) {
    let sum = 0;
    for (const bank of banks) {
        let arr: number[] = [];
    
        let lastIndex = -1;
        while (arr.length < len) {
            const highest = Math.max(...bank.slice(lastIndex+1, bank.length - (len - arr.length - 1)));
            arr.push(highest);
            lastIndex = bank.indexOf(highest, lastIndex+1);
        }
    
        sum += parseInt(arr.join(''));
    }

    return sum;
}

console.log(`Part 1: ${calcJoltage(2)}`);
console.log(`Part 2: ${calcJoltage(12)}`);