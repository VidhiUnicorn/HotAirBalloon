var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var height

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png",
   "hotairballoon2.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAir",balloonImage1);
   balloon.addAnimation("hotAirBalloon",balloonImage2);
balloon.changeAnimation("hotAir");
  balloon.scale=0.5;

database.ref("balloon/height").on("value",readHeight,showError);

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  var balloon

  if(keyDown(LEFT_ARROW)){
   // balloon.changeAnimation("hotAirBalloon");
    updateHeight(-5,0);
    //write code to move air balloon in left direction
    
  }
  else if(keyDown(RIGHT_ARROW)){
   // balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(5,0);
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    //balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(0,-5);
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
   // balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(0,5);
    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function readHeight(h){
  height = h.val();
  console.log(height.x);
  balloon.x = height.x;
  balloon.y = height.y;

}
function updateHeight(a,b){
  database.ref("balloon/height").update({
    x : height.x +a,
    y : height.y +b,
  })
}
function showError (){

}