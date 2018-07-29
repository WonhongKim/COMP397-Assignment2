module scenes {
    export class Tutorial extends objects.Scene{

        // member variables
        private _playButton: objects.Button;
        
        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._playButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, 360, true);
           
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
            console.log(`Tutorial - Tutorial`);
            
           
            this.addChild(this._playButton);

            this._playButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
          
        }
    }

}
