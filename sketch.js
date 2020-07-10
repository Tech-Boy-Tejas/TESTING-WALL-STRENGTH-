  var motionState = "nil";
  var bullet,speed,weight;
  var wall,thickness;
  var damage;
  var slowMotion_sprite;

function setup() {
    createCanvas(1600,400);

    thickness = Math.round(random(22,83));
    speed = Math.round(random(223,321));
    weight = Math.round(random(30,52));

    wall = createSprite(1200,200,thickness,height/2);
    wall.shapeColor = "blue";

    bullet = createSprite(20,200,30,3);
    bullet.shapeColor = "white";
    bullet.velocityX = random(10,20);

    slowMotion_sprite = createSprite(860,35,150,40);
    slowMotion_sprite.shapeColor = "black";

    

}

function draw() {
    background("black");

    text("BULLET SPEED: " + speed,50,20);
    text("BULLET WEIGHT: " + weight,50,40);
    text("THICKNESS OF WALL: " + thickness,50,60)
    
      if(ifTouching(bullet,wall)){
        slowMotion_sprite.shapeColor = "yellow";
        damage = Math.round((0.5 * weight * speed * speed)/(thickness * thickness * thickness));
        text(damage,800,50);
        bullet.velocityX = 0;
          if(damage > 15){
            bullet.shapeColor = "red";
            wall.shapeColor = "red";
          }
          else{
            bullet.shapeColor = "green";
            wall.shapeColor = "green";
          }

          if(mousePressedOver(slowMotion_sprite)){
            motionState = "viewInSlowMotion";
            bullet.x = 20;
          }
      }

      if(motionState === "viewInSlowMotion"){
        bullet.velocityX = 2;
        goCollide(bullet,wall);
      }

    drawSprites();

    textSize(13);
    fill("red");
    text("VIEW IN SLOW MOTION",787,40);

}