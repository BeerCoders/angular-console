/**
 * This file is part of the angular-console package.
 *
 * (c) Rafał Lorenz <vardius@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var run = function (answers) {
    "use strict";

    if (!answers.confirm) {
        console.log('Command canceled');
        return 1;
    }

    console.log(answers);
};

module.exports = {
    run: run
};
