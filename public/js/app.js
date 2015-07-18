'use strict';

(function() {
    var app = angular.module('app', [
        'ui.router',
        'ui.router.stateHelper',
        'app.controllers',
        'app.navigation'
    ]);

    var viewDir = 'views/';
    var partialViewDir = 'views/partials/';

    /* ngAnnotate zorgt ervoor dat je dit niet hoeft te declaren */
    app.config(['$stateProvider', '$urlRouterProvider', 'stateHelperProvider', function($stateProvider, $urlRouterProvider, stateHelperProvider) {
        $urlRouterProvider.otherwise('/');

        stateHelperProvider
            .state({
                name: "root",
                url: '',
                template: "<ui-view />",
                abstract: true,
                resolve: {

                },
                children: [
                    {
                        name: 'home',
                        url: '/home',
                        templateUrl: partialViewDir + 'home.html',
                        resolve: {

                        },
                        controller: "HomeCtrl",
                        controllerAs: "Home"
                    },
                    {
                        name: 'profile',
                        url: '/profile',
                        templateUrl: partialViewDir + 'profile.html',
                        resolve: {

                        },
                        controller: "ProfileCtrl",
                        controllerAs: "Profile"
                    },
                    {
                        name: 'stats',
                        url: '/stats',
                        templateUrl: partialViewDir + 'stats.html',
                        resolve: {

                        },
                        controller: "StatsCtrl",
                        controllerAs: "Stats"
                    },
                    {
                        name: 'settings',
                        url: '/settings',
                        templateUrl: partialViewDir + 'settings.html',
                        resolve: {

                        },
                        controller: "SettingsCtrl",
                        controllerAs: "Settings"
                    },
                    {
                        name: 'login',
                        url: '/login',
                        templateUrl: partialViewDir + 'login.html',
                        resolve: {

                        },
                        controller: "UserCtrl",
                        controllerAs: "User"
                    },
                    {
                        name: 'logout',
                        url: '/logout',
                        templateUrl: partialViewDir + 'logout.html',
                        resolve: {

                        },
                        controller: "UserCtrl",
                        controllerAs: "User"
                    }
                ],
            },
            {keepOriginalNames: true}
        );
    }]);

    /* test defer functionality with $q
     app.module("app").service("MyService", function($q, $http) {
     var self = this;

     self.getTroep = function() {
     var defer = $q.defer();
     //http
     $http.get('/api/test').success(function(data) {
     self.test = data;
     defer.resolve(data);
     });
     return defer.promise;
     };

     self.test = "jwz";
     });

     */

})();