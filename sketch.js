var scene,scene_img;
var coinGroup, coin_img;
var player, player_img;
var tool, tool_img;

function preload(){
    scene_img = loadImage("background.jpg");
    coin_img = loadImage("coin.png");
    player_img = loadImage("player.png");
    tool_img = loadImage("shovel.png");
}


function setup(){

    createCanvas = (2000,1000);
    scene = createSprite(300,500,2000,1200);
     scene.addImage(scene_img);
    scene.scale = 2;
    scene.velocityY = 1;

    player = createSprite(300,100,50,50);
    player.addImage(player_img);
    player.scale = 0.25;


    tool = createSprite(260, 150, 50, 50);
    tool.addImage(tool_img);
    tool.scale = 0.5;


    coinGroup = createGroup();
}



function draw(){
    background(0);
    if(scene.y >250 ){
       scene.y = scene.height/2;
      }

      if(keyDown("DOWN_ARROW")){
        player.y = player.y + 4;
        tool.y = tool.y + 4;
      }
      
      if(keyDown("UP_ARROW")){
        player.y = player.y - 4;
        tool.y = tool.y - 4;
      }
      
      if(keyDown("RIGHT_ARROW")){
        player.x = player.x + 4;
        tool.x = tool.x + 4;
      }
      
      if(keyDown("LEFT_ARROW")){
        player.x = player.x - 4;
        tool.x = tool.x - 4;
      }
    spawnTreasure();
    drawSprites();
}

function spawnTreasure(){
    if(World.frameCount % 120 === 0){
      var treasure = createSprite(320, 350, 10, 10);
      treasure.addImage(coin_img);
      treasure.scale = 0.05;
      treasure.velocityX = 2;
      //treasure.velocityY = randomNumber(-1,-5);
      //treasure.y = randomNumber(150, 350);
      treasure.x = Math.round(random(1,6));
      coinGroup.add(treasure);
    }
  }
  