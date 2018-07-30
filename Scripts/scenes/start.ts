module scenes {
    export class Start extends objects.Scene {
        // member variables
        
        private _background: createjs.Bitmap;
        private _startButton: createjs.Bitmap;

      
        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

       
                
            this._background = new createjs.Bitmap(managers.Game.AssetManager.getResult("mainmenu"));
            this._startButton = new createjs.Bitmap(managers.Game.AssetManager.getResult("playbutton"));
            this._startButton.x = 650;
            this._startButton.y = 470;
        

            this.Main();
        }

        public Update():void {
           
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - START SCENE`);
            
            this.addChild(this._background);
            this.addChild(this._startButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.TUTORIAL;
            }, this);
        }
    }
}