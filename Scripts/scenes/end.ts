module scenes {
    export class End extends objects.Scene {
        // member variables
        private _gameover: createjs.Bitmap;
        private _retry: createjs.Bitmap;

       // private _ocean: objects.Ocean;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
           // this._ocean = new objects.Ocean();

            this. _gameover= new createjs.Bitmap(managers.Game.AssetManager.getResult("gameover"));
            this._retry = new createjs.Bitmap(managers.Game.AssetManager.getResult("retry"));
            this._retry.x = 320;
            this._retry.y = 470;

            this.Main();
        }

        public Update():void {
           // this._ocean.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - END SCENE`);

           // this.addChild(this._ocean);

           this.addChild(this._gameover);
            this.addChild(this._retry);
           
            this.addChild(managers.Game.ScoreBoardManager.HighScoreLabel);
           

            this._retry.on("click", function(){
                managers.Game.ScoreBoardManager.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}