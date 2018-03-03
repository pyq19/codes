import {DataStore} from "./DataStore.js";

export class Sprite {

    constructor(img = null,
                srcX = 0,
                srcY = 0,
                srcW = 0,
                srcH = 0,
                x = 0, y = 0,
                width = 0, height = 0) {
        this.dataStore = DataStore.getInstance();
        this.ctx = this.dataStore.ctx;
        this.img = img;
        this.srcX = srcX;  // 剪裁的x坐标
        this.srcY = srcY;  // 剪裁的y坐标
        this.srcW = srcW;  // 剪裁的宽度
        this.srcH = srcH;  // 剪裁的高度
        this.x = x;  // 摆放的x坐标
        this.y = y;  // 摆放的y坐标
        this.width = width;  // 使用的宽度
        this.height = height;  // 使用的高度
    }

    static getImage(key) {
        return DataStore.getInstance().res.get(key);
    }

    draw(img = this.img,
         srcX = this.srcX,
         srcY = this.srcY,
         srcW = this.srcW,
         srcH = this.srcH,
         x = this.x,
         y = this.y,
         width = this.width,
         height = this.height) {
        this.ctx.drawImage(
            img,
            srcX,
            srcY,
            srcW,
            srcH,
            x,
            y,
            width,
            height,
        );
    }
}
