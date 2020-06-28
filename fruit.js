class Fruit{
  constructor(){
    this.x;
    this.y;
    this.randomPosition();
  }

  randomPosition(){
    this.x = Math.floor(Math.random() * Math.floor(row))*scale;
    this.y = Math.floor(Math.random() * Math.floor(column))*scale;
  }

  eatBy(snake){
    if( snake.x === this.x && snake.y == this.y ){
      snake.score++;
      return true;
    }
    return false;
  }

  draw(ctx){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.x, this.y, scale, scale);
  }
}
