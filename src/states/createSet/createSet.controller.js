'use strict';

angular.module('know')

.controller('CreateSetCtrl', CreateSetCtrl);

CreateSetCtrl.$inject = ['$state', 'Flashcard'];

function CreateSetCtrl($state, Flashcard) {

  let vmCreateSet = this;

  vmCreateSet.stateName = $state.current.name;
  vmCreateSet.createSet = createSet;
  vmCreateSet.validateTitle = validateTitle;
  vmCreateSet.badTitle = false;


  // THIS NEEDS TO MAKE SURE THERE ARE NO OTHER SETS WITH THE SAME TITLE
  function createSet(setData, isValid) {
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

  function validateTitle(title) {
    let flashcards = Flashcard.get();
    for (var flashTitle in flashcards) {
      if (flashTitle === title) return vmCreateSet.badTitle = true;
    }
    vmCreateSet.badTitle = false;
  }

}