var game = new Phaser.Game(240, 400, Phaser.CANVAS, 'game')

game.MyStates = {};

game.MyStates.boot = {
    preload: function () {
        game.load.image('preload', 'assets/preloader.gif');
        if (!game.device.desktop)
            game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    },
    create: function () {
        game.state.start('load');
    }
}

game.MyStates.load = {
    preload: function () {
        var preloadSprite = game.add.sprite(game.width / 2 - 220 / 2, game.height / 2 - 19 / 2, 'preload');
        game.load.setPreloadSprite(preloadSprite);
        game.load.image('background', 'assets/bg.jpg');
        game.load.image('copyright', 'assets/copyright.png');
        game.load.spritesheet('myplane', 'assets/myplane.png', 40, 40, 4);
        game.load.spritesheet('startbutton', 'assets/startbutton.png', 100, 40, 2);
        game.load.spritesheet('replaybutton', 'assets/replaybutton.png', 80, 30, 2);
        game.load.spritesheet('sharebutton', 'assets/sharebutton.png', 80, 30, 2);
        game.load.image('mybullet', 'assets/mybullet.png');
        game.load.image('bullet', 'assets/bullet.png');
        game.load.image('enemy1', 'assets/enemy1.png');
        game.load.image('enemy2', 'assets/enemy2.png');
        game.load.image('enemy3', 'assets/enemy3.png');
        game.load.spritesheet('explode1', 'assets/explode1.png', 20, 20, 3);
        game.load.spritesheet('explode2', 'assets/explode2.png', 30, 30, 3);
        game.load.spritesheet('explode3', 'assets/explode3.png', 50, 50, 3);
        game.load.spritesheet('myexplode', 'assets/myexplode.png', 40, 40, 3);
        game.load.image('award', 'assets/award.png');
        game.load.audio('normalback', 'assets/normalback.mp3');
        game.load.audio('playback', 'assets/playback.mp3');
        game.load.audio('fashe', 'assets/fashe.mp3');
        game.load.audio('crash1', 'assets/crash1.mp3');
        game.load.audio('crash2', 'assets/crash2.mp3');
        game.load.audio('crash3', 'assets/crash3.mp3');
        game.load.audio('ao', 'assets/ao.mp3');
        game.load.audio('pi', 'assets/pi.mp3');
        game.load.audio('deng', 'assets/deng.mp3');
        game.load.onFileComplete.add(function (process) {
            console.log(process);
        });
    },
    create: function () {
        game.state.start('play')
    },
}

game.MyStates.start = {
    create: function () {
        game.add.image(0, 0, 'background');
        game.add.image(12, game.height - 10, 'copyright');
        var myplane = game.add.sprite(100, 100, 'myplane')
        myplane.animations.add('fly');
        myplane.animations.play('fly', 12, true);
        game.add.button(70, 200, 'startbutton', this.onStartClick, this, 1, 1, 0); // overFrame: 按住状态时鼠标划过时, outFrame: 鼠标离开时, downFrame: 鼠标按下时
    },
    onStartClick: function () {
        game.state.start('play');
    }
}

game.MyStates.play = {
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        var bg = game.add.tileSprite(0, 0, game.width, game.height, 'background');
        bg.autoScroll(0, 20);
        this.myplane = game.add.sprite(100, 100, 'myplane');
        this.myplane.animations.add('fly');
        this.myplane.animations.play('fly', 12, true);
        game.physics.arcade.enable(this.myplane);
        this.myplane.body.collideWorldBounds = true;
        var tween = game.add.tween(this.myplane).to({ y: game.height - 40 }, 1000, Phaser.Easing.Sinusoidal.InOut, true);
        tween.onComplete.add(this.onStart, this);
    },
    update: function () {
        var now = new Date().getTime();
        if (this.myplane.myStartFire && now - this.lastBulletTime > 500) {
            var myBullet = game.add.sprite(this.myplane.x + 15, this.myplane.y - 5, 'mybullet');
            game.physics.enable(myBullet, Phaser.Physics.ARCADE);
            myBullet.body.velocity.y = -200;
            this.lastBulletTime = now;
        }
    },
    onStart: function () {
        this.myplane.inputEnabled = true;
        this.myplane.input.enableDrag();
        this.myplane.myStartFire = true;
        this.lastBulletTime = 0;
        var style = { font: '16px Arial', fill: '#ff0000' };
        var text = game.add.text(0, 0, 'Score: 0', style);
    }
}

game.state.add('boot', game.MyStates.boot);
game.state.add('load', game.MyStates.load);
game.state.add('start', game.MyStates.start);
game.state.add('play', game.MyStates.play);
game.state.start('boot');