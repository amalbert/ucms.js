'use strict';

/**
 * Sets a field to be editable
 */
angular.module('ucmsjsApp')
  .directive('editable', function ($sce) {
    return {
      restrict: 'A', // only activate on element attribute
      require: '?ngModel', // get a hold of NgModelController
      link: function(scope, element, attrs, ngModel) {
        if(!ngModel) return; // do nothing if no ng-model

        scope.$parent.$watch('editMode', function (newval, oldval) {
          scope.editMode = newval;
          element.attr('contenteditable', scope.editMode);
        });

        scope.$watch(function () {
          return ngModel.$modelValue;
        }, function(newValue) {
          element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
        });

        element.on('keypress', function(event) {
          // unfocus element if enter is pressed
          if (event.keyCode == 13) {
            element.blur();
          }
          scope.$apply(read);
        });

        // Write data to the model
        function read() {
          var html = element.html();
          // When we clear the content editable the browser leaves a <br> behind
          if(html == '<br>' ) {
            html = '';
          }
          ngModel.$setViewValue(html);
        }
      }      
    };
  });