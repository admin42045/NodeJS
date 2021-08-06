
// taking the data to other modules

//const fullName = require("/5.alter_flav");


// import of os modules
const os = require('os')

const user = os.userInfo()
const user1 = os.platform()
const user2 = os.type()
const user3 = os.totalmem()
const user4 = os.uptime()
console.log(user)
console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)

//info about the currentuser
const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeeMem: os.freemem(),
}
console.log(currentOS)

require("./6.mind-generate");


//console.log(fullName);
