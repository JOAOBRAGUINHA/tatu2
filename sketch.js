var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var TATU
var forest
var buracoimg
var cloud
var grupburacos



function preload(){
buracoimg=loadImage("buraco de tatu.png")
forest=loadImage("forest.png")
TATU= loadImage("TATU.png")
}

function setup(){
  
  createCanvas(1200,800);

  path=createSprite(600,400)
  path.addImage(forest);
  path.velocityX = -4;
  grupburacos=new Group()

//crie um sprite de menino
boy=createSprite(250,540);
boy.addImage(TATU)
//adicione uma animação de corrida para ele
boy.scale=0.15;
  
//crie um limite à esquerda

//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita

//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityX = -4;
  
  // mover o menino com o mous-e usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.x <250 ){
    path.x = path.width/2;
  }
  spawnClouds()
  if (boy.collide(grupburacos)){
if (boy.visible===true){
  boy.visible=false
   } else{
    boy.visible=true 
   }
  }
  drawSprites();
}
function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 250 === 0) {
    var cloud = createSprite(1200,600,40,10); 
    cloud.addImage(buracoimg);
    cloud.scale = 0.3;
    cloud.velocityX = -3;
    grupburacos.add(cloud)
     //atribua tempo de vida à variável
   
    //ajustar a profundidade
    cloud.depth = boy.depth;
    boy.depth = boy.depth + 1;
    
    //adicione cada nuvem ao grupo
    
  }
}