var garden,gardenImg;
var cat,catImg;
var rat,ratImg;
var rat2Img,cat2Img;
var rat3Img,cat3Img;
function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg=loadAnimation("images/cat1.png");
    ratImg=loadAnimation("images/mouse1.png");
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png");
    rat2Img=loadAnimation("images/mouse2.png","images/mouse3.png");
    cat3Img=loadAnimation("images/cat4.png");
    rat3Img=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400);
    garden.addImage(gardenImg);
    cat=createSprite(700,640);
    cat.addAnimation("cat_1",catImg);
    cat.scale=0.175;
    rat=createSprite(100,650);
    rat.addAnimation("rat_1",ratImg);
    rat.scale=0.125;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    if(cat.x-rat.x<rat.width/2-cat.width/2){
        cat.x=rat.x+100;
        cat.velocityX=0;
        cat.addAnimation("cat_1",cat3Img);
        rat.addAnimation("rat_1",rat3Img);
    }
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")){
      cat.addAnimation("cat_1",cat2Img);
      rat.addAnimation("rat_1",rat2Img);
      cat.velocityX=-2;
  }
}
