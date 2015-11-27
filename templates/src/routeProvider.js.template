(function () {
    'use strict';

    angular
        .module('route-provider')
        .config(['$routeProvider', '$locationProvider', config])
    ;

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                name: 'Home',
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: '/angular/views/home.view.html',
                label: 'Home'
            })
            .otherwise('/', {
                name: 'Home',
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: '/src/views/home.view.html',
                label: 'Home'
            })
        ;

        $locationProvider.html5Mode(true);
        $locationProvider.html5Mode(true).hashPrefix('!');
    }

})();
