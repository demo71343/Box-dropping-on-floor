//namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

//create object
var object;

function setup() {
  createCanvas(400,400);

//engine = Engine.create();
//world = engine.world;
//add object in bodies
//object = Bodies.rectangle(200,100,50,50);
//World.add(world,object);
//console.log(object);

 
}

function draw() {
  background(0); 
  rectMode(CENTER); 
  rect(200,200,50,50);
  drawSprites();
}