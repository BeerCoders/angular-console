var fs = require('fs-extra');
var create = require('./create.js');
var template = require('./template.js');
var cloner = require('./cloner.js');
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
        var clonedArgs = (cloner.cloneObject(args));
        create.create(template.gitignore, clonedArgs);
    },
    createBowerrc = function (args) {
        var clonedArgs = (cloner.cloneObject(args));
        create.create(template.bowerrc, clonedArgs);
    },
    createBowerJson = function (args) {
        var clonedArgs = (cloner.cloneObject(args));
        create.create(template.bowerJson, clonedArgs);
    },
    createIndexHtml = function (args) {
        var clonedArgs = (cloner.cloneObject(args));
        create.create(template.indexHtml, clonedArgs);
    },
    createAppJs = function (args) {
        create.create(template.appJs, args);
    },
    createController = function (args) {
        var clonedArgs = (cloner.cloneObject(args));
        clonedArgs.name = 'Home';
        create.create(template.controller, clonedArgs);
    },
    createModel = function (args) {
        var clonedArgs = (cloner.cloneObject(args));
        clonedArgs.name = 'Regex';
        create.create(template.model, clonedArgs);
        fs.exists(args.dir + '/src/models/provider/ModelProvider.js', function (exists) {
            if(exists) {
                console.log("ModelProvider.js exist")
            } else {
                create.create(template.modelProvider,clonedArgs);
            }
        });
    },
    install = function (dir, appName, version, description, license, homepage, author, email) {
        dir = dir !== (void 0) ? dir : 'sample';
        appName = appName !== (void 0) ? dir : 'sample';
        author = author !== (void 0) ? dir : 'sample';
        email = email !== (void 0) ? dir : 'sample@sample.com';
        version = version !== (void 0) ? dir : '0.0.1';
        description = description !== (void 0) ? dir : 'Sample Description';
        license = license !== (void 0) ? dir : 'MIT https://opensource.org/licenses/MIT';
        homepage = homepage !== (void 0) ? dir : 'https://github.com/BeerCoders';

        var args = {
            dir: dir,
            appName: appName + "App",
            author: author,
            email: email,
            version: version,
            description: description,
            license: license,
            homepage: homepage
        };

        mkdir(dir);
        createStructure(structure, dir);
        createGitignore(args);
        createBowerrc(args);
        createBowerJson(args);
        createIndexHtml(args);
        createAppJs(args);
        createController(args);
        createModel(args);
    };

module.exports = {
    install: install
};