var rl = require('readline')
var prompts = rl.createInterface(process.stdin, process.stdout)
prompts.question("", function(idadeInput){
	var msg = idadeInput
	console.log(msg)
	process.exit()
})