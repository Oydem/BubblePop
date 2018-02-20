var LevelUp3 = function(game) {};
var score = 30;
    var scoreText;
    var levelupstarttime = new Date();
    var ScrnXY2 = ["StartTime: "+levelupstarttime+" Touch Screen X and Y"];
LevelUp3.prototype = {
    
    preload: function () {
        score = 30;
        game.add.sprite(0, 0, 'background');
        this.pop = game.add.audio('pop');
        this.frog = game.add.sprite(game.world.centerX, (game.world.centerY+255), 'frog');
        this.frog.anchor.setTo(0.5);
        this.frogmouth = game.add.sprite(game.world.centerX, (game.world.centerY+255), 'frogmouth');
        this.frogmouth.anchor.setTo(0.5);
        this.Bubble5 = game.add.sprite((game.world.width*0.85), (game.world.height*0.2), 'bubble');
        game.physics.arcade.enable(this.Bubble5);
        this.Bubble5.anchor.setTo(0.5);
        this.Bubble6 = game.add.sprite((game.world.width*0.15), (game.world.height*0.2), 'bubble');
        game.physics.arcade.enable(this.Bubble6);
        this.Bubble6.anchor.setTo(0.5);
        scoreText = game.add.text(16, 16, 'Bubbles Left: 30', { fontSize: '32px', fill: 'white' });
    },
 
    PopBubble5: function () {
      this.frogmouth.kill();
      this.tongueb5 = game.add.sprite((game.world.centerX-20), (game.world.centerY-230), 'tongueb3');
      this.tongueb5.animations.add('pop3a', Phaser.Animation.generateFrameNames('ftonguediag', 0, 6, '', 4), 30, false);
      this.tongueb5.animations.play('pop3a');
      this.pop.play();
      this.Bubble5.kill();
      this.tongueb5.animations.add('pop3b', Phaser.Animation.generateFrameNames('ftonguediag', 6, 12, '', 4), 30, false);
      this.tongueb5.animations.play('pop3b');
      //console.log('Bubble5 popped');
      ScrnXY2.push('b5'+' '+Date.now()+' '+game.input.x+' '+game.input.y);
      score -= 1;
      scoreText.text = 'Bubbles Left: ' + score;
      //this.Bubble6.tint = Math.random() * 0xffffff;
      this.Bubble6.revive();
    },
    
    PopBubble6: function () {
      this.frogmouth.kill();
      this.tongueb6 = game.add.sprite((game.world.centerX-323), (game.world.centerY-235), 'tongueb4');
      this.tongueb6.animations.add('pop4a', Phaser.Animation.generateFrameNames('ftdl', 0, 6, '', 4), 30, false);
      this.tongueb6.animations.play('pop4a');
      this.pop.play();
      this.Bubble6.kill();
      this.tongueb6.animations.add('pop4b', Phaser.Animation.generateFrameNames('ftdl', 6, 11, '', 4), 30, false);
      this.tongueb6.animations.play('pop4b');
      //console.log('Bubble6 popped');
      ScrnXY2.push('b6'+' '+Date.now()+' '+game.input.x+' '+game.input.y);
      score -= 1;
      scoreText.text = 'Bubbles Left: ' + score;
      //this.Bubble5.tint = Math.random() * 0xffffff;
      this.Bubble5.revive();
    },


    ReviveBubble5: function () {
      this.Bubble5.revive();
      //console.log('Bubble5 revived');
    },
    
    ReviveBubble6: function () {
      this.Bubble6.revive();
      //console.log('Bubble6 revived');
    },
    
    
    Pop: function () {
      this.pop.play();
    },
    
    Blow: function () {
      this.pop.play();
    },
    
    Frogblow: function () {
      this.frogmouth = game.add.sprite(game.world.centerX, (game.world.centerY+255), 'frogmouth');
      this.frogmouth.anchor.setTo(0.5);
      this.Blow();
        this.Bubble5.revive();
        this.Bubble6.revive();
        console.log('bubbles reset');
    },
    
    submitscoreLU: function () {
        var ScrL = JSON.stringify(ScrnXY2);
        var fd4 = new FormData();
        fd4.append("ScrL", ScrL);
        var xhr4 = new XMLHttpRequest();

        xhr4.open('POST', 'postd.php', true);
        xhr4.send(fd4);
        console.log('posted ScrXY2');
        ScrnXY2 = [Date.now()+' '+game.input.x+' '+game.input.y];
        
    },
    
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
      game.state.start("GameMenu");
    },
    
    create: function () {
        //this.frog.inputEnabled = true;
        //this.frog.events.onInputDown.add(this.Blow, this);
        this.Bubble5.inputEnabled = true;
        this.Bubble5.events.onInputDown.add(this.PopBubble5, this);
        this.Bubble6.inputEnabled = true;
        this.Bubble6.events.onInputDown.add(this.PopBubble6, this);
        if (music.name !== "bgm" && playMusic) {
        music.stop();
        music = game.add.audio('bgm');
        music.loop = true;
        music.play();
        }
    },
    
    update: function () {
      if (!this.Bubble5.alive && !this.Bubble6.alive) {
        this.frog.events.onInputDown.addOnce(this.Frogblow, this);
      }
      
      if (score == 0) {
        this.submitscoreLU();
        score = 40;
        this.NextLevel();
      }
      }
      
};