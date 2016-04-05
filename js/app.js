// Enemies our player must avoid
var Enemy = function(haterX, haterY,haterSpeed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x= haterX;
    this.y= haterY;
    this.speed= haterSpeed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //--->multiply movements below
    this.x+= this.speed* dt;
    if(this.x>520){this.x= -50};

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//-->below is my player class with update,render and handle methods as protototypes...
var Player = function(playerX, playerY, playerSpeed){
    this.x= playerX;
    this.y= playerY;
    this.speed= playerSpeed;
    this.sprite='images/char-boy.png';
};
Player.prototype.update= function(dt){this.x= this.x; this.y= this.y; player.collisionCheck(hater1);};
Player.prototype.render= function(){ctx.drawImage(Resources.get(this.sprite), this.x, this.y);};
Player.prototype.handleInput= function(allowedKeys){
    switch(allowedKeys){
        case "up":
        if(this.y>0){
        this.y-= 80;//-80 on the y-axis sends the character 80px up towards 0
        };
        break;

        case "down":
        if(this.y<350){ // if "Y" is less than 500px, then add 80px(which sends the charater downwards)
        this.y= this.y + 80; }; 
        break;

        case "left":
        if(this.x>0){
        this.x= this.x - 100;
        };
        break;

        case "right":
        if(this.x<400){
        this.x+= 100; };
        break;
    };
};

//Below is the collision detection and reset functions that do NOT function
Player.prototype.collisionCheck= function(Enemy){
    var e= Enemy;
    e.height= 50;
    e.width= 60;
    
    this.height= 35;
    this.width=60;

    //var EnemyWidth= 50;
    //var EnemyHeight= 50;
    console.log(e);
    console.log(this);

    if(this.x<e.x+e.width &&
        this.x+this.width>e.x &&
        this.y< e.y+ e.height &&
        this.y+this.height>e.y){
        //collision detected
    alert("collision");

    };
};

//Player.prototype.collisionCheck= function(enemy){
  //  console.log(enemy);
//};

/*Player.prototype.collisionCheck= function(){
};

//this is designed to reset the game when the player reaches the goal.. not working..
Player.prototype.goal=function(){
    if(this.y<30){
        this.resetGame();
    };
};
Player.prototype.resetGame= function(){
    {
    this.x= 200;
    this.y= 390;
    this.speed= 100;
    this.sprite='images/char-boy.png';};
};
*/

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
//allEnemies array below:
var hater1= new Enemy(-100,220,20); //enemy y-axis diff= 80px
var hater2= new Enemy(-100,220,150);
var hater3= new Enemy(-100,140,70);
var hater4= new Enemy(-100,60,100);
var hater5= new Enemy(-100,60,35);


var allEnemies= [hater1, hater2, hater3, hater4, hater5];

// Place the player object in a variable called player
//---=>below is the instance of the player object
var player = new Player(200,390,100);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

/*document.addEventListener('keyup', playerMove());
var playerMove= function(){
    37: 'left';
    38: 'up';
    39: 'right';
    40: 'down';
};*/
