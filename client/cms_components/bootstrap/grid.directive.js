'use strict';

/**
 * Renders a bootstrap row
 */
angular.module('ucmsjsApp')
  .directive('grid', function ($document) {
    return {
      restrict: 'A', // only activate on element attribute
      require: '?ngModel', // get a hold of NgModelController
      link: function(scope, element, attrs, ngModel) {
        scope.$watch(function () {
          return ngModel.$modelValue;
        }, function(newValue) {
          scope.showGrid = newValue;
          toggleGrid(newValue);
        });

        function toggleGrid(value) {
          if (!value) {
            $(".grid-root").remove();
          } else {
            $("<div class=\"container grid-root\"><div class=\"grid\"></div><div class=\"grid\"></div><div class=\"grid\"></div><div class=\"grid\"></div><div class=\"grid\"></div><div class=\"grid\"></div><div class=\"grid\"></div><div class=\"grid\"></div><div class=\"grid\"></div><div class=\"grid\"></div><div class=\"grid\"></div><div class=\"grid grid-right\"></div></div>").prependTo(".template-root");
          }
        }
      },
    };
  });