var canvas;
var music;
var block1,block2,block3,block4,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
      block1 = createSprite(700,580,250,80);
      block1.shapeColor="red";

      block2 = createSprite(490,580,220,80);
      block2.shapeColor="green";

      block3 = createSprite(250,580,280,80);
      block3.shapeColor="yellow";

      block4 = createSprite(50,580,270,80);
      block4.shapeColor="blue";

    //create box sprite and give velocity
    box = createSprite(Math.round(random(20,750)),0,50,50);
    box.shapeColor="white";
    box.velocityY=5;

}

function draw() {
    background("black");
    //create edgeSprite
      box.bounceOff(edges);
      
    //add condition to check if box touching surface and make it box
    if(block1.isTouching(box) &&  box.bounceOff(block1)){
        box.shapeColor="red";
    }

    if(block2.isTouching(box) && box.bounceOff(block2)){
        box.shapeColor="lightgreen";
    }

    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor="yellow";
    }

    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor="blue";
    }



      
    drawSprites();
}

