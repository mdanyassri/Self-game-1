const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,body;
var ball;
var cup1,cup2,cup3;
var ground1,ground2,ground3,ground4;
var obstacle,obstacle2,obstacles;
var charges;
var canJump;

function setup(){
    createCanvas(1200,400);

    engine= Engine.create();
    world = engine.world
    obstacles = [];
    charges = 2;

    ground1 = new Ground(600, 390, 1200, 30,0,0);
    ground2 = new Ground(600, 10, 1200, 30, 0, 0);
    ground3 = new Ground(0, 200, 20, 400, 0, 0);
    ground4 = new Ground(1200, 200, 20, 400, 0, 0);

    cup1 = new Cup(1160, 330, 30, 60);
    cup2 = new Cup(1080, 330, 30, 60);
    cup3 = new Cup(1120, 360, 100, 30 );

    ball = new Ball(100,360,25);

    for(var x = 200; x < 1100; x+=100){
        if(x >= 500 && x <= 700){
          obstacle = new Ground(x, 400, 100, random(50, 200), 0, 1);
        }else{
          obstacle = new Ground(x, 400, 100, random(150, 400), 0, 1);
        }
        obstacle2 = new Ground(x, 0, 100, random(100, 200), 180, 1);
        obstacles.push(obstacle);
        obstacles.push(obstacle2);
      }

}
function draw(){
    background(50,50,55);
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();

    cup1.display();
    cup2.display();
    cup3.display();

    ball.display(100,100,100);

    for(var x = 0; x < obstacles.length; x++){
        obstacles[x].display();
    }
    if(frameCount % 80 === 0 && charges !== 2){
        charges += 1;
    }
    fill("pink");
    textSize(20);
    text("Throw away your trash!!/Hit the left,right and up arrows to toss it!", 450, 200);
    text("Moves: " + charges, 20, 50);

}

function keyPressed(){
    if(keyCode === 39 && charges > 0){
     ball.flingForward();
     charges--;
    }
    if(keyCode === 38 && charges > 0){
     ball.flingUp();
     charges--;
    }
    if(keyCode === 37 && charges > 0){
     ball.flingBack();
     charges--;
    }
}

