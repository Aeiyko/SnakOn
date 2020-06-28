class Snake {

  constructor() {
    this.x = 0;
    this.y = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.tail = [];
    this.score = 0;
    addEventListener('keydown',(evt)=>{
      this.pressKey(evt.key);
    });
  }

  pressKey(dir){
    switch (dir) {
      case 'ArrowUp':
      case 'z':
      if(this.speedY != scale){
        this.speedX = 0;
        this.speedY = -scale;
      }
      break;
      case 'ArrowDown':
      case 's':
      if(this.speedY != -scale){
        this.speedX = 0;
        this.speedY = scale;
      }
      break;
      case 'ArrowLeft':
      case 'q':
      if(this.speedX != scale){
        this.speedX = -scale;
        this.speedY = 0;
      }
      break;
      case 'ArrowRight':
      case 'd':
      if(this.speedX != -scale){
        this.speedX = scale;
        this.speedY = 0;
      }
      break;
      default:
      break;
    }
  }

  update(canvas,miam){
    if(!miam)
      this.tail.pop();


    if(this.score > 0)
      this.tail.unshift({x:this.x, y:this.y});

    this.x += this.speedX;
    this.y += this.speedY;

    if(this.x < 0){
      this.x = canvas.width-scale;
    }
    else if (this.x >= canvas.width) {
      this.x = 0;
    }
    if(this.y < 0){
      this.y =  canvas.height-scale;
    }
    else if (this.y >= canvas.height) {
      this.y = 0;
    }

  }

  draw(ctx){
    ctx.fillStyle = "#FFFFFF";
    for (var i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);

  }

  checkCollision(){
    for (var i = 0; i < this.tail.length; i++) {
      if(this.tail[i].x == this.x && this.tail[i].y == this.y)
        return true;
    }
    return false;
  }
}
