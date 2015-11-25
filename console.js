//var cmd = require('./console.js');

var fs = require('fs-extra');

var generator = {
    structure: [
        'src',
        'src/controllers',
        'src/directives',
        'src/models',
        'src/models/provider',
        'src/services',
        'src/views',
        'tests',
        'tests/controllers',
        'tests/directives',
        'tests/models',
        'tests/models/provider',
        'tests/services'
    ],
    mkdir: function (src) {
        fs.mkdirs(src, function (err) {
            if (err) return console.error(err)
            console.log("success!")
        })
    },
    createStructure: function(structure, dir) {
      for (var path in structure) {
          generator.mkdir(dir+"/"+structure[path]);
      }
    },
    install: function (dir, name, author, email) {

        if (typeof dir == 'undefined') {
            dir = "sample";
        }
        if (typeof name == 'undefined') {
            name = "sample";
        }

        generator.mkdir(dir);
        generator.createStructure(generator.structure, dir);


    }
};

module.exports = function () {
    generator.install();
}();

//
//fs.writeFile("tmp/test.txt", "Hey there!ssss", function (err) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log("The file was saved!");
//    }
//});
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