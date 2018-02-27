"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Land = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Sprite2 = require("../base/Sprite.js");

var _Director = require("../Director.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Land = exports.Land = function (_Sprite) {
    _inherits(Land, _Sprite);

    function Land() {
        _classCallCheck(this, Land);

        var image = _Sprite2.Sprite.getImage('land');

        // 地板的水平变化坐标
        var _this = _possibleConstructorReturn(this, (Land.__proto__ || Object.getPrototypeOf(Land)).call(this, image, 0, 0, image.width, image.height, 0, window.innerHeight - image.height, image.width, image.height));

        _this.landX = 0;
        // 地板的移动速度
        _this.landSpeed = _Director.Director.getInstance().moveSpeed;
        return _this;
    }

    _createClass(Land, [{
        key: "draw",
        value: function draw() {
            this.landX = this.landX + this.landSpeed;
            if (this.landX > this.img.width - window.innerWidth) {
                this.landX = 0;
            }
            _get(Land.prototype.__proto__ || Object.getPrototypeOf(Land.prototype), "draw", this).call(this, this.img, this.srcX, this.srcY, this.srcW, this.srcH, -this.landX, this.y, this.width, this.height);
        }
    }]);

    return Land;
}(_Sprite2.Sprite);
//# sourceMappingURL=Land.js.map