var bgImg;
var cat,mouse;



function preload() {
    bgImg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    mouseImg1 = loadAnimation("mouse1.png")
    catImg2 = loadAnimation("cat2.png","cat3.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(600,650);
    cat.scale = 0.2;
    cat.addAnimation("cat",catImg1);
    cat.addAnimation("cathappy",catImg2);
    mouse = createSprite(80,650);
    mouse.scale = 0.15;
    mouse.addAnimation("mouse",mouseImg1);
    mouse.addAnimation("mousehappy",mouseImg2);

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
  
    mouse.changeAnimation("mousehappy",mouseImg2);
    cat.changeAnimation("cathappy",catImg2);
    if(cat.isTouching(mouse))
  {
    cat.changeAnimation("cat",catImg1);
    mouse.changeAnimation("mouse",mouseImg1);
    cat.velocityX = 0;
  }
    //mouse.debug= true;
    //cat.debug= true;
    mouse.setCollider("rectangle",0,0,700,800);
    cat.setCollider("rectangle",0,0,1300,800);
    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here
   
   if(keyCode === RIGHT_ARROW)
   { cat.velocityX= -3;
     cat.frameDelay = 25;   
     mouse.frameDelay = 5;
   }
}
