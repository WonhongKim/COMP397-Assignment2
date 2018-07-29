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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Play.prototype._buildBears = function () {
            for (var count = 0; count < this._bearNum; count++) {
                this._bears.push(new objects.Bear());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("mainBgm");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.2;
            this._hero = new objects.Hero();
            this._point = new objects.Point();
            this._iceland = new objects.Iceland();
            // creates an empty array of type Cloud
            this._bears = new Array();
            this._bearNum = 5;
            this._buildBears();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._hero.Update();
            this._iceland.Update();
            this._point.Update();
            managers.Collision.check(this._hero, this._point);
            this._bears.forEach(function (bear) {
                bear.Update();
                managers.Collision.check(_this._hero, bear);
            });
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.engineSound.stop();
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the ocean to the scene
            this.addChild(this._iceland);
            // adding the island to the scene
            this.addChild(this._point);
            // adding the plane to the scene
            this.addChild(this._hero);
            // adding the cloud to the scene
            for (var _i = 0, _a = this._bears; _i < _a.length; _i++) {
                var bear = _a[_i];
                this.addChild(bear);
            }
            this.addChild(managers.Game.ScoreBoardManager.LivesLabel);
            this.addChild(managers.Game.ScoreBoardManager.ScoreLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map