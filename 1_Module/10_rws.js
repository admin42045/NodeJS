const { readFile } = require('fs')

readFile('./subFolder/firstFile.txt', 'utf8', (err, result) => {
   if(err){
      console.log(err)
	   return 
   }
	console.log(result)
})
