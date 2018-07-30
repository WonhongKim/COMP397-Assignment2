module scenes {
    export class Play extends objects.Scene {
        // member variables
      
        private _iceland:objects.Iceland;
        
        private _hero:objects.Hero;
       
        private _bears:objects.Bear[];
        private _bearNum:number;
       
        private _point:objects.Point[];
        private _pointNum:number;
        
        public engineSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }
        // private methods
    

        private _buildBears():void {
            for (let count = 0; count < this._bearNum; count++) {
                this._bears.push(new objects.Bear());
                //this._clouds[count] = new objects.Cloud();
            }
        }

        private _buildPoints():void {
            for (let count = 0; count < this._pointNum; count++) {
                this._point.push(new objects.Point());
                //this._clouds[count] = new objects.Cloud();
            }
        }

        // public methods
        public Start():void {
            this.engineSound = createjs.Sound.play("mainBgm");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.2;


            
            this._hero = new objects.Hero();
            this._iceland = new objects.Iceland();

            this._point = new  Array <objects.Point>();
            this._pointNum = 2;

            this._buildPoints();
           

            // creates an empty array of type Cloud
            this._bears = new Array <objects.Bear>();
         
            this._bearNum = 5;
            
            this._buildBears();
           
            this.Main();
        }

        public Update():void {
            this._hero.Update();
            this._iceland.Update();
      

            this._point.forEach(point => {
                point.Update();
                managers.Collision.check(this._hero, point);
            });

           

            this._bears.forEach(bear => {
                bear.Update();
                managers.Collision.check(this._hero, bear);
            });
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this.engineSound.stop();
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            // adding the ocean to the scene
            this.addChild(this._iceland);            

            // adding the island to the scene
            for (const point of this._point) {
                this.addChild(point);
            }

            // adding the plane to the scene
            this.addChild(this._hero);

            // adding the cloud to the scene
     

            for (const bear of this._bears) {
                this.addChild(bear);
            }

            this.addChild(managers.Game.ScoreBoardManager.LivesLabel);
            this.addChild(managers.Game.ScoreBoardManager.ScoreLabel);
        }
    }
}