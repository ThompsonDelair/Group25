var fishSrc = "images/Core values.png";

var score = 0;
var fishCounter = 0;

var player = document.createElement('img');
player.src = "images/Core values (1).png";

document.getElementById('player').appendChild(player);

var spawnZone = document.getElementById('spawnZone');

var ticker = setInterval(tick,1000);

var fishes;

function tick(){
    console.log("tick");
    if(fishCounter < 20){
        var newFish = document.createElement('img');
        newFish.classList.add('fish');
        newFish.src = fishSrc;
        
        newFish.style.position = 'absolute';
        var left = (Math.random() * window.innerWidth)+'px';
        newFish.style.left = left;
        var topRange = (Math.random() * 0.7)+0.3;
        var top = (topRange * window.innerHeight)+'px';
        newFish.style.top = top;
        
        newFish.style.height = 100;
        
        //newFish.onclick = fishClick;
        
        spawnZone.appendChild(newFish);
        fishCounter++;
    }
    
    
}


document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
    
}

$(document).ready(function(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
});


function fishClick(){
    console.log("you clicked a fish!");
}

$(document).on('click', '.fish', function() { 
    console.log("boop");
    $(this).closest(".fish").remove();
    fishCounter--;
});

