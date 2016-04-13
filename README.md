frontend-nanodegree-arcade-game
===============================

Students should use this rubric: https://www.udacity.com/course/viewer#!/c-ud015/l-3072058665/m-3072588797

for self-checking their submission.


Engine.js
Delta Time or Delta Timing is a concept used amongst programmers in relation to hardware and network responsiveness. In graphics programming, the term is usually used for variably updating scenery based on the elapsed time since the game last updated, and also calculated separately if graphics are being multi-threaded.

app.js
Contains all enemy and hero constructor functions/classes. In addition, it also contains game resets, updates and collision checks. 


notes: This game is very basic and is simply designed for the player to use the directional keypad for the purposes of reaching the goal without colliding with the enemy. Upon colliding with the enemy or reaching the goal, the player will be sent back to the starting point without reseting the enemy bug locations. 

future plans: currently, collisions occur until the game is refreshed, which means that for every collision there could be up to 13 collisions. The new version would refresh the entire game and initiate only one collision. I would also like to add new sprites, and in game incentives, such as jewels and a point system.

Instructions:
1) download the "p4ArcadeGame" file
2) open index.html