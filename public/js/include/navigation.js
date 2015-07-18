'use strict';

(function() {
    var app = angular.module('app.navigation', []);

    app.directive('navigationBar', function() {
        return {
            restrict: "E",
            templateUrl: 'views/navigation.html',
            replace: 'true',
            controller: function() {
                /* dit kan weg, vervangen door states */
                this.activeTab = 1;
                var self = this;

                this.selectTab = function(tabId) {
                    self.activeTab = tabId;
                };

                this.isSelected = function(tabId) {
                    return self.activeTab === tabId;
                };
            },
            controllerAs: "tab"
        };
    });

})();
