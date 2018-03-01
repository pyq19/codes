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

    run() {
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