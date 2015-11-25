//var cmd = require('./console.js');

var fs = require('fs');

var generator = {
    install: function (dir, name, author, email) {

        if(typeof dir == 'undefined') {
            dir = "sample";
        }
        if (typeof name == 'undefined') {
            name = "sample";
        }


        fs.mkdir("tmp",function(e){
            if(!e) {
                //do something with contents
            } else {

            }
        });

        fs.writeFile("tmp/test.txt", "Hey there!ssss", function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("The file was saved!");
            }
        });

    }
};

module.exports = function () {
    generator.install();
}();


//var prompt = require('prompt');
//
//var properties = [
//    {
//        name: 'username',
//        type: 'string',
//        description: 'Enter your name',
//        validator: /^[a-zA-Z\s\-]+$/,
//        warning: 'Username must be only letters, spaces, or dashes',
//        hidden: true,
//        required: true,
//        default: ''
//    },
//    {
//        name: 'password',
//        type: 'string',
//        description: 'Enter your password',
//        hidden: true,
//        required: true,
//        default: ''
//    }
//];
//
//prompt.start();
//
//prompt.get(properties, function (err, result) {
//    if (err) {
//        return onErr(err);
//    }
//    console.log('Command-line input received:');
//    console.log('  Username: ' + result.username);
//    console.log('  Password: ' + result.password);
//});
//
//function onErr(err) {
//    console.log(err);
//    return 1;
//}