<<<<<<< HEAD



var gameProperties =
{
	screenHeight: 600,
	screenWidth: 32*20,
    floorHeight: 525,
    jumpSpeed: 650,
    backgroundSpeed: 3,
    treeSpeed: 4,
    skySpeed: 1,
    }; //gameProperties will hold the changing variables of our game, basically constants 

//main.js
var game = new Phaser.Game(gameProperties.screenwidth, gameProperties.screenHeight, Phaser.AUTO,  'ld29', null, false, false);
var playerObject;
var shadowObject;
var background;


var keyList = 
{
    up: 0,
}

var Player = function (game1, key,x ,y) { //this function creates our class Bullet

    Phaser.Sprite.call(this, game1, 0, 0, key); //this call attaches the sprite to our bullet
    game.physics.arcade.enable(this);
    this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST; 
    this.playerX = x;
    this.playerY = y;
    this.reset(x,y); //sets the location to x,y
    this.anchor.set(0.5); //sets the anchor to the middle of the sprite
    this.inputEnabled = true;
    this.animations.add('runAnim', [0,1,2,3,4,5,6,7],12, true);
    game1.add.existing(this);
    this.scale.set(5);
    this.body.collideWorldBounds = true;

    //this.events.onInputDown.add(events.onInputDown(remove(this)));

};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.load = function()
{
    this.animations.play('runAnim');

    //this.animations.stop(null, true);
}


Player.prototype.freeze = function()
{
    this.animations.paused = true;
}

Player.prototype.thaw = function()
{
    this.animations.paused = false;
}

Player.prototype.jump = function()
{
    this.animations.stop(null, true);
    this.body.velocity.setTo(0,-gameProperties.jumpSpeed);
}

var Shadow = function(game1, key,x ,y)
{
    Phaser.Sprite.call(this, game1, 0, 0, key); //this call attaches the sprite to our bullet
    
    this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST; 
        this.anchor.set(0.5); //sets the anchor to the middle of the sprite
    this.playerX = x;
    this.playerY = y;
    this.reset(x,y); //sets the location to x,y

    this.inputEnabled = true;
    this.animations.add('runAnim', [0,1,2,3],12, true);
    this.animations.add('jumpAnim', [4,5,6,7,8], 4, false);
    game1.add.existing(this);
    this.scale.set(5);

}



Shadow.prototype = Object.create(Phaser.Sprite.prototype);
Shadow.prototype.constructor = Player;
=======
var game = new Phaser.Game(1280, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render});

function init(){

	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically= true;
}

