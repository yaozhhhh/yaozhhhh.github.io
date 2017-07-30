/**
 * Created by yaozhihao on 2017/7/30.
 */

var symbolSize= 10;
var streams= [];

function setup(){
    createCanvas(innerWidth,innerHeight);
    background(0);
    var x=0;

    for(var i=0;i<=width/symbolSize;i++){
        var stream= new Stream();
        stream.generateSymbols(x,random(-800,0));

        streams.push(stream);
        x+=symbolSize;

    }

}

function draw() {
    background(0,50);
    streams.forEach(function (stream) {
        stream.render();
    });
}

function Symbol(x,y,speed,first){
    this.x=x;
    this.y=y;
    this.value;
    this.speed= speed;
    this.ospeed= speed;
    this.first= first;
    this.switchInterval = round(random(5,20));

    this.setToRandomSymbol= function(){
        if(frameCount% this.switchInterval ==0){
            this.value= String.fromCharCode(0x21 + round(random(0,50)));
        };

    }



    this.rain=function (){
        if(this.y>=height){
            this.y=0;
        }else{
            this.y+= this.speed;
        }
    }
}

function Stream() {
    this.symbols=[];
    this.num= round(random(5,20));
    this.speed= random(1,8);
    this.ospeed= this.speed;
    this.generateSymbols= function (x,y) {
        var first= round(random(0,4))==1;

        for(var i=0;i<this.num;i++){
            symbol= new Symbol(x,y,this.speed, first);
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            y-= symbolSize;
            first= false;
        }
    }
    
    this.render= function () {
        this.symbols.forEach(function (symbol) {
            if(symbol.first){
                fill(180,250,167);
                textSize(symbolSize+5);
                text(symbol.value, symbol.x, symbol.y);
            }else{
                fill(45,180,60,200);
                textSize(symbolSize);
                text(symbol.value, symbol.x, symbol.y);
            }


            if(symbol.x!=mouseX)symbol.speed= symbol.ospeed;
            if(symbol.x<mouseX && mouseX<symbol.x+symbolSize)symbol.speed=0;


            symbol.rain();
            symbol.setToRandomSymbol();
        });
    }
}