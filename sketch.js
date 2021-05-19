const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, body;
var bg, player,forms,rules;
gameState="FORM";

function preload() {
 
  
  bg= loadImage("bg.jpeg");
  bishop = loadImage("11 (1).png");
  rook = loadImage("9 (1).png");
  knight = loadImage("10 (1).png");
  queen = loadImage("0(1).png");
 
  
}

function setup() {
  createCanvas(600,600);

  form = new Form();
  engine=Engine.create();
  world=engine.world;
  rules = new Rule();
  
}

function draw() {
  background(bg);
  

  if (gameState==="FORM"){
    form.display();
  }
  if (gameState==="RULE"){
    rules.display();
  }
  if (gameState==="PLAY"){
    Engine.update(engine);
    form.greeting.hide();
  }
  drawSprites()
}