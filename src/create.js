var fs = require('fs-extra');

var create = function(template,args) {
    if(checkArgs(template.require,args)) {
        fs.readFile(template.template, function (err, data) {
            if (err) throw err;
            for (search in args) {

            }
            console.log(data);
        });
    }
};

module.exports = {
    create: create
};