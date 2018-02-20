var GameMenu = function() {};

GameMenu.prototype = {

    init: function () {
       
        this.title = game.make.sprite(game.world.centerX, (game.world.centerY-200), 'title');
        this.title.anchor.setTo(0.5);
        this.pop = game.add.audio('pop');
   },
    
    preload: function () {
        game.add.sprite(0, 0, 'background');
        game.add.existing(this.title);
        this.frog = game.add.sprite(game.world.centerX, (game.world.centerY+255), 'frog');
        this.frog.anchor.setTo(0.5);
        
    },
    
    addGameMusic: function () {
        music = game.add.audio('bgm');
        music.loop = true;
        music.volume = 0.2;
        music.play();
  },
    
    create: function () {
        this.addGameMusic();
        this.frog.inputEnabled = true;
        this.frog.events.onInputDown.addOnce(this.startGame, this);
        if (music.name !== "bgm" && playMusic) {
        music.stop();
        music = game.add.audio('bgm');
            music.volume = 0.2;
        music.loop = true;
        music.play();
    }
    game.stage.disableVisibilityChange = true;
  },
    startGame: function (pointer) {
      this.pop.play();
      game.state.start("Game");
      this.frog.kill;
  }
  };