function preload() {
 game.load.image('paddle', 'assets/sprites/betterpaddle.png');
 game.load.image('ball', 'assets/sprites/ball.png');
game.load.bitmapFont('carrier_command', 'assets/fonts/bitmapFonts/carrier_command.png', 'assets/fonts/bitmapFonts/carrier_command.xml');
}
var paddle1;
var cursors;
var customBounds;
var font;
function create() {
	
	var i = game.add.image(100,100,font)
	var bounds = new Phaser.Rectangle(100, 100, 400, 400);
	image = game.add.sprite(0, 0, 'paddle');
	game.world.setBounds(0, 0, 1280, 600);

    //  Enable P2 and it will use the updated world size
    game.physics.startSystem(Phaser.Physics.P2JS);

    

	paddle1 = game.add.sprite(100, 10, 'paddle');
    paddle1.scale.set(4);
    paddle1.smoothed = false;
    game.physics.p2.enable(paddle1, false);
    paddle1.body.fixedRotation = true;
    paddle1.body.damping = .5;

    paddle2 = game.add.sprite(1180,10, 'paddle');
    paddle2.scale.set(4);
    paddle2.smoothed = false;
    game.physics.p2.enable(paddle2, false);
    paddle2.body.fixedRotation = true;
    paddle2.body.damping = .5;

    var spriteMaterial = game.physics.p2.createMaterial('spriteMaterial', paddle1.body);

    var worldMaterial = game.physics.p2.createMaterial('worldMaterial');

    //  4 trues = the 4 faces of the world in left, right, top, bottom order
    game.physics.p2.setWorldMaterial(worldMaterial, true, true, true, true);

    //  Here is the contact material. It's a combination of 2 materials, so whenever shapes with
    //  those 2 materials collide it uses the following settings.
    //  A single material can be used by as many different sprites as you like.
    var contactMaterial = game.physics.p2.createContactMaterial(spriteMaterial, worldMaterial);

    contactMaterial.friction = 0.3;     // Friction to use in the contact of these two materials.
    contactMaterial.restitution = 1.0;  // Restitution (i.e. how bouncy it is!) to use in the contact of these two materials.
    contactMaterial.stiffness = 1e7;    // Stiffness of the resulting ContactEquation that this ContactMaterial generate.
    contactMaterial.relaxation = 3;     // Relaxation of the resulting ContactEquation that this ContactMaterial generate.
    contactMaterial.frictionStiffness = 1e7;    // Stiffness of the resulting FrictionEquation that this ContactMaterial generate.
    contactMaterial.frictionRelaxation = 3;     // Relaxation of the resulting FrictionEquation that this ContactMaterial generate.
    contactMaterial.surfaceVelocity = 0;        // Will add surface velocity to this material. If bodyA rests on top if bodyB, and the surface velocity is positive, bodyA will slide to the right.



    //  Create our physics body. The 'true' parameter enables visual debugging.
>>>>>>> a801b5ef288660e5f73cb98d5079024c12fb80bd

Shadow.prototype.load = function()
{
    this.animations.play('runAnim');
}

<<<<<<< HEAD
Shadow.prototype.jump = function()
{
    this.animations.play('jumpAnim');
    //this.animations.currentAnim.onComplete.add(function () {  this.animations.play('runAnim');}, this);
}

Shadow.prototype.land = function()
{
    this.animations.play('runAnim');
}

var mainState = function(game){

		//this.weapon.FrontAndBack.fire(this.player);
};

//var playerObject;



mainState.prototype = {
    preload: function () {

    	text = game.add.text(32, 32, 'Click to start load', { fill: '#ffffff' });
    	game.load.onLoadStart.add(loadStart, this);
    	game.load.onFileComplete.add(fileComplete, this);
    	game.load.onLoadComplete.add(loadComplete, this);
    	//cake.loadCake();

    	game.load.atlasJSONHash('playerRun', 'assets/sprites/playerRunNoS.png', 'assets/sprites/playerRunNoS.json');
        game.load.atlasJSONHash('shadowRun', 'assets/sprites/shadowRun.png', 'assets/sprites/shadowRun.json');

        game.load.image("background", "assets/sprites/background4.png");
        game.load.audio("jump", "assets/sound/jump.wav");
        game.load.image("tree", "assets/sprites/tree2.png");
        game.load.image("sky", "assets/sprites/sky.png");


    	//game.load.start();
 
    },
 
    create: function () {

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 1000;

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.pageAlignHorizontally = true;
        //this.scale.pageAlignVertically = true;

                this.sky = game.add.tileSprite(0, 0, gameProperties.screenWidth, gameProperties.screenHeight , "sky");

        this.sky.smoothed = false;
        this.sky.scale.set(20);
        this.background = game.add.tileSprite(0, 0, gameProperties.screenWidth, gameProperties.screenHeight , "background");

        this.background.smoothed = false;
        this.background.scale.set(20);

        this.tree = game.add.tileSprite(0, 0, gameProperties.screenWidth, gameProperties.screenHeight , "tree");

        this.tree.smoothed = false;
        this.tree.scale.set(20);

    	
        shadowObject = new Shadow(game, 'shadowRun', gameProperties.screenWidth/4 , gameProperties.floorHeight );
        shadowObject.load();

        playerObject = new Player(game, 'playerRun', gameProperties.screenWidth/4 , gameProperties.floorHeight );
        //playerObject.sprite.animations.add('cakeAnim', [0,1,2,3],12, true);
        playerObject.load();

        



        //this.key1 = game.input.keyboard.addKey(Phaser.Keyboard.A);
        //sthis.key1.onDown.add(playerObject.jump, this);
        console.log('did shit');

        keyList.up = game.input.keyboard.addKey(Phaser.Keyboard.A);

        game.input.onTap.add(jump, this);
        keyList.up.onDown.add(jump, this);


	 		//cake.callAll(this, game, game.world, 'cake', false, true, Phaser.Physics.ARCADE);

	



        //	You can listen for each of these events from Phaser.Loader


    },
 
    update: function () {

        
        if(playerObject.body.onFloor())
        {
            playerObject.load();
            shadowObject.land();
        }
         game.world.wrap(this.background, 0, true);
        this.background.x += -gameProperties.backgroundSpeed;

         game.world.wrap(this.tree, 0, true);
        this.tree.x += -gameProperties.treeSpeed;

        game.world.wrap(this.sky, 0, true);
        this.sky.x += -gameProperties.skySpeed;

 
    },
};

function jump()
{
    if (playerObject.body.onFloor())
        {

            playerObject.jump();
            shadowObject.jump();
            game.sound.play('jump');

        }
}

function loadStart() {

	text.setText("Loading ...");

}

//	This callback is sent the following parameters:
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

	text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);

	//var newImage = game.add.image(x, y, cacheKey);

	//newImage.scale.set(0.3);

	/*x += newImage.width + 20;

	if (x > 700)
	{
		x = 32;
		y += 332;
	}*/

}

function loadComplete() {

	text.setText('');

}



game.state.add('main', mainState);
game.state.start('main');
=======

    //  Alternatively create a circle for the ship instead (which more accurately matches its size)
    // ship.body.setCircle(28);



    
    

    //game.physics.p2.gravity.y = 100;
    //  Just to display the bounds


    cursors = game.input.keyboard.createCursorKeys();
    bmpText = game.add.bitmapText(270, 500, 'carrier_command', 'Player 1: Q&A \nPlayer 2: O&L', 46);
    


    
}



function update(){

	//paddle1.body.setZeroXVelocity();

    if (game.input.keyboard.isDown(Phaser.Keyboard.Q))
    {
    	paddle1.body.moveUp(350);
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        paddle1.body.moveDown(350);
    }
    if(paddle1.body.x != 100)
    {
    	paddle1.body.x = 100;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.O))
    {
    	paddle2.body.moveUp(350);
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.L))
    {
        paddle2.body.moveDown(350);
    }
    if(paddle2.body.x != 1180)
    {
    	paddle2.body.x = 1180;
    }


}

function render(){


    
}
>>>>>>> a801b5ef288660e5f73cb98d5079024c12fb80bd
