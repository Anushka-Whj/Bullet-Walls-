var bullet, wall;
var speed, weidgt, thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(30,25)
  thickness=random(22,83)

	bullet=createSprite(50, 200, 50,20);   
	bullet.velocityX = speed;
	bullet.shapeColor=color("white");

  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}

function draw() {
  background("pink"); 
  
 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180){
		bullet.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100){
		bullet.shapeColor=color(230,230,0);
	}

	if(deformation<100){
		bullet.shapeColor=color(0,255,0);
	}
  } 
 
  drawSprites()
}

function hasCollided(Lbullet,Lwall){
  if(hasCollided(bullet,wall)){

    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thicness*thickness*thicness)
  }
  
  if(damage>10){
  wall.shapeColor="red"(255,0,0)
  
  }
  if(damage<10){
  wall.shapeColor="green"(0,255,0)
  
  }
  


bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
return True;

}

return false;


}




  

 
