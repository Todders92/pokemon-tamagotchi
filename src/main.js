import { Tamagotchi } from './tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let choice;
  let img;
  $(".card").on("click", function() {
    choice = this.id;
    $(this).addClass("clicked");
    if(choice === "bulbasaur") {
      img = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png";
      $("#charmander").removeClass("clicked");
      $("#squirtle").removeClass("clicked");
    } else if(choice === "charmander") {
      img = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png";
      $("#squirtle").removeClass("clicked");
      $("#bulbasaur").removeClass("clicked");
    } else if(choice === "squirtle") {
      img = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png";
      $("#charmander").removeClass("clicked");
      $("#bulbasaur").removeClass("clicked");
    } else {
      alert("choose a character");
    }
  });
  
  $("button#start").click(function() {
    let tamagotchi = new Tamagotchi();
    tamagotchi.addName(choice);
    $("#choices").hide();
    $("#game").show();
    $("#choiceImg").attr('src', img);

    tamagotchi.getHungry();
    tamagotchi.getSad();
    tamagotchi.getTired();
    tamagotchi.checkAlive();

    $("button#feed").click(function() {
      tamagotchi.feed();
    });

    $("button#sleep").click(function() {
      tamagotchi.bedTime();
    });

    $("button#play").click(function() {
      tamagotchi.play();
    });

    if (tamagotchi.alive === false) {
      $("button#reset").show();
      $("button#reset").click(function() {
        tamagotchi.reset();
      });
    }
  });
});