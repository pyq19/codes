import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {DataStore} from "./js/base/DataStore.js";
import {Director} from "./js/Director.js";
import {Land} from "./js/runtime/Land.js";
import {Birds} from "./js/player/Birds.js";
import {StartButton} from "./js/player/StartButton.js";
import {Score} from "./js/player/Score.js";
import {ApiExamples} from "./js/ApiExamples.js";

export class Main {

    constructor() {
        this.canvas = wx.createCanvas();
        // console.log(this.canvas.width, this.canvas.height); // 357, 667
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map))

        // let image = new Image();
        // image.src = '../res/background.png';
        //
        // image.onload = () => {
        //     this.ctx.drawImage(
        //         image,
        //         0,
        //         0,
        //         image.width,
        //         image.height,
        //         0,
        //         0,
        //         image.width,
        //         // image.height,
        //         window.innerHeight,
        //     );
        // };
    }

    onResourceFirstLoaded(map) {
        this.dataStore.canvas = this.canvas;
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();

        const exp = new ApiExamples();
        exp.socketExample();
    }

    init() {

        // 先重置游戏是没有结束的
        this.director.isGameOver = false;

        this.dataStore
            .put('pencils', [])
            .put('background', BackGround)
            .put('land', Land)
            .put('birds', Birds)
            .put('startButton', StartButton)
            .put('score', Score);
        this.registerEvent();

        // 创建铅笔要在游戏逻辑运行之前
        this.director.createPencil();
        this.director.run();
    }

    registerEvent() {
        // this.canvas.addEventListener('touchstart', e => {
        //     // 屏蔽js的事件冒泡
        //     e.preventDefault();
        //     if (this.director.isGameOver) {
        //         console.log('游戏开始');
        //         this.init();
        //     } else {
        //         this.director.birdsEvent();
        //     }
        // });

        wx.onTouchStart(() => {
            if (this.director.isGameOver) {
                console.log('游戏开始');
                this.init();
            } else {
                this.director.birdsEvent();
            }
        });
    }
}
