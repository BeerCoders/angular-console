(function () {
    'use strict';

    angular
        .module('models')
        .factory('RegexModel', Regex);

    Regex.$inject = [
        'ModelProvider'
    ];

    function Regex(ModelProvider) {

        var model = ModelProvider.getModel('/regexes/:id');

        function getAll(params) {
            return model.getAll(params);
        }

        function getById(id) {
            return model.getById(id);
        }

        function create(data) {
            return model.create(data);
        }

        function update(id, data) {
            return model.update(id, data);
        }

        function remove(id) {
            return model.remove(id);
        }

        var service = {};

        service.getAll = getAll;
        service.getById = getById;
        service.create = create;
        service.update = update;
        service.remove = remove;

        return service;
    }

})();
