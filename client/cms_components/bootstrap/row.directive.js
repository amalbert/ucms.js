'use strict';

/**
 * Renders a bootstrap row
 */
angular.module('ucmsjsApp')
  .directive('row', function ($sce) {
    return {
      restrict: 'A', // only activate on element attribute
      link: function(scope, element, attrs, ngModel) {
        element.addClass("row");
      }
    };
  });