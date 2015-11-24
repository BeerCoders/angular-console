var prompt = require('prompt');

module.exports = {

    print: function () {
        console.log("type text");
        prompt.start();
        prompt.get(['username', 'email'], function (err, result) {
            //
            // Log the results.
            //
            console.log('Command-line input received:');
            console.log('  username: ' + result.username);
            console.log('  email: ' + result.email);
        });
    },
}