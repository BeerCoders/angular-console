var fs = require('fs-extra');
var create = require('./create.js');
var template = require('./template.js');

var structure = [
        'src/controllers',
        'src/directives',
        'src/filters',
        'src/models/provider',
        'src/services',
        'src/views',
        'tests/controllers',
        'tests/directives',
        'tests/filters',
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
    createGitignore = function () {

    },
    createBowerrc = function () {

    },
    createBowerJson = function (args) {

    },
    createIndexHtml = function (args) {

    },
    createAppJs = function (args) {

    },
    createController = function (args) {

    },
    install = function (dir, appName, author, email) {

        if (typeof dir == 'undefined') {
            dir = "sample";
        }
        if (typeof name == 'undefined') {
            appName = "sample";
        }

        if (typeof author == 'undefined') {
            author = "sample";
        }

        if (typeof email == 'undefined') {
            email = "sample@sample.com";
        }

        var args = {
            dir: dir,
            appName: appName,
            author: author,
            email: email,
        };

        mkdir(dir);
        createStructure(generator.structure, dir);
        createGitignore();
        createBowerrc();
        createBowerJson(args);
        createIndexHtml(args);
        createAppJs(args);
        createController(args);
    };

module.exports = {
    install: install
};