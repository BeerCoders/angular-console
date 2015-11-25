var readline = require('readline');

module.exports = {

    print: function () {
    	var answer = '';
    	var rl = readline.createInterface({
		  input: process.stdin,
		  output: process.stdout,
		  terminal: false
		});
        console.log("type text");
	        rl.question("What do you think of node.js? ", function(answer) {
	  		console.log("Thank you for your valuable feedback:", answer);
	  		rl.close();
		});
    },
}