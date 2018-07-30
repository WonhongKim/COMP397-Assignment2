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
var scenes;
(function (scenes) {
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // private _ocean: objects.Ocean;
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            // this._ocean = new objects.Ocean();
            this._gameover = new createjs.Bitmap(managers.Game.AssetManager.getResult("gameover"));
            this._retry = new createjs.Bitmap(managers.Game.AssetManager.getResult("retry"));
            this._retry.x = 320;
            this._retry.y = 470;
            this.Main();
        };
        End.prototype.Update = function () {
            // this._ocean.Update();
        };
        End.prototype.Reset = function () {
        };
        End.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
            console.log("Starting - END SCENE");
            // this.addChild(this._ocean);
            this.addChild(this._gameover);
            this.addChild(this._retry);
            this.addChild(managers.Game.ScoreBoardManager.HighScoreLabel);
            this._retry.on("click", function () {
                managers.Game.ScoreBoardManager.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map