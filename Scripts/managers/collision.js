var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "point":
                            var yaySound = createjs.Sound.play("pointup");
                            yaySound.volume = 0.2;
                            managers.Game.ScoreBoardManager.Score += 100;
                            if (managers.Game.ScoreBoardManager.Score > managers.Game.ScoreBoardManager.HighScore) {
                                managers.Game.ScoreBoardManager.HighScore = managers.Game.ScoreBoardManager.Score;
                            }
                            if (managers.Game.ScoreBoardManager.Score == 1000) {
                                managers.Game.ScoreBoardManager.Lives += 1;
                                var bounslifeSound = createjs.Sound.play("bounuslife");
                                bounslifeSound.volume = 0.4;
                            }
                            if (managers.Game.ScoreBoardManager.Score == 2000) {
                                managers.Game.ScoreBoardManager.Lives += 1;
                                var bounslifeSound = createjs.Sound.play("bounuslife");
                                bounslifeSound.volume = 0.4;
                            }
                            if (managers.Game.ScoreBoardManager.Score == 5000) {
                                managers.Game.ScoreBoardManager.Lives += 1;
                                var bounslifeSound = createjs.Sound.play("bounuslife");
                                bounslifeSound.volume = 0.4;
                            }
                            if (managers.Game.ScoreBoardManager.Score == 10000) {
                                managers.Game.ScoreBoardManager.Lives += 1;
                                var bounslifeSound = createjs.Sound.play("bounuslife");
                                bounslifeSound.volume = 0.4;
                            }
                            break;
                        case "bear":
                            var thunderSound = createjs.Sound.play("lifedown");
                            thunderSound.volume = 0.2;
                            managers.Game.ScoreBoardManager.Lives -= 1;
                            // check if lives falls below 1
                            if (managers.Game.ScoreBoardManager.Lives <= 0) {
                                // change scenes to the END scene
                                managers.Game.CurrentState = config.Scene.END;
                            }
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map