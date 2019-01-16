var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
canvas.style.background = "rgba(0,0,0,1)";



var score = 0;
//Initialising the player
var player = new Cell(World.width/2, World.height/2, 100);
player.color = "blue";
player.borderColor = "lightblue";

Camera.x = player.x - Camera.width/2;
Camera.y = player.y - Camera.height/2;

//Initialsing the food
var food = [];
for(let i = 0; i < FOODCOUNT; i++){
  food[i] = new Cell(Math.random() * World.width, Math.random()* World.height);
}

var enemies = [];
for(let i = 0; i < ENEMY_COUNT; i++){
  enemies[i] = new Cell(Math.random() * World.width, Math.random()* World.height, Math.random()* 50 + 10);
  enemies[i].vx = Math.random()*0.2;
  enemies[i].vy = Math.random()*0.2;
}

function draw(){

  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for(let i = 0; i < FOODCOUNT; i++){
    food[i].draw(ctx);
  }
  for(let i = 0; i < ENEMY_COUNT; i++){
    enemies[i].draw(ctx);
  }
  player.draw(ctx);
}

function update(){
  player.move();
  for(let i = 0; i < ENEMY_COUNT; i++){
    if(player.checkCollision(enemies[i])){
      if(player.radius > enemies[i].radius){
          score+= enemies[i].radius;
          player.eat(enemies[i]);
          enemies[i].reset();
      }
      else{
        enemies[i].eat(player);
        player.x = World.width/2;
        player.y = World.height/2;

        player.radius = 50;
        player.vx = 0;
        player.vy = 0;
      }
    }
    enemies[i].move();
  }
  for(let i = 0; i < FOODCOUNT; i++){
    if(player.checkCollision(food[i])){
      food[i].x = Math.random() * World.width;
      food[i].y = Math.random() * World.height;
      player.eat(food[i]);
    }
  }
  Camera.x = player.x - Camera.width/2;
  Camera.y = player.y - Camera.height/2;
}

function gameLoop(){
  update();
  draw();
  window.requestAnimationFrame(gameLoop);
}
gameLoop();
