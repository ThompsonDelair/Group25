// C A N V A S

let fishcanvas = document.getElementById("canvas");        
let context = canvas.getContext('2d');

// I M A G E S

let bg = new Image;
bg.src = "images/fishing/bg640.png";

let shell = new Image
shell.src = "images/fishing/shell.png";

let frame1 = new Image;
frame1.src = "images/fishing/frame1.png"

let frame2 = new Image;
frame2.src = "images/fishing/frame2.png"

let frame3 = new Image;
frame3.src = "images/fishing/frame3.png"

let erikfish = new Image;
erikfish.src = "images/fishing/erikfish.png";

let johnfish = new Image;
johnfish.src = "images/fishing/johnfish.png";

let thompsonfish = new Image;
thompsonfish.src = "images/fishing/thompsonfish.png";

let oscarfish = new Image;
oscarfish.src = "images/fishing/oscarfish.png";

var currentFrame = frame1;

let scoreFish = new Image;
scoreFish.src = "images/fishing/score.png";

let hook = new Image;
hook.src = "images/fishing/hook.png";

let pile = new Image;

let easterEgg = new Image;
easterEgg.src = "images/fishing/EasterEgg.png";

let easterEgg2 = new Image;
easterEgg2.src = "images/fishing/EasterEgg2.png";

let easterEgg3 = new Image;
easterEgg3.src = "images/fishing/EasterEgg3.png";

// T R A C K  M O U S E

var mouseX = 320;
var mouseY = 400;

canvas.addEventListener('mousemove',function( event ){
    var x = event.pageX - fishcanvas.offsetLeft;
    //var x = event.pageX;
    var y = event.pageY;
    mouseX = x;
    mouseY = y;
    
});

//  O N  C L I C K

var playingAnimation = false;

fishcanvas.addEventListener('mousedown',function(){
     
    // play animation
    if(playingAnimation == false){
        playAnimation();
        
        // check if caught main fish
        if(mouseX > mainFish.x - 20 && mouseX < (mainFish.x + mainFish.width + 20)){
            if(mouseY > mainFish.y - 20 && mouseY < (mainFish.y + mainFish.height + 20)){
                score++;
                onCatch();
            } else {
                onMiss();
            }
        } else {
            onMiss();
        } 
    }
    
},false);

// G A M E  
var score = 0;
let spawnBossScore = 20;

// the area the fish can spawn and swim in
let gameBorder = 15;
let spawnBorder = gameBorder + 75;
        
// O N  C A T C H

function onCatch(){            
    
    // pop-up text
    catched = new popupText();
    catched.color = "#005c97";
    let rand = Math.floor(Math.random() * 3);
    if(rand == 0){
        catched.text = "CAUGHT!";             
    } else if (rand == 1){
        catched.text = "HOOK'ED!";
    } else if (rand == 2){
        catched.text = "FISHES +1!";
    }
    
    catched.x = mainFish.x;
    catched.y = mainFish.y;
    popupTexts.push(catched);
    
    // spawn fish if game is not over
    if(score < 21){
        spawnFish();
    } else {
        // clear popup text when game is over
        popupTexts.splice(0,popupTexts.length);
        
        // teleport fish off screen when game is over
        mainFish.x = 99999;
        mainFish.y = 99999;
    }
    
    // make score text big
    scoreTextSize = 40;
   
    // make fish pile get bigger            
    if(score > 12){
        pile.src = "images/fishing/pile3.png";
    } else if (score > 6){
        pile.src = "images/fishing/pile2.png";
    } else if (score > 0) {
        pile.src = "images/fishing/pile1.png";
    }
}

//  O N  M I S S 

function onMiss(){
    
    // pop-up text
    catched = new popupText();
    catched.color = "#7bdbfb";
    let rand = Math.floor(Math.random() * 3);
    if(rand == 0){
        catched.text = "you missed!";             
    } else if (rand == 1){
        catched.text = "cant catch me!";
    } else if (rand == 2){
        catched.text = "too slow!";
    }
    catched.x = mainFish.x - 35;
    catched.y = mainFish.y;
    popupTexts.push(catched);
}

//  A N I M A T I O N        

// dont render hook when animation is playing
var showHook = true;

// base delay between animations
let delay = 215;

// fishing rod animation
function playAnimation(){
    
    playingAnimation = true;         
    
    setTimeout(function(){
        currentFrame = frame3;
        showHook = false;
    },delay * 0.25);
    
    setTimeout(function(){
        currentFrame = frame2;
    },delay * 0.75);
    
    setTimeout(function(){
        currentFrame = frame3;
    },delay * 1.75);
    
    setTimeout(function(){
        currentFrame = frame1;
    },delay * 2.5);
    
    setTimeout(function(){
        playingAnimation = false;
        showHook = true;
    },delay * 3.5);
}                

// P O P U P  T E X T

var scoreTextSize = 25;

// list of current popup texts
var popupTexts = new Array();

// popup text 'class'
function popupText(){
    this.text;
    this.textSize = 40;
    this.x;
    this.y;
    this.color;
    this.decayRate = 0.5;
}        

//  F I S H  I N F O  

var fishcounter = 0;
let fishAllowed = 1;

var spawnCooldown = 80;
var spawnTimeStamp = 0;

let jukeCooldown = 20;
let jukeTimestamp = jukeCooldown;

var fishes = new Array();

let fishSpeed = 12;

