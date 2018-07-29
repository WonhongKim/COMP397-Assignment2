module scenes {
    export class Play extends objects.Scene {
        // member variables
      
        private _iceland:objects.Iceland;
        private _point:objects.Point;
        private _hero:objects.Hero;
       
        private _bears:objects.Bear[];
        private _bearNum:number;
       
        
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

        // public methods
        public Start():void {
            this.engineSound = createjs.Sound.play("mainBgm");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.2;


            
            this._hero = new objects.Hero();
            this._point = new objects.Point();
            this._iceland = new objects.Iceland();

            // creates an empty array of type Cloud
            this._bears = new Array <objects.Bear>();
         
            this._bearNum = 5;
            
            this._buildBears();
           
            this.Main();
        }

        public Update():void {
            this._hero.Update();
            this._iceland.Update();
            this._point.Update();

            managers.Collision.check(this._hero, this._point);

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
            this.addChild(this._point);

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