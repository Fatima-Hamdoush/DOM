//Initialized variables
let is_game_running = false; 
let score = 0;
let current = 10;
let is_end = false;
let is_gameOver = false;
counter=0;
//Declared variables
let end;
let start;
let boundaries;
let status_display; 


document.addEventListener("DOMContentLoaded", loadPage);

function displayScore(message){
    if(message != "")
        status_display.innerHTML = message + "<br/>" + "Your Score is: " + score ;
}

function gameOver(){
    if(is_game_running){
         
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(243, 159, 159)"; 
        if(score > 0)
            score = score - 1;
        displayScore("Game Over!");
         var audio = new Audio('audio/lose.mp4')
         audio.play()
        is_game_running = false;
       
    }
}

function startGame(){
   counter=0;
    displayScore("");
    is_game_running = true;
    current = 10;
     countTime();
    for(let i = 0; i < boundaries.length; i++)
        boundaries[i].style.backgroundColor = "#eeeeee"; 
 
    
}

function endGame(){
    if(is_game_running){
    
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(113 225 141)"; 
        score = score + 5;
        displayScore("You Won!");
           var audio = new Audio('audio/win.mp4');
           audio.play();
        is_end = true;
        is_game_running = false;
         is_end == false
       
    }
}

function addbonus()
{  if(counter==0)
  { counter++;
    score = score + 5;
     var audio = new Audio('audio/collect.mp4')
     audio.play()
  }
}

function countTime()
{
    time.style.backgroundColor = 'white'
    time.innerHTML = '<br>'
    var intervalId = setInterval( function(){
    if (current > 0 && is_game_running == true ) 
      time.innerHTML = '<h3>' + current + '</h3>'

     else if (current == 0 && is_end == false&& is_gameOver == false) {
       time.innerHTML = "Time's up! You lost the game."
        var audio = new Audio('audio/lose.mp4')
        audio.play()
       time.style.backgroundColor = 'rgb(243, 159, 159)'
       is_game_running = false
     }
current--;
 } 
 , 1500);
}
function resetGame()
{
    score = 0;
     displayScore('Begin by moving your mouse over the "S".')

}



function loadPage(){
    end = document.getElementById("end");
    start = document.getElementById("start");
    bonus = document.getElementById("bonus");
    reset = document.getElementById("reset");
    boundaries = document.getElementsByClassName("boundary");
    time_disolay = document.getElementById('time');
    status_display =  document.getElementById("status");
    bonus.addEventListener("mouseover", addbonus);
    end.addEventListener("mouseover", endGame);
    start.addEventListener("click", startGame);
    reset.addEventListener("click",resetGame);
    for(let i = 0; i < boundaries.length; i++){
        boundaries[i].addEventListener("mouseover", gameOver);
    }
}


