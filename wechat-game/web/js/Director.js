import {DataStore} from "./base/DataStore.js";
import {UpPencil} from "./runtime/UpPencil.js";
import {DownPencil} from "./runtime/DownPencil.js";

export class Director {

    // constructor() {
    //     console.log('')
    // }

    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }

    constructor() {
        this.dataStore = DataStore.getInstance();
        this.moveSpeed = 2;
    }

    createPencil() {
        const minTop = window.innerHeight / 8;
        const maxTop = window.innerHeight / 2;
        const top = minTop + Math.random() * (maxTop - minTop);
        this.dataStore.get('pencils').push(new UpPencil(top));
        this.dataStore.get('pencils').push(new DownPencil(top));
    }

    birdsEvent() {
        for (let i = 0; i <= 2; i++) {
            // 应该是保存当前小鸟y坐标
            this.dataStore.get('birds').y[i] = this.dataStore.get('birds').birdsY[i];
            // 之后会往上升
        }
        this.dataStore.get('birds').time = 0;
    }

    // 是否和铅笔撞击
    static isStrike(bird, pencil) {
        let s = false;
        if (bird.top > pencil.bottom || bird.bottom < pencil.top || bird.right < pencil.left || bird.left > pencil.right) {
            s = true
        }
        return !s // ??
    }


    // 判断小鸟碰撞
    chech() {
        const birds = this.dataStore.get('birds');
        const land = this.dataStore.get('land');
        const pencils = this.dataStore.get('pencils');

        if (birds.birdsY[0] + birds.birdsHeight[0] >= land.y) {
            console.log('hihihi');
            this.isGameOver = true;
            return;
        }
        // 小鸟的边框模型
        const birdsBorder = {
            top: birds.y[0],
            bottom: birds.birdsY[0] + birds.birdsHeight[0],
            left: birds.birdsX[0],
            right: birds.birdsX[0] + birds.birdsWidth[0]
        };

        // 铅笔模型
        const length = pencils.length;
        for (let i = 0; i < length; i++) {
            const pencil = pencils[i];
            const pencilBorder = {
                top: pencil.y,
                bottom: pencil.y + pencil.height,
                left: pencil.x,
                right: pencil.x + pencil.width
            };

            // 检测那只铅笔是否和小鸟碰撞
            if (Director.isStrike(birdsBorder, pencilBorder)) {
                console.log('hit pencil');
                this.isGameOver = true;
                return;
            }
        }

    }

    run() {
        this.chech();
        if (!this.isGameOver) {
            this.dataStore.get('background').draw();

            const pencils = this.dataStore.get('pencils');

            // 销毁越界铅笔
            // 如果铅笔位置+宽度超越左边边界
            if (pencils[0].x + pencils[0].width <= 0 && pencils.length === 4) {
                pencils.shift(); // 第一个元素推出数组并把个数减一
                pencils.shift();
            }

            // 超过一半屏幕时创建新一组铅笔
            if (pencils[0].x <= (window.innerWidth - pencils[0].width) / 2 && pencils.length === 2) {
                this.createPencil();
            }

            this.dataStore.get('pencils').forEach(function (value) {
                value.draw();
            });

            this.dataStore.get('land').draw();
            this.dataStore.get('birds').draw();

            let timer = requestAnimationFrame(() => this.run());
            this.dataStore.put('timer', timer);
            // cancelAnimationFrame(this.dataStore.get('timer'));
        }
        else {
            cancelAnimationFrame(this.dataStore.get('timer'));
            this.dataStore.destroy();
            console.log('game over');
        }
    }
}