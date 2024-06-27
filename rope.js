class Rope{
	constructor(body1,body2)
	{
		this.offsetX = -body2.position.x+body1.position.x
		var options={
			bodyA:body1,
			bodyB:body2,
			dampening:0,
			pointA:{x:0,y:0},
			pointB: {x:this.offsetX,y:0}
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//CHOOSE THE CORRECT OPTION TO RENDER A LINE BETWEEN THE TWO BODIES

		// line(pointA.x, pointA.y, pointB.y);
	 line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y);
		// line(pointA.x, pointA.y, pointB.x + this.offsetX);
		//line(pointA.x, pointA.y + this.offsetX, pointB.x, pointB.y);
	}

}