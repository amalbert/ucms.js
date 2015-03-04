'use strict';

angular.module('ucmsjsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/template', {
        templateUrl: 'app/template/template.html',
        controller: 'TemplateCtrl'
      });
  });