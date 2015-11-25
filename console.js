<<<<<<< HEAD
var readline = require('readline');
=======
//var cmd = require('./console.js');
>>>>>>> dbfe4b8b4840f844205d7f30df74b127ca77c855

var generator = {
    install: function () {
        var prompt = require('prompt');

        var properties = [
            {
                name: 'username',
                type: 'string',
                description: 'Enter your name',
                validator: /^[a-zA-Z\s\-]+$/,
                warning: 'Username must be only letters, spaces, or dashes',
                hidden: true,
                required: true,
                default: ''
            },
            {
                name: 'password',
                type: 'string',
                description: 'Enter your password',
                hidden: true,
                required: true,
                default: ''
            }
        ];

<<<<<<< HEAD
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
=======
        prompt.start();

        prompt.get(properties, function (err, result) {
            if (err) {
                return onErr(err);
            }
            console.log('Command-line input received:');
            console.log('  Username: ' + result.username);
            console.log('  Password: ' + result.password);
        });

        function onErr(err) {
            console.log(err);
            return 1;
        }
    }
};

module.exports = function () {
    generator.install();
}();
>>>>>>> dbfe4b8b4840f844205d7f30df74b127ca77c855
