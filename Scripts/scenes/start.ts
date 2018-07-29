module scenes {
    export class Start extends objects.Scene {
        // member variables
        
        private _startButton: objects.Button;
       

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            
            
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);

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
            
           
            this.addChild(this._startButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.TUTORIAL;
            }, this);
        }
    }
}