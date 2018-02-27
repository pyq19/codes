import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {DataStore} from "./js/base/DataStore.js";
import {Director} from "./js/Director.js";
import {Land} from "./js/runtime/Land.js";

export class Main {

    constructor() {
        this.canvas = document.getElementById('game_canvas');
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
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    init() {
        this.dataStore
            .put('pencils', [])
            .put('background', BackGround)
            .put('land', Land);
        // 创建铅笔要在游戏逻辑运行之前
        this.director.createPencil();
        this.director.run();
    }
}