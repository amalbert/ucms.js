'use strict';

/**
 * Renders a bootstrap row
 */
angular.module('ucmsjsApp')
  .directive('navbar', function ($location) {
    return {
      restrict: 'A', // only activate on element attribute
      scope: {navbar: '='},
      link: function(scope, element, attrs) {
        function preventEvent(event) {
          event.preventDefault();
          event.stopPropagation();
        };

        // in order to let sub-directives access the edit mode
        scope.$parent.$watch('editMode', function(newval, oldval){
           scope.editMode = newval;
        });

        scope.isRouteActive = function(route) {
          return route === $location.path();
        };

        scope.addLink = function(e) {
          preventEvent(e);
          scope.navbar.menuItems.push({
            'title': 'New link',
            'link': '/'
          });
        };

        scope.addDropdown = function(e) {
          preventEvent(e);
          scope.navbar.menuItems.push({
            'title': 'New dropdown',
            subItems:[{
              'title': 'New link',
              'link': '/'
            }]
          });
        };

        scope.isNavbarCollapsed = true;
      },
      templateUrl:'cms_components/navbar/navbar.html'
    };
  });