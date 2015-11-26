var
    gitignore = {

    },
    bowerrc = {

    },
    bowerJson = {

    },
    indexHtml = {
        type: '',
        ext: '.html',
        template: 'templates/index.html.template',
        require: ['appName'],
        outputDir: '/',
        fileName: 'index'
    },
    appJs = {

    },
    controller = {
        type: 'Controller',
        ext: '.js',
        template: 'templates/controller.js.template',
        require: ['appName','name'],
        outputDir: '/src/controllers/'
    },
    directive = {

    },
    model = {
        type: '',
        ext: '.js',
        template: 'templates/model.js.template',
        require: ['name'],
        pluralize: ['name'],
        outputDir: '/src/models/'
    },
    modelProvider = {

    },
    service = {

    },
    view = {

    },
    filter = {

    }
;
module.exports = {
    gitignore: gitignore,
    bowerrc: bowerrc,
    bowerJson: bowerJson,
    indexHtml: indexHtml,
    appJs: appJs,
    controller: controller,
    directive: directive,
    model: model,
    modelProvider: modelProvider,
    service: service,
    view: view,
    filter: filter
};