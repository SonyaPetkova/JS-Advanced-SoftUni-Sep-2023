const gameStart = document.querySelector(".game-start");
const gameArea = document.querySelector(".game-area");
const gameOver = document.querySelector(".game-over");
const gameScore = document.querySelector(".game-score");
const gamePoints = gameScore.querySelector(".points");
document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);
let keys = {};
let player = { x: 150, y: 100, width: 0, height: 0,lastTimeFiredFireball:0 };
let game = { speed: 2, movingMultiplier: 4 ,fireBallMultiplier: 5,fireInterval:1000,cloudSpawnInterval:3000,bugSpawnInterval:1000,bugKillBonus:2000 };
let scene = { score: 0 ,lastCloudSpawn:0,lastBugSpawn:0,isActiveGame:true};

gameStart.addEventListener("click", onGameStart);

function onGameStart() {
  gameStart.classList.add("hide");

  //render Wizard
  const wizard = document.createElement("div");
  wizard.classList.add("wizard");
  wizard.style.top = player.y + "px";
  wizard.style.left = player.x + "px";
  gameArea.appendChild(wizard);
  player.width = wizard.offsetWidth;
  player.height = wizard.offsetHeight;
  //game infinite loop
  window.requestAnimationFrame(gameAction);
}
function onKeyDown(e) {
  keys[e.code] = true;

}
function onKeyUp(e) {
  keys[e.code] = false;

}
//game loop function
function gameAction(timeStamp) {

  const wizard = document.querySelector(".wizard");

  //Apply gravitation
  let isInAir = player.y + player.height <= gameArea.offsetHeight;
  if (isInAir) {
    player.y += game.speed;
  }

  //Register UserInput
  if (keys.ArrowUp && player.y > 0) {
    player.y -= game.speed * game.movingMultiplier;
  }
  if (keys.ArrowDown && isInAir) {
    player.y += game.speed * game.movingMultiplier;
  }
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= game.speed * game.movingMultiplier;
  }
  if (keys.ArrowRight && player.x + player.width < gameArea.offsetWidth) {
    player.x += game.speed * game.movingMultiplier;
  }
  wizard.style.top = player.y + "px";
  wizard.style.left = player.x + "px";

  if (keys.Space&&timeStamp-player.lastTimeFiredFireball>game.fireInterval) {
    wizard.classList.add("wizard-fire");
    addFireBall(player);
    player.lastTimeFiredFireball=timeStamp;
    isCollision(wizard,wizard)
  } else {
    wizard.classList.remove("wizard-fire");
  }


  //Modify fireballs position
  let fireBalls = document.querySelectorAll(".fire-ball");
  fireBalls.forEach((fireBall) => {
    fireBall.x += game.speed*game.fireBallMultiplier;
    fireBall.style.left = fireBall.x + "px";

    if(fireBall.x+fireBall.offsetWidth>gameArea.offsetWidth){
fireBall.parentElement.removeChild(fireBall);
    }
  });
  //Add clouds 
if(timeStamp-scene.lastCloudSpawn>game.cloudSpawnInterval+2000*Math.random()){
    

  let cloud=document.createElement("div");
  cloud.classList.add("cloud");
  cloud.x=gameArea.offsetWidth;
  cloud.style.left=cloud.x+"px";
  cloud.style.top=(gameArea.offsetHeight-200)*Math.random()+"px"
  gameArea.appendChild(cloud);
  scene.lastCloudSpawn=timeStamp;
}


  //Modify cloud position
  let clouds=document.querySelectorAll(".cloud");
  clouds.forEach((cloud) => {
    cloud.x-=game.speed;
    cloud.style.left=cloud.x+"px";
    if(cloud.x+clouds.offsetWidth<=0){
        cloud.parentElement.removeChild(cloud);
    }
  })

  //add bugs
  if(timeStamp-scene.lastBugSpawn>game.bugSpawnInterval+5000*Math.random()){
  let bug=document.createElement("div");
  bug.classList.add("bug");
  bug.x=gameArea.offsetWidth-60;
  bug.style.left=bug.x+"px";
  bug.style.top=(gameArea.offsetHeight-60)*Math.random()+"px";
  gameArea.appendChild(bug);
  scene.lastBugSpawn=timeStamp;
}

//Modify bug position
let bugs=document.querySelectorAll(".bug");
bugs.forEach(bug=>{
    bug.x-=game.speed;
    bug.style.left=bug.x+"px";
    if(bug.x+bugs.offsetWidth<=0){
        bug.parentElement.removeChild(bug);
    }
})

  //Coliision detection
  bugs.forEach(bug=>{
    if(isCollision(wizard,bug)){
        gameOverAction();
        
    }
    fireBalls.forEach(balls=>{
if(isCollision(balls,bug)){
   scene.score+=game.bugKillBonus;
   bug.parentElement.removeChild(bug);
   balls.parentElement.removeChild(balls);
}
    })
  })

  if(scene.isActiveGame){
    window.requestAnimationFrame(gameAction);
  }
  //Apply score
  scene.score++;
  gamePoints.textContent = scene.score;

  
}

function addFireBall(player) {
  let fireBall = document.createElement("div");
  fireBall.classList.add("fire-ball");
  fireBall.style.top = player.y + player.height / 3 - 5 + "px";
  fireBall.x = player.x + player.width;
  fireBall.style.left = fireBall.x + "px";
  gameArea.appendChild(fireBall);
}

function isCollision(firstElement,secondElement) {

    let firstRect=firstElement.getBoundingClientRect();
    let secondRect=secondElement.getBoundingClientRect();
   return!(firstRect.top>secondRect.top || firstRect.bottom<secondRect.top
    ||firstRect.right<secondRect.left||firstRect.left>secondRect.right)
}

function gameOverAction() {
    scene.isActiveGame=false;
    gameOver.classList.remove("hide");
}