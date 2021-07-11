var mainPlane1,mainPlane2;
var planeImg;
var bullet;
var bulletImg;

var enemy, enemy1;
var enemyImg;

function preload(){

planeImg= loadImage("plane.png");
bulletImg= loadImage("bullet.png");

enemyImg= loadImage("Opponent.png");
}

function setup() {

  createCanvas(1200,600);

 mainPlane1=createSprite(970, 150, 50, 50);
 mainPlane1.addImage(planeImg);
 mainPlane1.scale= 0.25;

 mainPlane2=createSprite(970, 450, 50, 50);
 mainPlane2.addImage(planeImg);
 mainPlane2.scale= 0.25;

 enemy=createSprite(230, 220, 50, 50);
 enemy.addImage(enemyImg);
 enemy.scale= 0.25;

 enemy1=createSprite(230, 520, 50, 50);
 enemy1.addImage(enemyImg);
 enemy1.scale= 0.25;
}

function draw() {

  background(0);
  
  if (keyDown("LEFT_ARROW")){
    bullet = createSprite(970, 220, 50, 50);
    bullet.addImage(bulletImg);
    bullet.scale= 0.03;

    bullet.velocityX= -40;
  }

  
  if (keyDown("A")){
    bullet = createSprite(970, 520, 50, 50);
    bullet.addImage(bulletImg);
    bullet.scale= 0.03;

    bullet.velocityX= -40;

    
  }



  drawSprites();
}