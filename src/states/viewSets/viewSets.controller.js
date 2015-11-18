'use strict';

angular.module('know')

.controller('ViewSetsCtrl', ViewSetsCtrl);

ViewSetsCtrl.$inject = ['$state'];

function ViewSetsCtrl($state) {

  let vmViewSets = this;


  vmViewSets.stateName = $state.current.name;
  // console.log(vmViewSets.stateName);

}