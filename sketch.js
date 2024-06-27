
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob=[], roofObject
var rope=[];
var world;
var bobno=0
var ballrad=60
var pushno =1
var currentpush=0
var total=2
function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,height/6,6*width/8,20);
	//bob1 = new bob(320,355,40)
	// bob2 = new bob(360,355,40)
	// bob3 = new bob(400,355,40)
	// bob4 = new bob(440,355,40)
	// bob5 = new bob(480,355,40)
	CREATE()
	//rope1=new rope(bob1.body,roofObject.body,-80)
	// rope2=new rope(bob2.body,roofObject.body,-40)
	// rope3=new rope(bob3.body,roofObject.body,0)
	// rope4=new rope(bob4.body,roofObject.body,40)
	// rope5=new rope(bob5.body,roofObject.body,80)
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  textSize(30)
  
  roofObject.display();

  //rope1.display();
//   rope2.display();
//   rope3.display();
//   rope4.display();
//   rope5.display();
  for(var i=bob.length-1;i>=0;i--){
	if(bob[i].push===true){
		if(currentpush>pushno){
			bob[i].push=false
			currentpush=currentpush-1
		}
	}
  }
  for(bobs of bob){
	if(bobs.push===false){
		if(currentpush<pushno){
			bobs.push=true
			currentpush=currentpush+1
		}
	}
	bobs.display()
  }
  for(ropes of rope){
	ropes.display()
  }
 // bob1.display();
//   bob2.display();
  
//   bob3.display();
//   bob4.display();
//   bob5.display();
fill('blue')
	text("Use UP AND DOWN ARROWS TO PUSH BOBS",50,80)
	text('Use + AND - KEYS TO ADD AND REMOVE BOBS',50,30)
	text('Use RIGHT AND LEFT ARROWS TO CHANGE NO OF BALLS PUSHED  ' + pushno,50,height-30)
}


//CHOOSE THE CORRECT OPTION TO APPLY A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		for(bobs of bob){
			if(bobs.push===true){
			
		Matter.Body.applyForce(bobs.body,bobs.body.position,{x:50,y:-45});
			}
		}
		
	}
	if (keyCode === UP_ARROW) {
		for(bobs of bob){
			if(bobs.push===true){
				Matter.Body.applyForce(bobs.body,bobs.body.position,{x:-50,y:-45});
			}
		}
		
		
	}
	if (keyCode === LEFT_ARROW) {
	if(pushno>1){
		pushno=pushno-1
	}
	}
	if (keyCode === RIGHT_ARROW) {
		if(pushno<total){
			pushno=pushno+1
		}
		}
	
	if(keyCode === 107){
		if(total<no){
		world.bodies.length=0
		world.constraints.length=0
		bob=[]
		bobno=0
     currentpush=0
	 

 total=total+1
 if(pushno>total){
	pushno=pushno-1
 }
 roofObject=new roof(width/2,height/6,6*width/8,20);
 CREATE()
		}
	}
	if(keyCode === 109){
		if(total>0){
		world.bodies.length=0
		world.constraints.length=0

		bob=[]
		rope=[]
		bobno=0
currentpush=0

 total=total-1
 roofObject=new roof(width/2,height/6,6*width/8,20);
 CREATE()
		}
	}
	
}



function bobropecreate(x,y,r){
	bob[bobno]=new Bob(x,y,r)
	rope[bobno]= new Rope(bob[bobno].body,roofObject.body)
	bobno++
}
function CREATE(){
	no = Math.round((6*width/8- ballrad)/ballrad)
	
	for (var i=(width/2- 3*total/no*width/8+ballrad/2);i<=(width/2+3*total/no*width/8-ballrad/2);i=i+ballrad){
		bobropecreate(i,5*height/6,ballrad)
	}
	
}
