var Swipe = function(game) {};
var score = 10;
    var scoreText;
    var gameori;
    var gameacc;
    var k = 0;
    var gamestarttime = new Date();
    console.log(gamestarttime);
    var ScrnXY = ["StartTime: "+gamestarttime+" Touch Screen X and Y"];
    //var data = [Date.now()];
Game.prototype = {
    
    preload: function () {
        score = 10;
        this.backg = game.add.sprite(0, 0, 'background');
        this.backg.tint = 
        //this.backg.tint = 0xFFFFFF;
        this.pop = game.add.audio('pop');
        this.frog = game.add.sprite(game.world.centerX, (game.world.centerY), 'frog');
        this.frog.anchor.setTo(0.5);
        //
        this.frogmouth = game.add.sprite(game.world.centerX, (game.world.centerY), 'frogmouth');
        this.frogmouth.anchor.setTo(0.5);
        this.frog.addChild(this.frogmouth);
        this.frogmouth.kill();
        this.bubble1 = game.add.sprite((game.world.width*0.85), (game.world.height*0.8), 'frog');
        game.physics.arcade.enable(this.bubble1);
        this.bubble1.anchor.setTo(0.5);
        this.bubble1.scale.setTo(0.5, 0.5);
        this.bubble2 = game.add.sprite((game.world.width*0.15), (game.world.height*0.8), 'frog');
        game.physics.arcade.enable(this.bubble2);
        this.bubble2.anchor.setTo(0.5);
        this.bubble2.scale.setTo(0.5, 0.5);
        this.bubble3 = game.add.sprite((game.world.width*0.85), (game.world.height*0.2), 'frog');
        game.physics.arcade.enable(this.bubble3);
        this.bubble3.anchor.setTo(0.5);
        this.bubble4.scale.setTo(0.5, 0.5);
        this.bubble4 = game.add.sprite((game.world.width*0.15), (game.world.height*0.2), 'frog');
        game.physics.arcade.enable(this.bubble4);
        this.bubble4.anchor.setTo(0.5);
        this.bubble4.scale.setTo(0.5, 0.5);
        //this.frogmouth = game.add.sprite(game.world.centerX, (game.world.centerY+255), 'frogmouth');
        //this.frogmouth.anchor.setTo(0.5);
        //this.frogmouth.kill();
        this.bubble5 = game.add.sprite(game.world.centerX, (game.world.centerY+255), 'bubble');
        game.physics.arcade.enable(this.bubble5);
        this.bubble5.anchor.setTo(0.5);
        this.bubble5.scale.setTo(1.5, 1.5);
        this.bubble5.kill();
        scoreText = game.add.text(16, 16, 'Bubbles Left: 40', { fontSize: '32px', fill: 'white' });
        },
    
    //PopBubble1: function () {
      //this.frogmouth.kill();
      //this.bubble5.kill();
      //this.tongueb1 = game.add.sprite((game.world.centerX-23), (game.world.centerY+187), 'tongueb1');
      //this.tongueb1.animations.add('pop1a', //Phaser.Animation.generateFrameNames('FrogTongueLB', 0, 6, '', 4), 30, false);
      //this.tongueb1.animations.play('pop1a');
      //this.pop.play();
      //this.bubble1.kill();
      //this.tongueb1.animations.add('pop1b', //Phaser.Animation.generateFrameNames('FrogTongueLB', 6, 12, '', 4), 30, false);
      //this.tongueb1.animations.play('pop1b');
      //this.tongueb1.kill();
      //console.log('bubble1 popped');
      //ScrnXY.push('b1'+' '+Date.now()+' '+game.input.x+' '+game.input.y);
      //score -= 1;
      //scoreText.text = 'Bubbles Left: ' + score;
    //},
    
    
   // PopBubble5: function () {
     // this.pop.play();
      //this.bubble5.kill();
      //console.log('bubble4 popped');
      //ScrnXY.push('b5'+' '+Date.now()+' '+game.input.x+' '+game.input.y);
    //},
    
    
    //ReviveBubble1: function () {
     // this.bubble1.revive();
      //console.log('bubble1 revived');
    //},
    
    Pop: function () {
      this.pop.play();
    },
    
    Blow: function () {
      this.pop.play();
    },
    
    //Frogblow: function () {
     // this.frogmouth = game.add.sprite(game.world.centerX, (game.world.centerY+255), 'frogmouth');
     // this.frogmouth.anchor.setTo(0.5);
     // this.Blow();
     //   this.bubble5 = game.add.sprite(game.world.centerX, (game.world.centerY+255), 'bubble');
      //  game.physics.arcade.enable(this.bubble5);
     //   this.bubble5.anchor.setTo(0.5);
      //  this.bubble5.scale.setTo(1.5, 1.5)
        //this.bubble1.revive();
        //this.bubble1.tint = Math.random() * 0xffffff;
        //this.bubble2.revive();
        //this.bubble2.tint = Math.random() * 0xffffff;
        //this.bubble3.revive();
        //this.bubble3.tint = Math.random() * 0xffffff;
        //this.bubble4.revive();
        //this.bubble4.tint = Math.random() * 0xffffff;
        //console.log('bubbles reset');
        //this.frog.inputEnabled = false;
 //   },
    
    NextLevel: function () {
      this.frogLU = game.add.sprite(game.world.centerX, (game.world.centerY), 'LU-background');
      this.frogLU.anchor.setTo(0.5);
      this.frogLU.scale.setTo(1, 1);
      //this.LUText = game.add.text(game.world.centerX, game.world.centerY, 'Level Up!', { fontSize: '64px', fill: 'white' });
      //this.LUText.anchor.setTo(0.5);
      this.frogLU.inputEnabled = true;
      this.frogLU.events.onInputDown.addOnce(this.LU, this);
    },
    
    LU: function () {
      this.frogLU.kill();
      //this.LUText.destroy();
      game.state.start("LevelUp");
    },
    
    create: function () {
        //this.frog.addChild(this.frogmouth);
        //this.frog.inputEnabled = true;
        //this.frog.events.onInputDown.add(this.Blow, this);
    //    this.bubble1.inputEnabled = true;
    //    this.bubble1.events.onInputDown.add(this.PopBubble1, this);
    //    this.bubble2.inputEnabled = true;
    //    this.bubble2.events.onInputDown.add(this.PopBubble2, this);
    //    this.bubble3.inputEnabled = true;
    //    this.bubble3.events.onInputDown.add(this.PopBubble3, this);
    //    this.bubble4.inputEnabled = true;
      //  this.bubble4.events.onInputDown.add(this.PopBubble4, this);
    //    this.bubble5.inputEnabled = true;
       // this.bubble5.events.onInputDown.add(this.ReviveBubbles, this);
        if (music.name !== "bgm" && playMusic) {
        music.stop();
        music = game.add.audio('bgm');
        music.loop = true;
            music.volume = 0.2;
        music.play();
        }
    },
    
    submitscore: function () {
        var Scr = JSON.stringify(ScrnXY);
        var fd3 = new FormData();
        fd3.append("Scr", Scr);
        var xhr3 = new XMLHttpRequest();

        xhr3.open('POST', 'postc.php', true);
        xhr3.send(fd3);
        console.log('posted ScrXY');
        ScrnXY = [Date.now()+' '+game.input.x+' '+game.input.y];

},

    update: function () {
      if (!this.bubble1.alive && !this.bubble2.alive && !this.bubble3.alive && !this.bubble4.alive && !this.bubble5.alive) {
        this.bubble5.revive();
      }
      
      if (score == 0) {
        this.submitscore();
        score = 30;
        this.NextLevel();
      }
      }
      
      
};
//setInterval(function(){data.push(Date.now());console.log(data);}, 1000);