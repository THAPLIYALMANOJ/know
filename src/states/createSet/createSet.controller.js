'use strict';

angular.module('know')

.controller('CreateSetCtrl', CreateSetCtrl);

CreateSetCtrl.$inject = ['$state', 'Flashcard'];

function CreateSetCtrl($state, Flashcard) {

  let vmCreateSet = this;

  vmCreateSet.stateName = $state.current.name;
  vmCreateSet.createSet = createSet;



  function createSet(setData) {
    Flashcard.addSet(createSetObject(setData));
    vmCreateSet.set = {};
  }

  function createSetObject(set) {
    return {
      [set.title]: {
        tags: set.tags,
        cards: []
      }
    };
  }

}