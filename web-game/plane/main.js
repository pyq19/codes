var game = new Phaser.Game(240, 400, Phaser.CANVAS, 'game')

game.MyStates = {};
game.score = 0;

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
        game.state.start('start');
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
        this.normalback = game.add.audio('normalback', 0.2, true); // 第二个参数声音大小， 第三个是否循环播放
        try {
            this.normalback.play();
        } catch (e) { }
    },
    onStartClick: function () {
        game.state.start('play');
        this.normalback.stop();
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

        // 背景音乐
        this.playback = game.add.audio('playback', 0.2, true);
        try {
            this.playback.play();
        } catch (e) { }
        // 开火音乐
        this.pi = game.add.audio('pi', 1, false);
        // 打中敌人音乐
        this.firesound = game.add.audio('fashe', 5, false);
        // 爆炸音乐
        this.crash1 = game.add.audio('crash1', 10, false);
        this.crash2 = game.add.audio('crash2', 10, false);
        this.crash3 = game.add.audio('crash3', 20, false);
        // 挂了音乐
        this.ao = game.add.audio('ao', 10, false);
        // 接到了奖音乐
        this.deng = game.add.audio('deng', 10, false);
    },
    update: function () {
        if (this.myplane.myStartFire) {
            this.myPlaneFire();
            this.generateEnemy();
            this.enemyFire();
            // 我方子弹 和 敌方飞机 碰撞检测
            game.physics.arcade.overlap(this.myBullets, this.enemys, this.hitEnemy, null, this);
            // 敌方子弹 和 我方飞机 碰撞检测
            game.physics.arcade.overlap(this.enemyBullets, this.myplane, this.hitPlane, null, this);
            // 我方飞机 与 奖牌 碰撞检测
            game.physics.arcade.overlap(this.awards, this.myplane, this.getAward, null, this);
            // 我方飞机 与 敌方飞机 碰撞检测
            game.physics.arcade.overlap(this.enemys, this.myplane, this.crashEnemy, null, this);
        }
    },
    crashEnemy: function (myplane, enemy) {
        myplane.kill();
        // TODO 爆炸效果封装
        var explode = game.add.sprite(myplane.x, myplane.y, 'myexplode');
        var anim = explode.animations.add('explode');
        anim.play(30, false, false); // 第三个参数 killOnComplete
        anim.onComplete.addOnce(function () {
            explode.destroy();
            game.state.start('over');
        });
        try {
            this.deng.play();
        } catch (e) { }
    },
    getAward: function (myplane, award) {
        award.kill();
        if (myplane.life < 3) {
            myplane.life = myplane.life + 1;
        }
        try {
            this.deng.play();
        } catch (e) { }
    },
    hitEnemy: function (bullet, enemy) {
        enemy.life = enemy.life - 1;
        if (enemy.life <= 0) {
            enemy.kill();
            // TODO 爆炸效果 用对象池优化
            var explode = game.add.sprite(enemy.x, enemy.y, 'explode' + enemy.index);
            explode.anchor.setTo(0.5, 0.5);
            var anim = explode.animations.add('explode');
            anim.play(30, false, false); // 第三个参数 killOnComplete
            anim.onComplete.addOnce(function () {
                explode.destroy();
                game.score = game.score + enemy.score;
                this.text.text = 'Score: ' + game.score;
            }, this);
            try {
                this['crash' + enemy.index].play();
            } catch (e) { }
        }
        bullet.kill();
        try {
            this.firesound.play();
        } catch (e) { }
    },
    hitPlane: function (myplane, bullet) {
        bullet.kill();
        myplane.life = myplane.life - 1;
        if (myplane.life <= 0) {
            myplane.kill();
            // TODO 爆炸效果 用对象池优化
            var explode = game.add.sprite(myplane.x, myplane.y, 'myexplode');
            var anim = explode.animations.add('explode');
            anim.play(30, false, false); // 第三个参数 killOnComplete
            anim.onComplete.addOnce(function () {
                explode.destroy();
                game.state.start('over');
                this.playback.stop();
            }, this);
            try {
                this.ao.play();
            } catch (e) { }
        }
    },
    onStart: function () {
        this.myplane.inputEnabled = true;
        this.myplane.input.enableDrag();
        this.myplane.myStartFire = true;
        this.myplane.lastBulletTime = 0;
        this.myplane.life = 2;

        this.myBullets = game.add.group();
        this.enemys = game.add.group();
        this.enemys.lastEnemyTime = 0;
        this.enemyBullets = game.add.group();

        var style = { font: '16px Arial', fill: '#ff0000' };
        this.text = game.add.text(0, 0, 'Score: 0', style);

        this.awards = game.add.group();
        // 每隔30秒生成一个奖牌
        game.time.events.loop(Phaser.Timer.SECOND * 30, this.generateAward, this);
    },
    generateAward: function () {
        var awardSize = game.cache.getImage('award');
        var x = game.rnd.integerInRange(0, game.width - awardSize.width);
        var y = -awardSize.height;
        var award = this.awards.getFirstExists(false, true, x, y, 'award');
        award.outOfBoundsKill = true;
        award.checkWorldBounds = true;
        game.physics.arcade.enable(award);
        award.body.velocity.y = 600;
        console.log(this.awards.length);
    },
    myPlaneFire: function () {
        var getMyPlaneBullet = function () {
            var myBullet = this.myBullets.getFirstExists(false);// false 参数指代是否从未 kill 里拿
            if (myBullet) {
                myBullet.reset(this.myplane.x + 15, this.myplane.y - 7);
            } else {
                myBullet = game.add.sprite(this.myplane.x + 15, this.myplane.y - 7, 'mybullet');
                myBullet.outOfBoundsKill = true;
                myBullet.checkWorldBounds = true;
                this.myBullets.addChild(myBullet);
                game.physics.enable(myBullet, Phaser.Physics.ARCADE);
            }
            return myBullet;
        }
        var now = new Date().getTime();
        if (this.myplane.alive && now - this.myplane.lastBulletTime > 500) {
            var myBullet = getMyPlaneBullet.call(this); // !
            myBullet.body.velocity.y = -200;
            if (this.myplane.life >= 2) {
                var myBullet = getMyPlaneBullet.call(this); // !
                myBullet.body.velocity.x = -20;
                myBullet.body.velocity.y = -200;
                var myBullet = getMyPlaneBullet.call(this); // !
                myBullet.body.velocity.x = 20;
                myBullet.body.velocity.y = -200;
            }
            if (this.myplane.life >= 3) {
                var myBullet = getMyPlaneBullet.call(this); // !
                myBullet.body.velocity.x = -40;
                myBullet.body.velocity.y = -200;
                var myBullet = getMyPlaneBullet.call(this); // !
                myBullet.body.velocity.x = 40;
                myBullet.body.velocity.y = -200;
            }
            this.myplane.lastBulletTime = now;
            try {
                this.pi.play();
            } catch (e) { }
        }
    },
    generateEnemy: function () {
        var now = new Date().getTime();
        if (now - this.enemys.lastEnemyTime > 3000) {
            var enemyIndex = game.rnd.integerInRange(1, 3);
            var key = 'enemy' + (enemyIndex);
            var size = game.cache.getImage(key).width;
            var x = game.rnd.integerInRange(size / 2, game.width - size / 2);
            var y = 0;
            var enemy = this.enemys.getFirstExists(false, true, x, y, key);
            // console.log(key, size, x, y);
            enemy.index = enemyIndex;
            enemy.anchor.setTo(0.5, 0.5);
            enemy.outOfBoundsKill = true;
            enemy.checkWorldBounds = true;
            game.physics.arcade.enable(enemy);
            // enemy.body.velocity.y = 200;
            enemy.body.setSize(size, size);
            enemy.body.velocity.y = 20;
            enemy.lastFireTime = 0;
            enemy.size = size;

            if (enemyIndex == 1) {
                enemy.bulletV = 40;
                enemy.bulletTime = 6000;
                enemy.life = 2;
                enemy.score = 20;
            } else if (enemyIndex == 2) {
                enemy.bulletV = 80;
                enemy.bulletTime = 4000;
                enemy.life = 3;
                enemy.score = 30;
            } else if (enemyIndex == 3) {
                enemy.bulletV = 120;
                enemy.bulletTime = 2000;
                enemy.life = 5;
                enemy.score = 50;
            }

            this.enemys.lastEnemyTime = now;
        }
        // console.log("enemy : " + this.enemys.length);
    },
    enemyFire: function () {
        var now = game.time.now;
        this.enemys.forEachAlive(function (enemy) {
            if (now - enemy.lastFireTime > enemy.bulletTime) {
                var bullet = this.enemyBullets.getFirstExists(false, true, enemy.x, enemy.y + enemy.size / 2, 'bullet');
                bullet.anchor.setTo(0.5, 0.5);
                bullet.outOfBoundsKill = true;
                bullet.checkWorldBounds = true;
                game.physics.arcade.enable(bullet);
                bullet.body.velocity.y = enemy.bulletV;

                enemy.lastFireTime = now;
            }
        }, this);
        // console.log("bullet : " + this.enemyBullets.length);
    }
    // ,
    // render: function () {
    //     if (this.enemys) {
    //         this.enemys.forEachAlive(function (enemy) {
    //             game.debug.body(enemy);
    //         });
    //     }
    // }
}

