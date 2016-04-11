// Enemies our player must avoid
var Enemy = function(haterX, haterY,haterSpeed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x= haterX;
    this.y= haterY;
    this.width=55;
    this.length=40;
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
    if(this.x>520){
        this.x= -50;
    };

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
Player.prototype.update= function(dt){this.x= this.x; this.y= this.y; 
    this.collisionCheck(allEnemies); //same as player.collisionCheck(all..);
    //the code below works well, but I am wondering why it does not work on line 52-56
    /*if(this.y<15){
        this.resetGame();
    };*/
    this.goal();//calls line 55 to init resetGame();

};
Player.prototype.render= function(){ctx.drawImage(Resources.get(this.sprite), this.x, this.y);};
Player.prototype.resetGame= function(){this.x= 200; this.y= 390; this.speed= 100;};
//below is the code in quesiton: why does this not wwork, when line 45-47 is the same code
Player.prototype.goal=function(){
    if(this.y<20){
        this.resetGame(); // same as player.resetGame();
    };
};//end player.prot.goal*/
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
Player.prototype.collisionCheck= function(enemy){
    var e= enemy;
    //var eHeight= 40;
    //var eWidth= 55;
   
    this.height= 35;
    this.width=55;

    //console.log(e);
    //console.log(this);
for (i=0; i < e.length; i++){ // standard loop; as long as i is less than the number of enemies; loops through a number of times

//var eLong = e.length; //expresses enemny array lenght as a varaiable.(part1)
//for(i=0; i<eLong; i++){}; //then uses variable elong to loop throught the enemny array(part2)

//for(var i in e){ //for in loop; loops through allEnemies; loops through properties of an object
    //console.log(e[i]);


    if(this.x<e[i].x+ e[i].width  &&
        this.x+this.width>e[i].x &&
        this.y< e[i].y+ e[i].length &&
        this.y+this.height>e[i].y){
        //collision detected

    //alert("you lose");
    setTimeout(player.resetGame(),10000);
    //this.resetGame();// player.resetGame();
    //run a console.log of e[i] to ensure that individual array objects are being targeted
        };//ends if statement 
    };//ends for loop
};//ends prototype function

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
/*var delayReset= function(){
    var timeDelay= window.setTimeout(this.resetGame, alert ,10000);
};*/


