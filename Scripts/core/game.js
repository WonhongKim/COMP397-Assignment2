//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var AssetManager;
    var CurrentScene;
    var CurrentState;
    var ScoreBoardManager;
    var TextureAtlas;
    var textureData = {
        "images": [],
        "framerate": 60,
        "frames": [
            [1, 1, 226, 178, 0, 0, 0],
            [1, 181, 62, 63, 0, 0, 0],
            [65, 181, 65, 65, 0, 0, 0],
            [132, 181, 65, 65, 0, 0, 0],
            [1, 248, 65, 65, 0, 0, 0],
            [68, 248, 150, 50, 0, 0, 0],
            [1, 315, 150, 50, 0, 0, 0]
        ],
        "animations": {
            "bear": { "frames": [0] },
            "island": { "frames": [1] },
            "plane": {
                "frames": [2, 3, 4],
                "speed": 0.2
            },
            "RestartButton": { "frames": [5] },
            "StartButton": { "frames": [6] }
        }
    };
    var Manifest = [
        { id: "mainmenu", src: "/Assets/images/mainmenu.png" },
        { id: "playbutton", src: "/Assets/images/play.png" },
        { id: "tutorial", src: "/Assets/images/tutorial.png" },
        { id: "bear", src: "/Assets/images/bear.png" },
        { id: "hero", src: "/Assets/images/hero.png" },
        { id: "point", src: "/Assets/images/point.png" },
        { id: "iceland", src: "/Assets/images/iceland.png" },
        { id: "textureAtlas", src: "/Assets/sprites/textureAtlas.png" },
        { id: "yay", src: "/Assets/audio/yay.ogg" },
        { id: "thunder", src: "/Assets/audio/thunder.ogg" },
        { id: "mainBgm", src: "/Assets/audio/mainBGM.mp3" },
        { id: "pointup", src: "/Assets/audio/point.wav" },
        { id: "lifedown", src: "/Assets/audio/lifedown.wav" },
        { id: "bounuslife", src: "/Assets/audio/bounuslife.wav" },
        { id: "gameover", src: "/Assets/images/gameover.png" },
        { id: "retry", src: "/Assets/images/retry.png" }
    ];
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.Stage = stage; // create a reference to the stage class
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;
        // setup scoreboard manager
        ScoreBoardManager = new managers.ScoreBoard();
        managers.Game.ScoreBoardManager = ScoreBoardManager;
        textureData.images = [AssetManager.getResult("textureAtlas")];
        TextureAtlas = new createjs.SpriteSheet(textureData);
        managers.Game.TextureAtlas = TextureAtlas;
        // This is where all the magic happens
        Main();
    }
    function Update() {
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }
        CurrentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Switching Scenes...", "font-style:italic; font-size:16px; color:blue;");
        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
            // createjs.Sound.stop(); // stop all sounds
        }
        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;
            case config.Scene.TUTORIAL:
                CurrentScene = new scenes.Tutorial();
                break;
            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map