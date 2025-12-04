# Advent of Code 2025

This project contains solutions for the [Advent of Code 2025 event](https://adventofcode.com/2025) written in Typescript using Bun.

## Run the solutions
Start by downloading and installing Bun from: [bun.sh](https://bun.sh/) and then run `bun i` in the root directory.

Download the day puzzle document and paste it inside the matching days folder. Afterwards you'll need to change the following line, to match the name of the puzzle document:
```typescript
const docs = fs.readFileSync(`${__dirname}/docs.txt`, 'ascii');
```

When this is done, you can run a solution by running the following with the day as argument:
```bash
bun start [day]
```