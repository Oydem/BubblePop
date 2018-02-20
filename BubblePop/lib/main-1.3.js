// Global Variables
var
  game = new Phaser.Game(1024, 768, Phaser.AUTO, 'game'),
  Main = function () {},
  gameOptions = {
    playSound: true,
    playMusic: true
  },
  musicPlayer;

Main.prototype = {
    
    preload: function () {
        game.load.image('background', 'assets/images/BG.png');
        game.load.image('loading', 'assets/images/Bubble.png');
        game.load.image('title', 'assets/images/TitleImage.png');
        game.load.script('splash', 'states/Splash-1.0.1.js');
    },

  create: function () {
      game.state.add('splash', Splash);
      game.state.start('splash');
      game.stage.forceLandscape = true;
      if (game.scale.compatibility.supportsFullScreen) {
        console.log('Fullscreen will work');
      }
  }  
    
};

game.state.add('main', Main);
game.state.start('main');