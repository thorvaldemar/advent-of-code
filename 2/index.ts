import fs from 'fs';

const docs = fs.readFileSync(`${__dirname}/test.txt`, 'ascii');
const productIDs = docs.split(',').map(e => e.split('-').map(e => parseInt(e))) as [number, number][];

function part1() {
	let score = 0;
	for (let [x, y] of productIDs) {
		for (let num = x; num <= y; num++) {
			let str = num.toString();

			if (str.slice(0, Math.floor(str.length / 2)) === str.slice(Math.floor(str.length / 2)))
				score += num;
		}
	}
	
	return score;
}

function part2() {
	const repSubPattern = (str: string) => ((str + str).slice(1, -1)).includes(str);

	let score = 0;
	for (let [first, last] of productIDs) {
		for (let num = first; num <= last; num++) {
			if (repSubPattern(num.toString()))
				score += num;
		}
	}
	
	return score;
}

console.log(`Part 1: ${part1()}`);
console.log(`Part 2: ${part2()}`);