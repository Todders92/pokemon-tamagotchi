import { Tamagotchi } from './tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function updateStatus(Tamagotchi) {
  setInterval(function() {
    if(Tamagotchi.foodLevel < 3) {
      $("#foodDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
    } else if(Tamagotchi.foodLevel <= 6) {
      $("#foodDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
    } else if(Tamagotchi.foodLevel > 6) {
      $("#foodDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
    }
    if(Tamagotchi.sleep < 3) {
      $("#sleepDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
    } else if(Tamagotchi.sleep <= 6) {
      $("#sleepDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
    } else if(Tamagotchi.sleep > 6) {
      $("#sleepDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
    }
    if(Tamagotchi.happiness < 3) {
      $("#sadDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
    } else if(Tamagotchi.happiness <= 6) {
      $("#sadDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
    } else if(Tamagotchi.happiness > 6) {
      $("#sadDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
    }
    $("#foodDiv .progress-bar").attr('style', `width: ${Tamagotchi.foodLevel*10}%`);
    $("#sleepDiv .progress-bar").attr('style', `width: ${Tamagotchi.sleep*10}%`);
    $("#sadDiv .progress-bar").attr('style', `width: ${Tamagotchi.happiness*10}%`);
  }, 1000);
}

function endGame(Tamagotchi) {
  setInterval(function() {
    if (Tamagotchi.alive === false) {
      $("#death").show();
      $("#game").hide();
    }
  }, 1000);
}

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
    updateStatus(tamagotchi);
    endGame(tamagotchi);
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

  });
  $("button#reset").click(function() {
    tamagotchi.reset();
  });
});