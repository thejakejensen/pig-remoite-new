// user interface  (imports)
import { Player } from './dicey.js';
import { Game } from './dicey.js';

import 'bootstrap';
import './styles.css';
import $ from 'jquery';


$(document).ready(function(){
  var game = new Game();
  $("#newGame").click(function(event){
    event.preventDefault();
    var player1 = new Player($("input#player1Name").val());
    var player2 = new Player($("input#player2Name").val());

    $("#player1name").text(player1.name);
    $("#player2name").text(player2.name);
  });
  $("#roll").click(function(){
    game.rollDie();
    $("#round").text(game.currentPlayer.roundScore)
  });
  $("#hold").click(function(){
    game.hold();
    $("#round").text(game.currentPlayer.roundScore);
    $("#" + game.currentPlayer.name).text(game.currentPlayer.gameScore);
    game.switchPlayer();

  });
});
