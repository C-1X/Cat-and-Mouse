var canvas,bg;
var together;
var mouse, mouseImg1,mouseImg2;
var cat, catImg1,catImg2;

function preload() {
    bg = loadImage("images/garden.png");
    mouseImg1= loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3= loadAnimation("images/mouse4.png");
    catImg1=loadAnimation("images/cat1.png");
    catImg2= loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", mouseImg1);
    mouse.scale = 0.2;

}

function draw() {

    background(bg);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catFinal", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catFinal");
        mouse.addAnimation("mouseFinal", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseFinal");
    }  

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catMove", catImg2);
        cat.changeAnimation("catMove");
        
        mouse.addAnimation("mouseMove", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseMove");
    }
}
