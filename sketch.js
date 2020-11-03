var fixed
var movin
var fixed2
var fixed3
var fixed4
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400,300,50,50)
  movin=createSprite(400, 200, 50, 50);
  fixed2=createSprite(700,200,50,50)
  fixed3=createSprite(100,200,50,50)
  fixed4=createSprite(400,100,50,50)
 // movin.debug=true
 // fixed.debug=true

 // fixed.velocityX=4
  //movin.velocityX=-4
  //fixed.velocityY=-4
 // movin.velocityY=4
}

function draw() {
  background(255,255,255);
  movin.shapeColor="red"
  fixed.shapeColor="black"
  fixed2.shapeColor="black"
  fixed3.shapeColor="black"
  fixed4.shapeColor="black"
  movin.x=World.mouseX
  movin.y=World.mouseY 

if (collision(movin,fixed)){
  console.log("turn black")
  fixed.shapeColor="red"
  movin.shapeColor="black"
}
 
  if (collision(movin,fixed2)){
    fixed2.shapeColor="red"
    movin.shapeColor="black"
  }
  
    if (collision(movin,fixed3)){
      fixed3.shapeColor="red"
      movin.shapeColor="black"
    }
     
      if (collision(movin,fixed4)){
        fixed4.shapeColor="red"
        movin.shapeColor="black"
      }
       
  drawSprites();
}
/*function bounceoff(){
  if (fixed.x-movin.x<fixed.width/2+movin.width/2 &&
    movin.x-fixed.x<fixed.width/2+movin.width/2 ){
   fixed.shapeColor="red"
  movin.shapeColor="black"
  fixed.velocityX=(-1)*fixed.velocityX
  movin.velocityX=(-1)*fixed.velocityX
   }
  else {
      fixed.shapeColor="black"
    movin.shapeColor="red"
    }
}*/
