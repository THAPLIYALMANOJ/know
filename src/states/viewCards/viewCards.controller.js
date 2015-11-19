'use strict';

angular.module('know')

.controller('ViewCardsCtrl', ViewCardsCtrl);

ViewCardsCtrl.$inject = ['$stateParams', 'Flashcard'];

function ViewCardsCtrl($stateParams, Flashcard) {

  let vmViewCards = this;

  vmViewCards.setTitle = $stateParams.setTitle;
  vmViewCards.cards = Flashcard.getSet(vmViewCards.setTitle).cards;
  vmViewCards.questionFacing = true;
  vmViewCards.cardIndex = 0;
  vmViewCards.flip = () => vmViewCards.questionFacing = !vmViewCards.questionFacing;
  vmViewCards.next = next;



  function next() {
    if (vmViewCards.cardIndex < vmViewCards.cards.length - 1)
      vmViewCards.cardIndex++;
    else
      vmViewCards.cardIndex = 0;
    vmViewCards.questionFacing = true;
  }


}