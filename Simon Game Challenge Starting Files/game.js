var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var start=false;
var level=0;

$(document).keydown(function() {
  if (!start) {
    $("#level-title").text("Level " + level);
    start=true;
    nextSequence();
  }
});

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function checkAnswer(currentLevel)
{
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) 
  {
    if (userClickedPattern.length === gamePattern.length)
    {
      setTimeout(function () 
      {
        nextSequence();
      }, 1000);
    }
  }
  else 
  {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver(); 
  }
}

function nextSequence(){
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);  
  
}
function playSound(colorName){
  var audio=new Audio("sounds/"+colorName+".mp3");
  audio.play();
}
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () 
  {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}