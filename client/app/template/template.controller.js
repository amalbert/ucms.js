'use strict';

angular.module('ucmsjsApp').controller('TemplateCtrl', function ($scope, $http, Auth, User) {
  $scope.editMode = true;
  $scope.showGrid = false;

  $scope.showTemplate = function() {
    console.log($scope.template);
  };

  $scope.template = {
    header: {
        style: "",
        appName: "ucmsjs",
        menuItems: [{
          'title': 'Home',
          'link': '/'
        }, {
          'title': 'Other',
          subItems:[{
            'title': 'Item1',
            'link': '/'
          }, {
            'title': 'Item2',
            'link': '/'
          }]
        }]
    },
    body: {
      rows: [ 
        {
          columns: [
            {
              mdCols: 3,
              style: "border-right:1px solid grey;min-height:200px;"
            },
            {
              mdCols: 9,
              style: "min-height:200px;"
            }
          ]
        }
      ]
    },
    footer: {

    }
  };

});
