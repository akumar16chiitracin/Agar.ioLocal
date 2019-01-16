class Cell{
  constructor(x = 0,y = 0, r = 5){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.radius = r;
    this.mass = 10;
    this.color = randomColor();
    this.borderColor = 'rgba(0,0,0,0)';
  }
  draw(ctx){
    let x = this.x - Camera.x;
    let y = this.y - Camera.y;
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = 5;
    ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
  move(){
    this.x += this.vx;
    this.y += this.vy;
  }
  eat(c2){
    this.radius = Math.sqrt(c2.radius * c2.radius
                    + this.radius * this.radius);
    //this.radius +=0.01;
  }
  reset(){
      this.x = Math.random() * World.width;
      this.y = Math.random()* World.height;
      //this.radius =  Math.random()* 150 + 100;
  }
  checkCollision(c2){
    if(distance(this.x, this.y, c2.x, c2.y) < this.radius + c2.radius)
      return true;
    else
      return false;
  }
}
function randomColor(){
  var colors = ["blue", "yellow", "pink", "red", "green"];
  return colors[Math.floor(Math.random()*colors.length)];
}
function distance(x1,y1, x2,y2){
  return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
}
