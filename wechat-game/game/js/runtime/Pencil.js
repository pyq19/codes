import {Sprite} from "../base/Sprite.js";
// import {Director} from "../Director.js";

export class Pencil extends Sprite {
    constructor(image, top) {
        super(image,
            0,
            0,
            image.width,
            image.height,
            // 摆放在刚好在右侧看不到的位置
            window.innerWidth,
            0,
            // 使用宽高
            image.width,
            image.height
        );
        // this 不能出现在super 上
        this.top = top;
        // 因为js循环引用，删掉Director.getInstance().moveSpeed;
        this.moveSpeed = 2;
    }

    draw() {
        this.x = this.x - this.moveSpeed;
        super.draw(
            this.img,
            0,
            0,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}