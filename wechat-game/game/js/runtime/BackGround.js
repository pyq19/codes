import {Sprite} from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";


export class BackGround extends Sprite {
    constructor() {
        let image = Sprite.getImage('background');
        // super 之上不能用this 关键字
        super(image, 0, 0, image.width, image.height, 0, 0, DataStore.getInstance().canvas.width, DataStore.getInstance().canvas.height)
    }
}
