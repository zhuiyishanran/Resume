const fs=require('fs');

//fs.readFile();
fs.writeFile("bbb.txt", "helloworld", function (err){
	console.log(err);
});
