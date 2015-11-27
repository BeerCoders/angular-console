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
        type: '',
        ext: '.json',
        template: 'templates/bower.json.template',
        require: ['appName', 'version', 'author', 'email', 'description', 'license', 'homepage' ],
        pluralize: [],
        outputDir: '/',
        fileName: 'bower'
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
        type: 'Provider',
        ext: '.js',
        template: 'templates/modelProvider.js.template',
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