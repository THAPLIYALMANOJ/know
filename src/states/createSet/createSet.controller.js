'use strict';

angular.module('know')

.controller('CreateSetCtrl', CreateSetCtrl);

CreateSetCtrl.$inject = ['$state', 'Flashcard'];

function CreateSetCtrl($state, Flashcard) {

  let vmCreateSet = this;

  vmCreateSet.stateName = $state.current.name;
  vmCreateSet.createSet = createSet;


  // THIS NEEDS TO MAKE SURE THERE ARE NO OTHER SETS WITH THE SAME TITLE
  function createSet(setData) {
    Flashcard.addSet(createSetObject(setData));
    vmCreateSet.set = {};
    $state.go('editSet', {setTitle: setData.title});
  }

  function createSetObject(set) {
    return {
      [set.title]: {
        tags: set.tags.split(/\W*,\W*/),
        cards: []
      }
    };
  }

}