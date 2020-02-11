import $ from 'jquery';

export function updateStatus(Tamagotchi) {
  setInterval(function() {
    if(Tamagotchi.foodLevel < 3) {
      $("#foodDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
      $("#mad").show();
    } else if(Tamagotchi.foodLevel <= 6) {
      $("#foodDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
      $("#mad").show();
    } else if(Tamagotchi.foodLevel > 6) {
      $("#foodDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
      $("#mad").hide();
    }
    if(Tamagotchi.sleep < 3) {
      $("#sleepDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
      $("#crying").show();
    } else if(Tamagotchi.sleep <= 6) {
      $("#sleepDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
      $("#crying").show();
    } else if(Tamagotchi.sleep > 6) {
      $("#sleepDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
      $("#crying").hide();
    }
    if(Tamagotchi.happiness < 3) {
      $("#sadDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
      $("#upset").show();
    } else if(Tamagotchi.happiness <= 6) {
      $("#sadDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
      $("#upset").show();
    } else if(Tamagotchi.happiness > 6) {
      $("#sadDiv .progress-bar").attr('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
      $("#upset").hide();
    }
    $("#foodDiv .progress-bar").attr('style', `width: ${Tamagotchi.foodLevel*10}%`);
    $("#sleepDiv .progress-bar").attr('style', `width: ${Tamagotchi.sleep*10}%`);
    $("#sadDiv .progress-bar").attr('style', `width: ${Tamagotchi.happiness*10}%`);
  }, 100);
}

export function endGame(Tamagotchi) {
  setInterval(function() {
    if (Tamagotchi.alive === false) {
      $("#death").show();
      $("#game").hide();
    }
  }, 1000);
}

export function displayStats(Choice) {
  if (Choice === "squirtle") {
    $("#info-squirtle").show();
  } else if (Choice === "bulbasaur") {
    $("#info-bulbasaur").show();
  } else if (Choice === "charmander") {
    $("#info-charmander").show();
  }
}

export function checkLevel(Tamagotchi) {
  setInterval(() => {
    Tamagotchi.level++;
    $("#currentLevel").html(Tamagotchi.level);
    if (Tamagotchi.level >= 10 && Tamagotchi.name === "squirtle") {
      let evolvedImg = "https://static.pokemonpets.com/images/monsters-images-800-800/8-Wartortle.png";
      $("#choiceImg").attr('src', evolvedImg);
    } else if (Tamagotchi.level >= 10 && Tamagotchi.name === "charmander") {
      let evolvedImg = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png";
      $("#choiceImg").attr('src', evolvedImg);
    } else if (Tamagotchi.level >= 10 && Tamagotchi.name === "bulbasaur") {
      let evolvedImg = "https://cdn.bulbagarden.net/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png";
      $("#choiceImg").attr('src', evolvedImg);
    }
  }, 1000*10);
}

export function timePlayed(Tamagotchi) {
  setInterval(() => {
    Tamagotchi.lifeTime++;
    $("#currentTime").html(Tamagotchi.lifeTime);
  }, 1000);
}