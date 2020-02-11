import { Tamagotchi } from './tamagotchi.js';
import { updateStatus, endGame, displayStats, checkLevel, timePlayed, addPotion, addCandy, addLevel } from './standalone.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let choice;
  let img;
  let choiceURL;
  let secondURL;
  let thirdURL;
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
      };
      
      request.open("GET", choiceURL ,true);
      request.send();
    
      const getElements = function(response) {
        $(`#${prefix}-name`).html(response.name);
        $(`#${prefix}-type`).html(response.types[0].type.name);
        $(`#${prefix}-weight`).html(response.weight);
        for(let i = 0; i < response.moves.length; i++) {
          $(`#${prefix}-moves`).append(`<li>${response.moves[i].move.name}</li>`);
        }
      };

      setTimeout(() => {
        let secondRequest = new XMLHttpRequest();
        if (choice === "squirtle") {
          secondURL = `https://pokeapi.co/api/v2/pokemon/wartortle/`;
          prefix = "s";
        } else if (choice === "charmander") {
          secondURL = `https://pokeapi.co/api/v2/pokemon/charmeleon/`;
          prefix = "c";
        } else if (choice === "bulbasaur") {
          secondURL = `https://pokeapi.co/api/v2/pokemon/ivysaur/`;
          prefix = "b";
        }
        secondRequest.onreadystatechange = function() {
          if(this.readyState === 4 && this.status === 200) {
            const secondResponse = JSON.parse(this.responseText);
            getSecondElements(secondResponse);
          }
        };
        
        secondRequest.open("GET", secondURL ,true);
        secondRequest.send();
      
        const getSecondElements = function(secondResponse) {
          $(`#${prefix}-name`).html(secondResponse.name);
          $(`#${prefix}-type`).html(secondResponse.types[0].type.name);
          $(`#${prefix}-weight`).html(secondResponse.weight);
          for(let i = 0; i < secondResponse.moves.length; i++) {
            $(`#${prefix}-moves`).append(`<li>${secondResponse.moves[i].move.name}</li>`);
          }
        };
      }, 1000*90);

      setTimeout(() => {
        let thirdRequest = new XMLHttpRequest();
        if (choice === "squirtle") {
          thirdURL = `https://pokeapi.co/api/v2/pokemon/blastoise/`;
          prefix = "s";
        } else if (choice === "charmander") {
          thirdURL = `https://pokeapi.co/api/v2/pokemon/charizard/`;
          prefix = "c";
        } else if (choice === "bulbasaur") {
          thirdURL = `https://pokeapi.co/api/v2/pokemon/venusaur/`;
          prefix = "b";
        }
        thirdRequest.onreadystatechange = function() {
          if(this.readyState === 4 && this.status === 200) {
            const thirdResponse = JSON.parse(this.responseText);
            getThirdElements(thirdResponse);
          }
        };
        
        thirdRequest.open("GET", thirdURL ,true);
        thirdRequest.send();
      
        const getThirdElements = function(thirdResponse) {
          $(`#${prefix}-name`).html(thirdResponse.name);
          $(`#${prefix}-type`).html(thirdResponse.types[0].type.name);
          $(`#${prefix}-weight`).html(thirdResponse.weight);
          for(let i = 0; i < thirdResponse.moves.length; i++) {
            $(`#${prefix}-moves`).append(`<li>${thirdResponse.moves[i].move.name}</li>`);
          }
        };
      }, 1000*190);

      displayStats(choice);
      checkLevel(tamagotchi);
      timePlayed(tamagotchi);
      addPotion(tamagotchi);
      addCandy(tamagotchi);
      addLevel(tamagotchi);

      $("#extras").on('click', 'button#potion', function() {
        tamagotchi.usePotion();
        $(this).hide();
      });

      $("#extras").on('click', 'button#candy', function() {
        tamagotchi.useCandy();
        $(this).hide();
      });

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