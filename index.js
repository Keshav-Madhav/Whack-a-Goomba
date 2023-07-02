
var goombaAt;
var spikeAt;
var score=0;
var gameOver=false;

document.querySelectorAll("*").forEach((elem) => {
    elem.setAttribute('draggable', false)
    elem.addEventListener('dragstart', (event) => {
        event.preventDefault()
    })
})

window.onload=function(){
    setGame();
}

function setGame(){
    for(let i=0;i<9;i++){
        let tile=document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setGoomba,700);    //0.5secs
    setInterval(setSpike,750);     //0.75secs
}

function setGoomba(){

    if(gameOver){return;}

    if(goombaAt){
        goombaAt.innerHTML=" ";
    }

    let goomba=document.createElement("img");
    goomba.src="./Assets/goomba.png"

    let num=getRandomTile();

    if(spikeAt && spikeAt.id==num){
        return;
    }

    goombaAt=document.getElementById(num);
    goombaAt.appendChild(goomba);
}

function getRandomTile(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setSpike(){
    if(gameOver){return;}

    if(spikeAt){
        spikeAt.innerHTML=" ";
    }

    let spike=document.createElement("img");
    spike.src="./Assets/Spike_Ball.png";

    let num=getRandomTile();

    if(goombaAt && goombaAt.id==num){
        return;
    }

    spikeAt=document.getElementById(num);
    spikeAt.appendChild(spike);
}

function selectTile(){
    if(gameOver){return;}

    if(this==goombaAt){
        score+=10;
        document.getElementById("score").innerText=score.toString();
    }
    else if(this==spikeAt){
        document.getElementById("score").innerText="Game Over: "+score.toString();
        gameOver=true;
    }
    else{
        score-=20;
        document.getElementById("score").innerText=score.toString();
    }
}