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
  vmViewCards.randomize = randomize;



  function next() {
    if (vmViewCards.cardIndex < vmViewCards.cards.length - 1)
      vmViewCards.cardIndex++;
    else
      vmViewCards.cardIndex = 0;
    vmViewCards.questionFacing = true;
  }

  function randomize() {
    let num, tempArr = [], length = vmViewCards.cards.length;
    for (var i=0; i<length; i++) {
      num = Math.floor(Math.random() * vmViewCards.cards.length);
      tempArr.push(vmViewCards.cards[num]);
      vmViewCards.cards.splice(num,1);
    }
    vmViewCards.cards = tempArr;
    console.log(vmViewCards.cards);
  }


}