
// CommonJS, every fie is module (by default)
// Modules = Encapsulated code (only share minimux)

const names = require("./names");
const sayHi = require("./utilies");
const data = require("../5.alter_flav");
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./subFolder/firstFile.txt", "utf-8");
const second = readFileSync("./subFolder/secondFile.txt", "utf-8");

console.log(first, second);

writeFileSync(
  "./subFolder/ResulFile.txt",
  `Here is the result: ${first} , ${second}`
)

// generate some data

//require("../6.mind-generate");

//sayHi(names.fName, names.lName);
//console.log(data);
