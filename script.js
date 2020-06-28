window.onload=main;

const scale = 10;
const taille = 300;
const row = taille / scale;
const column = taille / scale;

function main(){
  let plateau = new Plateau();
}

class Plateau {

  constructor() {
    this.canvas = $('#canvas')[0];
    this.ctx = this.canvas.getContext("2d");
    this.snake = new Snake();
    this.fruit = new Fruit();

    setInterval(()=>{
       this.update();
     }, 150);

  }

  update(){

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let miam = this.fruit.eatBy(this.snake);
    if(miam){
      this.fruit.randomPosition();
    }
    this.fruit.draw(this.ctx);

    this.snake.update(this.canvas,miam);
    if(this.snake.checkCollision())
      this.snake = new Snake();
    this.snake.draw(this.ctx);


  }

}
