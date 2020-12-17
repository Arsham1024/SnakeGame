//This is the size of one square
var scl = 20;
var snake;
var food; 

function setup(){
   createCanvas(600,600);
   snake = new Snake();
   //Make it slower
   frameRate(10);
   pickLocation();
}

//This function will limit the food location to be in an exact grid.
function pickLocation(){
   var cols = floor (width/scl);
   var rows = floor (height/scl);
   //Floor to be whole numbers.
   food = createVector(floor(random(cols)), floor(random(rows)));
   food.mult(scl);
}

function draw(){
   background(51);
   
   if(snake.eat(food)){
      pickLocation();
   }

   snake.update();
   snake.show();


   fill(255, 9, 100);
   rect (food.x , food.y , scl , scl);
}

//For the movement of the snake
function keyPressed (){
   //KeyCode is built in variavle
   if(keyCode === UP_ARROW){
      snake.dir(0,-1);
   }else if (keyCode === DOWN_ARROW){
      snake.dir(0,1);
   }else if (keyCode === RIGHT_ARROW){
      snake.dir(1,0);
   }else if (keyCode === LEFT_ARROW){
      snake.dir(-1,0);
   }
}
