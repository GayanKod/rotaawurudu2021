var myGamePiece;
var timer;
var finish;
var count=0;
var counter=0;

function startGame() {
    myGamePiece = new component(20, 20, "pen.png", 10, 120, "image");
    timer=new component("30px", "Consolas", "BLACK", 400, 30, "text");
    myGameArea.start();
}

function start(){
    if(counter==0){
        myGameArea.set();
        counter++;
    }
    
}


var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 600;
        this.canvas.height = 420;
        myGameArea.key = false;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
        counter=0;
        this.frameNo=0;
    },
    set : function(){
        this.interval = setInterval(updateGameArea, 150);
    }
}


function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x =x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        }
        else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        }else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        
    }
    
    this.finish=function(){
        myGameArea.clear();
        ctx.beginPath();
        ctx.arc(this.x,this.y+20,4,0,2 *Math.PI);
        ctx.arc(110,130,8,0,2 *Math.PI);

        let distance = Math.sqrt(Math.pow(Math.abs(parseInt(this.x)-110),2) + Math.pow(Math.abs(parseInt(this.y)-130),2)).toFixed(3);
        
        document.getElementById("marks").innerText = distance;

        ctx.fillStyle="#FF0000";
        ctx.strokeStyle = "#6b0700";
        ctx.fill();
        ctx.stroke();
        timer.update();
        
    }

    this.newPos = function() {
        
        this.x = Math.floor((Math.random() * 600) + 1);
        this.y = Math.floor((Math.random() * 400) + 1);        
    }

    this.closePos =function(){
        this.x=Math.floor(Math.random() * 130)+90;
        this.y=Math.floor(Math.random() * 150)+110;
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGameArea.frameNo += 1;
    timer.text = "TIME: " + myGameArea.frameNo;
    timer.update();
    if(90<parseInt(this.x)<130 && 110<parseInt(this.y)<150 && count<4){
        myGamePiece.closePos();
        count=Math.floor(Math.random() * 6)+1;
    }else{
        myGamePiece.newPos();
        count=0;
    }
    
    myGamePiece.update();
}

function stopGame(){
    myGameArea.stop();
    myGamePiece.finish();

}

