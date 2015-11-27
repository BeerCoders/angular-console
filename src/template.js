var
    gitignore = {
        type: '',
        ext: '',
        template: 'templates/gitignore.template',
        require: [],
        pluralize: [],
        outputDir: '/',
        fileName: '.gitignore'
    },
    bowerrc = {
        type: '',
        ext: '',
        template: 'templates/bowerrc.template',
        require: [],
        pluralize: [],
        outputDir: '/',
        fileName: '.bowerrc'
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
        type: '',
        ext: '.js',
        template: 'templates/src/app.js.template',
        require: ['appName'],
        outputDir: '/src/',
        fileName: 'app'
    },
    controller = {
        type: 'Controller',
        ext: '.js',
        template: 'templates/src/controller.js.template',
        require: ['appName','name'],
        outputDir: '/src/controllers/',
        test: {
            type: 'ControllerTest',
            ext: '.js',
            require: ['appName','name'],
            template: 'templates/tests/controller.js.template',
            outputDir: '/tests/controllers/'
        }
       
    },
    directive = {

    },
    model = {
        type: '',
        ext: '.js',
        template: 'templates/src/model.js.template',
        require: ['name'],
        pluralize: ['name'],
        outputDir: '/src/models/'
    },
    modelProvider = {
        type: 'Provider',
        ext: '.js',
        template: 'templates/src/modelProvider.js.template',
        require: [],
        pluralize: [],
        outputDir: '/src/models/provider/',
        fileName: 'Model'
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