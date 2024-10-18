var won = 0;
onEvent("start", "click", function( ) {
  setScreen("1iraqY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/1outof10.mp3", false);
  }, 500);
});
onEvent("no1", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("yes1", "click", function( ) {
  setScreen("2omanN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/2outof10.mp3", false);
  }, 500);
});
onEvent("no2", "click", function( ) {
  setScreen("3saudiarabiaN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/3outof10.mp3", false);
  }, 500);
});
onEvent("yes2", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("no3", "click", function( ) {
  setScreen("4yemenY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/4outof10.mp3", false);
  }, 500);
});
onEvent("yes3", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("no4", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("yes4", "click", function( ) {
  setScreen("5qatarY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/5outof10.mp3", false);
  }, 500);
});
onEvent("no5", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("yes5", "click", function( ) {
  setScreen("6syriaN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/6outof10.mp3", false);
  }, 500);
});
onEvent("no6", "click", function( ) {
  setScreen("7egyptY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/7outof10.mp3", false);
  }, 500);
});
onEvent("yes6", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("no7", "click", function( ) {
  setScreen("lose");
  playSound("assets/youalmosthadit.mp3", false);
});
onEvent("yes7", "click", function( ) {
  setScreen("8bahrainY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/8outof10.mp3", false);
  }, 500);
});
onEvent("no8", "click", function( ) {
  setScreen("lose");
  playSound("assets/youalmosthadit.mp3", false);
});
onEvent("yes8", "click", function( ) {
  setScreen("9libyaN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/9outof10.mp3", false);
  }, 500);
});
onEvent("no9", "click", function( ) {
  setScreen("l10sudanN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/lastquestion.mp3", false);
  }, 500);
});
onEvent("yes9", "click", function( ) {
  setScreen("lose");
  playSound("assets/youalmosthadit.mp3", false);
});
onEvent("no10", "click", function( ) {
  if (won >= 1) {
    setScreen("win");
    playSound("assets/category_explosion/8bit_explosion.mp3", false);
    setTimeout(function() {
      playSound("assets/youwon.mp3", false);
    }, 500);
  }
  if (won == 0) {
    setScreen("unlockhardmode");
    playSound("assets/category_explosion/8bit_explosion.mp3", false);
    setTimeout(function() {
      playSound("assets/unlockhardmode.mp3", false);
    }, 500);
    won = won + 1;
  }
});
onEvent("yes10", "click", function( ) {
  setScreen("lose");
  playSound("assets/youalmosthadit.mp3", false);
});
onEvent("button1", "click", function( ) {
  if (won == 1) {
    setScreen("MainMenuHard");
  }
  if (won >= 2) {
    setScreen("MainMenuExtraHard");
  }
});
onEvent("tryagain", "click", function( ) {
  if (won == 0) {
    setScreen("FQMainMenu");
  }
  if (won == 1) {
    setScreen("MainMenuHard");
  }
  if (won >= 2) {
    setScreen("MainMenuExtraHard");
  }
});
onEvent("no11", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("yes11", "click", function( ) {
  setScreen("12lithuaniaY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/2outof10.mp3", false);
  }, 500);
});
onEvent("no12", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("yes12", "click", function( ) {
  setScreen("13liberiaN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/3outof10.mp3", false);
  }, 500);
});
onEvent("no13", "click", function( ) {
  setScreen("14mexicoN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/4outof10.mp3", false);
  }, 500);
});
onEvent("yes13", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("no14", "click", function( ) {
  setScreen("15brazilN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/5outof10.mp3", false);
  }, 500);
});
onEvent("yes14", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("no15", "click", function( ) {
  setScreen("16marshallY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/6outof10.mp3", false);
  }, 500);
});
onEvent("yes15", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("no16", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("yes16", "click", function( ) {
  setScreen("17botswanaN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/7outof10.mp3", false);
  }, 500);
});
onEvent("no17", "click", function( ) {
  setScreen("18franceY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/8outof10.mp3", false);
  }, 500);
});
onEvent("yes17", "click", function( ) {
  setScreen("lose");
  playSound("assets/youalmosthadit.mp3", false);
});
onEvent("no18", "click", function( ) {
  setScreen("lose");
  playSound("assets/youalmosthadit.mp3", false);
});
onEvent("yes18", "click", function( ) {
  setScreen("19namibiaY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/9outof10.mp3", false);
  }, 500);
});
onEvent("no19", "click", function( ) {
  setScreen("lose");
  playSound("assets/youalmosthadit.mp3", false);
});
onEvent("yes19", "click", function( ) {
  setScreen("20samoaY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/lastquestion.mp3", false);
  }, 500);
});
onEvent("no20", "click", function( ) {
  setScreen("lose");
  playSound("assets/youalmosthadit.mp3", false);
});
onEvent("yes20", "click", function( ) {
  setScreen("unlockextrahardmode");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/unlockextrahardmode.mp3", false);
  }, 500);
  won = won + 1;
});
onEvent("startextrahard", "click", function( ) {
  setScreen("21myanmarY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/1outof20.mp3", false);
  }, 500);
});
onEvent("no21", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("yes21", "click", function( ) {
  setScreen("22ecuadorY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/2outof20.mp3", false);
  }, 500);
});
onEvent("no22", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("yes22", "click", function( ) {
  setScreen("23northmacedoniaN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/3outof20.mp3", false);
  }, 500);
});
onEvent("no23", "click", function( ) {
  setScreen("24lebanonY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/4outof20.mp3", false);
  }, 500);
});
onEvent("yes23", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("no24", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("yes24", "click", function( ) {
  setScreen("25palestineY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/5outof20.mp3", false);
  }, 500);
});
onEvent("no25", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("yes25", "click", function( ) {
  setScreen("26belgiumN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/6outof20.mp3", false);
  }, 500);
});
onEvent("no26", "click", function( ) {
  setScreen("27luxembourgN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/7outof20.mp3", false);
  }, 500);
});
onEvent("yes26", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("no27", "click", function( ) {
  setScreen("28maldivesN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/8outof20.mp3", false);
  }, 500);
});
onEvent("yes27", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("no28", "click", function( ) {
  setScreen("29moldovaN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/9outof20.mp3", false);
  }, 500);
});
onEvent("yes28", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("no29", "click", function( ) {
  setScreen("30ukraineY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/10outof20.mp3", false);
  }, 500);
});
onEvent("yes29", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("no30", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("yes30", "click", function( ) {
  setScreen("31kazakhstanY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/11outof20.mp3", false);
  }, 500);
});
onEvent("no31", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("yes31", "click", function( ) {
  setScreen("32slovakiaN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/12outof20.mp3", false);
  }, 500);
});
onEvent("no32", "click", function( ) {
  setScreen("33philippinesN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/13outof20.mp3", false);
  }, 500);
});
onEvent("yes32", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("no33", "click", function( ) {
  setScreen("34denmarkY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/14outof20.mp3", false);
  }, 500);
});
onEvent("yes33", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("no34", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("yes34", "click", function( ) {
  setScreen("35italyY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/15outof20.mp3", false);
  }, 500);
});
onEvent("no35", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("yes35", "click", function( ) {
  setScreen("36indiaN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/16outof20.mp3", false);
  }, 500);
});
onEvent("no36", "click", function( ) {
  setScreen("37polandN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/17outof20.mp3", false);
  }, 500);
});
onEvent("yes36", "click", function( ) {
  setScreen("lose");
  playSound("assets/youlost.mp3", false);
});
onEvent("no37", "click", function( ) {
  setScreen("38andorraY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/18outof20.mp3", false);
  }, 500);
});
onEvent("yes37", "click", function( ) {
  setScreen("lose");
  playSound("assets/youalmosthadit20.mp3", false);
});
onEvent("no38", "click", function( ) {
  setScreen("lose");
  playSound("assets/youalmosthadit20.mp3", false);
});
onEvent("yes38", "click", function( ) {
  setScreen("39bulgariaN");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/19outof20.mp3", false);
  }, 500);
});
onEvent("no39", "click", function( ) {
  setScreen("40nauruY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/lastquestion20.mp3", false);
  }, 500);
});
onEvent("yes39", "click", function( ) {
  setScreen("lose");
  playSound("assets/youalmosthadit20.mp3", false);
});
onEvent("no40", "click", function( ) {
  setScreen("lose");
  playSound("assets/youalmosthadit20.mp3", false);
});
onEvent("yes40", "click", function( ) {
  setScreen("specialprize");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/youdidit.mp3", false);
  }, 500);
  won = won + 1;
});
onEvent("strthard", "click", function( ) {
  setScreen("11timorY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/1outof10.mp3", false);
  }, 500);
});
onEvent("buttonmh", "click", function( ) {
  setScreen("MainMenuHard");
});
onEvent("strtno", "click", function( ) {
  setScreen("1iraqY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/1outof10.mp3", false);
  }, 500);
});
onEvent("button2", "click", function( ) {
  setScreen("MainMenuExtraHard");
});
onEvent("button3", "click", function( ) {
  setScreen("MainMenuExtraHard");
});
onEvent("starthard", "click", function( ) {
  setScreen("11timorY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/1outof10.mp3", false);
  }, 500);
});
onEvent("startnormal", "click", function( ) {
  setScreen("1iraqY");
  playSound("assets/category_explosion/8bit_explosion.mp3", false);
  setTimeout(function() {
    playSound("assets/1outof10.mp3", false);
  }, 500);
});
