class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			inertia:0,
			frictionStatic:0,
			frictionAir:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.push=false
		if(currentpush<pushno){
			this.push=true
			currentpush=currentpush+1
						}
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

