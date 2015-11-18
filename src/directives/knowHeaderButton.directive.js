'use strict';

angular.module('know')

.directive('knowHeaderButton', knowHeaderButton);

knowHeaderButton.$inject = ['$state'];

function knowHeaderButton($state) {

  return {
    restrict: 'E',
    template: "<button class='button button-clear button-dark'>{{text}}</button>",
    scope: {
      text: '@',
      routeTo: '@',
      currentState: '='
    },
    link(scope, elem, attrs) {
      elem.bind('click', () => {
        if (scope.routeTo !== scope.currentState)
          $state.go(scope.routeTo);
      });
    }
  };  

}