// fish "class"
function Fish (){
    this.image;
    this.x = 0;
    this.y = 0;
    this.width = 80;
    this.height = 60;
    this.speed;
    this.bounceXCooldown = 0;
    this.bounceYCooldown = 0;
    
    // generate fish direction            
    var rads = Math.random() * Math.PI * 2;
    this.vectorX = Math.cos(rads);
    this.vectorY = Math.sin(rads);
}

// get random fish
function randomFish(){
    let rand = Math.floor(Math.random() * 4);
    let returnFish = new Fish();
    
    if(rand == 0){
        returnFish.image = erikfish;                
    } else if (rand == 1){
        returnFish.image = johnfish;
    } else if (rand == 2){
        returnFish.image = thompsonfish;
    } else if (rand == 3){
        returnFish.image = oscarfish;
    }
    return returnFish;
}

// spawn fish
function spawnFish(){
    mainFish = randomFish();
    
    // increase fish speed over time
    if(score < 12){
        fishSpeed = 1 + score;
    }
    
    // spawn final boss
    if(score == spawnBossScore){
        fishSpeed = 18;
        mainFish.image = easterEgg;
        bossText = new popupText();
        bossText.text = "FINAL BOSS!";
        bossText.x = 130;
        bossText.y = 450;
        bossText.textSize = 80;
        bossText.color = "#e7a5ff";
        bossText.decayRate = 0.25;
        popupTexts.push(bossText);
    }           
    
    // set the newly spawned fish to have a random position in the spawn area
    mainFish.y = Math.random() * ((canvas.height/2) - spawnBorder * 2) + (spawnBorder) + (canvas.height/2);
    mainFish.x = Math.random() * (canvas.width - spawnBorder * 2) + (spawnBorder);  
}

//  G A M E  U P D A T E

var ticker = setInterval(tick,30);
var totalTicks = 0;

// spawn our starting fish
spawnFish();

// the game tick
function tick(){
    
    //  G A M E  L O G I C             
    
    // fish jukes are real
    if(jukeTimestamp < totalTicks && mainFish.bounceXCooldown <= 0 && mainFish.bounceYCooldown <= 0){
        var rads = Math.random() * Math.PI * 2;
        mainFish.vectorX = Math.cos(rads);
        mainFish.vectorY = Math.sin(rads);
        jukeTimestamp = totalTicks + jukeCooldown;
    }
    
    
    // bounce off sides            
    if(mainFish.bounceXCooldown <= 0){
        if(mainFish.x < 35 || mainFish.x > fishcanvas.width - mainFish.width - gameBorder){
            mainFish.vectorX *= -1;
            mainFish.bounceXCooldown = 3;
        }
    } else {
        mainFish.bounceXCooldown--;
    }
    
    if(mainFish.bounceYCooldown <= 0){
        if(mainFish.y > fishcanvas.height - mainFish.height -gameBorder || mainFish.y < 280){
            mainFish.vectorY *= -1;
            mainFish.bounceYCooldown = 3;
        }
    } else {
        mainFish.bounceYCooldown--;
    }
    
    // move fish
    mainFish.x += mainFish.vectorX * fishSpeed;
    mainFish.y += mainFish.vectorY * fishSpeed;
    
    //  R E N D E R  
    
    // background solid color
    context.fillStyle="#04aae1";
    context.fillRect(0,0,canvas.width,canvas.height);
    
    // backgroud image
    context.drawImage(bg,0,0);
    
    // shell
    context.drawImage(shell,0,0);
    
    // fish pile
    context.drawImage(pile,0,0);
    
    // turt
    context.drawImage(currentFrame,0,0);
    
    // pop-up text
    for(i = 0; i < popupTexts.length; i++){
        if(popupTexts[i].textSize < 25){
            popupTexts.splice(i,1);
        } else {
            context.fillStyle = popupTexts[i].color;
            context.font = popupTexts[i].textSize+"px Arial";
            context.fillText(popupTexts[i].text,popupTexts[i].x,popupTexts[i].y);
            popupTexts[i].textSize -= popupTexts[i].decayRate;
        }
    }
    
    // main fish            
    context.drawImage(mainFish.image,mainFish.x,mainFish.y,80,60);
    
    // score
    context.fillStyle="#47493c";
    context.drawImage(scoreFish,180,0);
    context.font = scoreTextSize+"px Arial";
    context.fillText(score+"/"+(spawnBossScore+1),255,57);
    
    // revert score text size over time
    if(scoreTextSize > 25){
        scoreTextSize -= 0.5;
    }
    
    // draw hook and line
    if(showHook){
       context.drawImage(hook,mouseX-15,mouseY-35,30,45);
        context.beginPath();
        context.moveTo(515,228);
        context.lineTo(mouseX,mouseY-29);
        context.stroke();
    }
    
    // end game screen            
    if(score >= spawnBossScore + 1){
        context.fillStyle="#7bdbfb";
        context.font = "70px Arial";
        context.fillText("Team 25!",160,420);
        
        context.drawImage(erikfish,160,460);
        context.drawImage(johnfish,360,450,200,100);
        context.drawImage(oscarfish,25,410,170,110);
        context.drawImage(thompsonfish,460,350);
        context.drawImage(easterEgg2,245,200);
        context.drawImage(easterEgg3,300,150);
    }
    
    // keep track of our total ticks
    totalTicks++;
}