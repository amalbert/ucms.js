'use strict';

/**
 * Renders a bootstrap row
 */
angular.module('ucmsjsApp')
  .directive('templateEditor', function () {
    return {
      restrict: 'A', // only activate on element attribute
      link: function(scope, element, attrs, ngModel) {
        scope.toggleSidebar = function() {
          var sidebar = $("#sidebar");
          var sidebarChevron = $("#sidebar-chevron");
          console.log(sidebar.width());
          if (sidebar.width() >= 298) {
            TweenLite.to(sidebar, 1, {width:30});
            TweenLite.to(sidebarChevron, 2, {className:"-=glyphicon-chevron-right"});
            TweenLite.to(sidebarChevron, 2, {className:"+=glyphicon-chevron-left"});
          } else {
            TweenLite.to(sidebar, 1, {width:300});
            TweenLite.to(sidebarChevron, 2, {className:"+=glyphicon-chevron-right"});
            TweenLite.to(sidebarChevron, 2, {className:"-=glyphicon-chevron-left"});
          }
        }
      },
      templateUrl:'components/template-editor/template-editor.html'
    };
  });