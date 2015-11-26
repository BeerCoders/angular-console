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
            mkdir(dir + "/" + structure[path]);
        }
    },
    createGitignore = function (args) {
        //create.create(template.gitignore, args);
    },
    createBowerrc = function () {

    },
    createBowerJson = function (args) {

    },
    createIndexHtml = function (args) {
        create.create(template.indexHtml, args);
    },
    createAppJs = function (args) {

    },
    createController = function (args) {
        args.name = 'Home';
        create.create(template.controller, args);
    },
    createModel = function (args) {
        args.name = 'Regex';
        create.create(template.model, args);
    },
    install = function (dir, appName, author, email) {
        dir = dir !== (void 0) ? dir : 'sample';
        appName = dir !== (void 0) ? dir : 'sample';
        author = dir !== (void 0) ? dir : 'sample';
        email = dir !== (void 0) ? dir : 'sample@sample.com';

        var args = {
            dir: dir,
            appName: appName + "App",
            author: author,
            email: email
        };

        mkdir(dir);
        createStructure(structure, dir);
        //createGitignore();
        //createBowerrc();
        //createBowerJson(args);
        createIndexHtml(args);
        //createAppJs(args);
        createController(args);
        createModel(args);
    };

module.exports = {
    install: install
};