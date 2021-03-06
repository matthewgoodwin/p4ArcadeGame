// Enemies our player must avoid
var Enemy = function(haterX, haterY,haterSpeed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    "use:strict";
    this.x = haterX;
    this.y = haterY;
    this.width = 55;
    this.length = 40;
    this.speed = haterSpeed;
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
    "use: strict";
    this.x+= this.speed * dt;
    if(this.x>520){
        this.x= -50;
    }

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
    "use: strict";
    this.x = playerX;
    this.y = playerY;
    this.speed = playerSpeed;
    this.sprite ='images/char-boy.png';
    //add width and height values so they are not hard coded in the collision function
};

Player.prototype.update= function(dt){
    "use: strict";
    this.x= this.x; 
    this.y= this.y; 
    this.collisionCheck(allEnemies); //same as player.collisionCheck(all..);
    this.goal();//must be called here because the player x and y are updated here
    /*if(this.y<15){
        this.resetGame();
    };*/
};

Player.prototype.render= function(){
    "use: strict";
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.resetGame= function(newX, newY, newSpeed){
    //this.x= 200; 
    //this.y= 390; 
    //this.speed= 100;
    //eliminate magic numbers, this is done in case I change the values of x and y
    "use: strict";
    this.x = newX;
    this.y = newY;
    this.speed= newSpeed;
};

Player.prototype.goal=function(){
    // 'this' cant b accessed inside the setTimeout func, bc it does not have access to the Player scope. So i must set 'this' to 'hero' OUTSIDE the function call
    "use: strict";
    var hero = this;
    if(hero.y < 20){
        setTimeout(function(){
            hero.resetGame(200, 390, 100);
        }, 200);
        //this.resetGame(); // same as player.resetGame();
    };
};//end player.prot.goal*/

Player.prototype.handleInput= function(allowedKeys){
    "use: strict";
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
    "use: strict";
    var e= enemy;
//set 'this' to 'hero' so setTImeout can access it. In this case I can avoid using player.resetGame in setTimeout; setTime has not access to this
    var hero = this;

    hero.height= 35;
    hero.width=55;

for (i=0; i < e.length; i++){ // standard loop; as long as i is less than the number of enemies; loops through a number of times

//var eLong = e.length; //expresses enemny array lenght as a varaiable.(part1)
//for(i=0; i<eLong; i++){}; //then uses variable elong to loop throught the enemny array(part2)

//for(var i in e){ //for in loop; loops through allEnemies; loops through properties of an object
    //console.log(e[i]);

    //'this' can be replaced with 'hero' below
    if(this.x<e[i].x+ e[i].width  &&
        this.x+this.width>e[i].x &&
        this.y< e[i].y+ e[i].length &&
        this.y+this.height>e[i].y){
        //collision detected
    setTimeout(function(){
        "use: strict";
        hero.resetGame(200, 390, 100); //'hero'= 'this' line 105
    }, 200);// calls a function that delays he player reset game function 
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
var hater4= new Enemy(-100,140,140);
var hater5= new Enemy(-100,60,35);
var hater6= new Enemy(-100,60,100);

var allEnemies= [hater1, hater2, hater3, hater4, hater5, hater6];

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

