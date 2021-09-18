var canvas;
var music;
var greenBox,blueBox,redBox,yellowBox;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    greenBox=createSprite(0,580,200,30);
    greenBox.shapeColor="green";

    blueBox=createSprite(295,580,200,30);
    blueBox.shapeColor="blue";

    redBox=createSprite(515,580,200,30);
    redBox.shapeColor="green";

    yellowBox=createSprite(740,580,200,30);
    yellowBox.shapeColor="yellow";

    //create box sprite and give velocity
    box=createSprite(random(20,750),100,40,40);
    box.shapeColor="grey";
    box.velocityY=4;
    box.velocityX=5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);



    //add condition to check if box touching surface and make it box
    if(greenBox.isTouching(box) && box.bounceOff(greenBox)){
        box.shapeColor="purple";
        music.play();
    }
    if(blueBox.isTouching(box)){
        box.shapeColor="orange"
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(redBox.isTouching(box)){
        box.shapeColor="green";
    }
    if(yellowBox.isTouching(box) && box.bounceOff(yellowBox)){
        box.shapeColor="pink";

    }
    drawSprites();

}
