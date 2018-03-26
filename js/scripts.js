var numbers = ["ace", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen","king"];
var suits = ["clubs", "diamonds", "hearts", "spades"];
var deckOfCards =[];
suits.forEach(function(suit) {
  numbers.forEach(function(number){
    deckOfCards.push(number + " of " + suit);
  });
});


$(document).ready(function(){
  deckOfCards.forEach(function(card){
      $("#cards").append("<li>" + card +"</li>");
  });

});
