//画面サイズ
const SCREEN_W = 180;
const SCREEN_H = 320;

//キャンバスサイズ
const CANVAS_W = SCREEN_W *2;
const CANVAS_H = SCREEN_H *2;

//フィールドサイズ
const FIELD_W = SCREEN_W *2;
const FIELD_H = SCREEN_H *2;

//キャンバス
let can = document.getElementById("can");
let con = can.getContext("2d");
can.width = CANVAS_W;
can.height = CANVAS_H;

//星の数
let STAR_MAX = 300;

function rand(min, max)
{
  return Math.floor(Math.random()*(max-min+1))+min;
}

//星のクラス
class Star{
  constructor(){
    this.x = rand(0, FIELD_W)<<8;
    this.y = rand(0, FIELD_H)<<8;
    this.vx = 0;
    this.vy = rand(30, 200);
    this.sz = rand(1,2);
  }
  draw(){
    con.fillStyle = rand(0,2)!=0?"66f":"#8af";
    con.fillRect(this.x>>8,this.y>>8, this.sz, this.sz);

  }

  update(){
    this.x += this.vx;
    this.y += this.vy;
    if(this.y>FIELD_H<<8){
      this.y = 0;
      this.x = rand(0,FIELD_W)<<8;
    }
  }
}
let star=[];
for(let i=0; i<STAR_MAX; i++)star[i] = new Star();

con.fillStyle= "black";
con.fillRect(0,0,SCREEN_W, SCREEN_H);

for(let i=0; i<STAR_MAX; i++)star[i].draw();
