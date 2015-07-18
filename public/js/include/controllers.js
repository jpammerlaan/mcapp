'use strict';

(function() {
    var app = angular.module('app.controllers', []);

    app.controller('UserCtrl', function() {
        var self = this;

        self.user = {};

        self.isGuest = function() {
           return self.user.guest;
        };

        self.isAdmin= function() {
            return self.user.admin;
        };

        self.logIn = function() {
            self.user = {
                admin: true,
                guest: false
            };
        };

        self.logOut = function() {
            // LOG USER OUT
            self.user = null;
        };
    });
})();