'use strict';

/**
 * Renders a bootstrap row
 */
angular.module('ucmsjsApp')
  .directive('column', function ($sce) {
    return {
      restrict: 'A', // only activate on element attribute
      require: '?ngModel', // get a hold of NgModelController
      link: function(scope, element, attrs, ngModel) {
        if(!ngModel) return; // do nothing if no ng-model
        
        scope.$watch(function () {
          return ngModel.$modelValue;
        }, function(newValue) {
          if (ngModel.$viewValue.lgCols)
            element.addClass("col-lg-" + ngModel.$viewValue.lgCols);
          if (ngModel.$viewValue.mdCols)
            element.addClass("col-md-" + ngModel.$viewValue.mdCols);
          if (ngModel.$viewValue.smCols)
            element.addClass("col-sm-" + ngModel.$viewValue.smCols);
          if (ngModel.$viewValue.xsCols)
            element.addClass("col-xs-" + ngModel.$viewValue.xsCols);
          element.attr('style', ngModel.$viewValue.style);
        });
      }
    };
  });