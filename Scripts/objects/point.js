var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Point = /** @class */ (function (_super) {
        __extends(Point, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Point
         */
        function Point() {
            var _this = _super.call(this, "point") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Point.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + this.halfHeight) {
                this.Reset();
            }
        };
        // public methods
        Point.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = 5;
            this.Reset();
        };
        Point.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Point.prototype.Reset = function () {
            this.y = -this.height;
            this.x = Math.floor((Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth);
        };
        return Point;
    }(objects.GameObject));
    objects.Point = Point;
})(objects || (objects = {}));
//# sourceMappingURL=point.js.map