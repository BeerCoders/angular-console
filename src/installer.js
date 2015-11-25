var fs = require('fs-extra');

var structure = [
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
    mkdir = function (src) {
        fs.mkdirs(src, function (err) {
            if (err) return console.error(err)
            console.log("success!")
        })
    },
    createStructure = function (structure, dir) {
        for (var path in structure) {
            generator.mkdir(dir + "/" + structure[path]);
        }
    },
    install = function (dir, name, author, email) {

        if (typeof dir == 'undefined') {
            dir = "sample";
        }
        if (typeof name == 'undefined') {
            name = "sample";
        }

        generator.mkdir(dir);
        generator.createStructure(generator.structure, dir);
    };

module.exports = {
    install: install
};