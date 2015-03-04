'use strict';

/**
 * Sets a link to be editable
 */
angular.module('ucmsjsApp')
  .directive('link', function () {
    return {
      restrict: 'A', // only activate on element attribute
      //require: '?ngModel'/*, '^editable'*/, // get a hold of NgModelController and editable directive
      templateUrl: 'cms_components/editable/simpleLink.html',
      replace: true,
      scope: {item:'=link'},
      link: function(scope, element, attrs) {
        scope.$parent.$watch('editMode', function (newval, oldval) {
          scope.editMode = newval;
        });

        function preventEvent(e) {
          e.preventDefault();
          e.stopPropagation();
        }

        var popover = element.children('[editable]').popover({
            trigger: 'manual',
            html: true,
            title: function () {
                return 'title';
            },
            content: function () {
                return $(this).parent().find('.popover-content').html();
            },
            placement: 'bottom'
          });

        element.on('click', function(e) {
          preventEvent(e);
        });
        element.on('focus', function(e) {
          popover.popover('show');
        });
        element.on('blur', function(e) {
          popover.popover('hide');
        });

      }
    };
  });