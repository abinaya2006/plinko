
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles=[]
var plinkos = []
var divisions=[]
var rows=[];


var rowsHeight = 150;
var rows
function preload()
{
	
}

function setup() {
	createCanvas(1360, 630);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	grou1= new Ground(700,615,10000,20)
	grou2=new Ground(0,10,20,10000)
	grou3=new Ground(1340,10,20,10000)

	for (var i = 0; i <= width; i += 150) {
		divisions.push(new Divisions(i, 510, 10, 180));
	  }


	  for (var j = 65; j <=1250; j=j+70) {
		plinkos.push(new Plinko(j,75));
	 }

	 for (var j = 75; j <=1300; j=j+70) {
		plinkos.push(new Plinko(j,175));
	 }

	 
	 for (var j = 65; j <=1300; j=j+70) {
		plinkos.push(new Plinko(j,275));
	 }

	 for (var j = 75; j <=1300; j=j+70) {
		plinkos.push(new Plinko(j,375));
	 }


	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  grou2.display()
  grou3.display()
  grou1.display()
 
for ( var i=1;i<10;i++) {
    divisions[i].display();
 }


 for (var i = 1; i < plinkos.length; i++) {
	plinkos[i].display();  
 }
	
 

 if(frameCount%20===0){
	particles.push(new Particles(random(100,1300), 10,10));
	
  }

  for (var j = 0; j < particles.length; j++) {
  
	particles[j].display();
 }




  drawSprites();
  textSize(30)
  stroke ("white")
  fill ("black")
  text ("1st block",20,450)
  text ("2nd block",160,450)
  text ("3rd block",310,450)
  text ("4th block",460,450)
  text ("5th block",610,450)
  text ("6th block",760,450)
  text ("7th block",910,450)
  text ("8th block",1060,450)
  text ("9th block",1208,450)

}



