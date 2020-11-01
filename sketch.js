var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var count=5;
var particle;
var gameState = "end";
var b1;

var divisionHeight=300;
var score =0;



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
  
 
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
 


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    
}
 


function draw() {
  background("black");
  text("Score : "+score,20,25);
 
  
  
  textSize(20)

  
  

  text("Tries Left : "+count,20,55);
 
  text("100",20,500);
  text("100",100,500);
  text("100",180,500);
  text("100",260,500);
  text("100",340,500);
  text("100",420,500);
  text("100",500,500);
  text("100",580,500);
  text("100",660,500);
  text("100",740,500);

 

  


  Engine.update(engine);
  if (gameState === "end") {
    particles.x = -400;
   
  }
  if (count === 0) {
push();
    textSize(40);
    text("GAME OVER ",300,350);
pop();
  gameState ="end";
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  }

  

function mousePressed() {
    
     
    
      particles.push(new Particle(mouseX, 10,10));
      score = score+100;
      count = count-1;
}



