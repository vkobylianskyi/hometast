const getValue = require("./getValue");

let xStart = Number(process.argv[3]);
const xEnd = Number(process.argv[5]);
const m = Number(process.argv[7]);

console.log(getValue(xStart, xEnd, m));

module.exports = getValue;

// node index.js --xstart 1 --xend 2 --m 3
