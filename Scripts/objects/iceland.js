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
    var Iceland = /** @class */ (function (_super) {
        __extends(Iceland, _super);
        /**
         * Creates an instance of Iceland.
         * @memberof Iceland
         */
        function Iceland() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("iceland")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Iceland.prototype._checkBounds = function () {
            // check top boundary
            if (this.y >= 0) {
                this.Reset();
            }
        };
        // public methods
        Iceland.prototype.Start = function () {
            this._verticalSpeed = 5; // 5 pixels per frame
            this.Reset();
        };
        Iceland.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Iceland.prototype.Reset = function () {
            this.y = -600;
        };
        return Iceland;
    }(createjs.Bitmap));
    objects.Iceland = Iceland;
})(objects || (objects = {}));
//# sourceMappingURL=iceland.js.map