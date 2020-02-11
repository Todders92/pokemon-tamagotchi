import { Tamagotchi } from './tamagotchi.js';
import { updateStatus, endGame, displayStats } from './standalone.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



// https://pokeapi.co/api/v2/pokemon/squirtle/

$(document).ready(function() {
  let choice;
  let img;
  let choiceURL;
  let prefix;
  let request = new XMLHttpRequest();
  
  
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
    if(choice) {
      let tamagotchi = new Tamagotchi();
      tamagotchi.addName(choice);
      if (choice === "squirtle") {
        choiceURL = `https://pokeapi.co/api/v2/pokemon/squirtle/`;
        prefix = "s";
      } else if (choice === "charmander") {
        choiceURL = `https://pokeapi.co/api/v2/pokemon/charmander/`;
        prefix = "c";
      } else if (choice === "bulbasaur") {
        choiceURL = `https://pokeapi.co/api/v2/pokemon/bulbasaur/`;
        prefix = "b";
      }
      request.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      }
      request.open("GET", choiceURL ,true);
      request.send();
    
      const getElements = function(response) {
        $(`#${prefix}-type`).html(response.types[0].type.name);
        $(`#${prefix}-weight`).html(response.weight);
        for(let i = 0; i < response.moves.length; i++) {
          $(`#${prefix}-moves`).append(`<li>${response.moves[i].move.name}</li>`);
        }
      }
      displayStats(choice);
      $("#choices").hide();
      $("#game").show();
      $("#choiceImg").attr('src', img);
      updateStatus(tamagotchi);
      endGame(tamagotchi);
      tamagotchi.getHungry();
      tamagotchi.getSad();
      tamagotchi.getTired();
      tamagotchi.checkAlive();
  
      $("button#feed").click(function() {
        tamagotchi.feed();
        if (tamagotchi.busy === true) {
          $("#statuses button").addClass("busy");
          setTimeout(() => {
            $("#statuses button").removeClass("busy");
          }, 1000*2);
        }
      });
      
      $("button#sleep").click(function() {
        tamagotchi.bedTime();
        if (tamagotchi.busy === true) {
          $("#statuses button").addClass("busy");
          setTimeout(() => {
            $("#statuses button").removeClass("busy");
          }, 1000*2);
        }
      });
      
      $("button#play").click(function() {
        tamagotchi.play();
        if (tamagotchi.busy === true) {
          $("#statuses button").addClass("busy");
          setTimeout(() => {
            $("#statuses button").removeClass("busy");
          }, 1000*2);
        }
      });
    }
  });
  $("button#reset").click(function() {
    window.location.reload();
  });
});