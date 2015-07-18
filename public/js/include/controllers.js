'use strict';

(function() {
    var app = angular.module('app.controllers', []);

    app.controller('HomeCtrl', function() {
        var self = this;
    });

    app.controller('ProfileCtrl', function() {
        var self = this;
    });

    app.controller('StatsCtrl', function() {
        var self = this;
    })

    app.controller('SettingsCtrl', function() {
        var self = this;
    });

    app.controller('UserCtrl', ['$scope', function($scope) {
        var self = this;

        console.log($scope.user);
        $scope.user = {};

        self.isGuest = function() {
           return self.user.guest;
        };

        self.isAdmin= function() {
            return self.user.admin;
        };

        self.logIn = function() {
            console.log($scope.user);
            $scope.user = {
                admin: true,
                guest: false
            };
            console.log($scope.user);
        };

        self.logOut = function() {
            // LOG USER OUT
            console.log('x');
            console.log($scope.user);
            $scope.user = null;
            console.log($scope.user);
        };

    }]);
})();