game.MyStates.over = {
    create: function () {
        game.add.image(0, 0, 'background');
        game.add.image(12, game.height - 16, 'copyright');
        var myplane = game.add.sprite(100, 100, 'myplane');
        myplane.animations.add('fly');
        myplane.animations.play('fly', 12, true);

        var style = { font: "bold 32px Arial", fill: "#ff0000", boundsAlignH: "center", boundsAlignV: "middle" };
        this.text = game.add.text(0, 0, "Score: " + game.score, style);
        this.text.setTextBounds(0, 0, game.width, game.height);

        game.add.button(30, 300, 'replaybutton', this.onReplayClick, this, 0, 0, 1);
        game.add.button(130, 300, 'sharebutton', this.onShareClick, this, 0, 0, 1);

        this.normalback = game.add.audio('normalback', 0.2, true); // 第二个参数声音大小， 第三个是否循环播放
        try {
            this.normalback.play();
        } catch (e) { }
    },
    onReplayClick: function () {
        game.score = 0;
        game.state.start('play');
        this.normalback.stop();
    },
    onShareClick: function () {
        document.getElementById('share').style.display = 'block';
    }
}

game.state.add('boot', game.MyStates.boot);
game.state.add('load', game.MyStates.load);
game.state.add('start', game.MyStates.start);
game.state.add('play', game.MyStates.play);
game.state.add('over', game.MyStates.over);
game.state.start('boot');

var onCloseShare = function () {
    document.getElementById('share').style.display = 'none';
}