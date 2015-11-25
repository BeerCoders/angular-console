/**
 * This file is part of the angular-console package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var start = function () {
    "use strict";
    var generator = require('./generator.js');
    var args = process.argv.slice(2);

    if (args.length > 0) {
        generator.run({
            action: args[0],
            add: args[1],
            confirm: true
        });
    } else {
        var inquirer = require("inquirer");
        var questions = [
            {
                type: "list",
                message: "Select action",
                name: "action",
                choices: [
                    new inquirer.Separator("Project:"),
                    {
                        name: "install"
                    },
                    new inquirer.Separator("Angular:"),
                    {
                        name: "add"
                    },
                    new inquirer.Separator("Other:"),
                    {
                        name: "create"
                    }
                ]
            },
            {
                type: "list",
                name: "add",
                message: "What do you want to create?",
                choices: [
                    {
                        name: "controller"
                    },
                    {
                        name: "service"
                    },
                    {
                        name: "model"
                    }
                ],
                when: function (answers) {
                    return (answers.action === 'add');
                }
            },
            {
                type: "list",
                name: "add",
                message: "What do you want to create?",
                choices: [
                    {
                        name: "index.html"
                    },
                    {
                        name: "bower"
                    }
                ],
                when: function (answers) {
                    return (answers.action === 'create');
                }
            },
            {
                type: "confirm",
                name: "confirm",
                message: "Do you confirm action?"
            }
        ];

        inquirer.prompt(questions, function (answers) {
            generator.run(answers);
        });
    }
};

module.exports = {
    start: start
};
