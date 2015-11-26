var fs = require('fs-extra');
var pluralizer = require('pluralize');

var create = function(template, args) {

    args = checkPluralize(template.pluralize, args);

    if(checkArgs(template.require, args)) {
        fs.readFile(template.template, "UTF-8", function (err, data) {
            if (err) {
                console.log(err);
            } else {
                var search;
                for (search in args) {
                    var re = new RegExp("{{" + search + "}}", 'g');
                    data = data.replace(re, args[search]);
                }
                var fileName = (template.fileName) ? template.fileName : args.name;
                fs.outputFile(args.dir + template.outputDir + fileName + template.type + template.ext, data, function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
                });
            }

        });
    } else {
        console.log('Wrong args');
    }
};

var checkArgs = function(require, args) {
    var search;

    for (search in require) {
        if(!args.hasOwnProperty(require[search])){
            return false;
        }
    }
    
    return true;
};

var checkPluralize = function(pluralize, args) {
    var search;

    for (search in pluralize) {
        if(args.hasOwnProperty(pluralize[search])){
            var key = pluralize[search] + 'Plural';
            args[key] = pluralizer(args[pluralize[search]]).toLowerCase();
        } else {
            return false;
        }
    }

    return args;
};

module.exports = {
    create: create
};