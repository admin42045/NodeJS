// read file
const { readFileSync, writeFileSync } = require("fs");

// read file and store into a variable
const first = readFileSync("../1_Module/subFolder/firstFile.txt", "utf-8");
console.log(first, second);
