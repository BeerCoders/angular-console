(function () {
    'use strict';

    angular
        .module('models')
        .factory('ModelProvider', ModelProvider);

    ModelProvider.$inject = [
        '$resource',
        'ObjectService',
        'CONFIG'
    ];

    function ModelProvider($resource, ObjectService, CONFIG) {

        function Model(path) {
            angular.extend(this, {
                path: path,
                resource: updateResource(path)
            });
        }

        Model.prototype = {
            path: '',
            resource: {},
            getAll: getAll,
            getById: getById,
            create: create,
            update: update,
            remove: remove
        };

        function getAll(params) {
            var self = this;

            var model = self.resource.query((typeof params === 'undefined' ? {} : params), onSuccess, onError);

            return ObjectService.returnPromise(model);
        }

        function getById(id) {
            var self = this;
            var model = self.resource.get({id: id}, onSuccess, onError);

            return ObjectService.returnPromise(model);
        }

        function create(data) {
            var self = this;
            var model = new self.resource(data);

            return model.$save().then(onSuccess, onError);
        }

        function update(id, data) {
            var self = this;
            data.id = id;
            var model = new self.resource(data);

            return model.$update().then(onSuccess, onError);
        }

        function remove(id) {
            var self = this;
            var data = {id: id};
            var model = new self.resource(data);

            return model.$delete().then(onSuccess, onError);
        }


        function updateResource(path) {
            if (typeof path === 'undefined') {
                path = this.path;
            }

            if (path.length > 0) {
                return getResource(path);
            }

            return {};
        }

        function getResource(path) {
            return $resource(CONFIG.url + path, {id: '@id'}, {
                'update': {
                    method: 'PUT'
                },
                'get': {
                    method: 'GET'
                },
                'save': {
                    method: 'POST'
                },
                'query': {
                    method: 'GET'
                },
                'remove': {
                    method: 'DELETE'
                },
                'delete': {
                    method: 'DELETE'
                }
            });
        }

        function onSuccess(response) {
            if (ObjectService.checkPropertyExistence(response, 'data')) {
                return response.data()
            }

            return response;
        }

        function onError(response) {
            return response;
        }


        function getModel(path) {
            return new Model(path);
        }

        var service = {};

        service.getModel = getModel;

        return service;
    }

})();