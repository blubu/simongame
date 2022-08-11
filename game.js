// empty arrays

var gamePattern=[];
var userClickedPattern=[];

// initialised variables

var level=0;
var buttonColors=["red","blue","green","yellow"];

// random variables

var randomChosenColor="";
var chosenColor="";

// pushing into arrays

// gamePattern.push(randomChosenColor);

//user pattern

$(".btn").click(function (){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress($(this));
  if (gamePattern.length!==0){
  check(userClickedPattern,gamePattern);}
});

//game pattern

// chosenColor.click(function (){
// chosenColor.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// playSound(randomChosenColor);
// });

//keypress

$(document).keypress(function(){
  if (level===0)
  {
    randomChosenColor=buttonColors[nextSequence()];
    chosenColor=$("#"+randomChosenColor);
    gamePattern[0]=randomChosenColor;
    animateNonPress(chosenColor);
    playSound(randomChosenColor);
  }
})

//functions

function nextSequence(){
  var randomNumber=Math.floor(Math.random()*4);
  userClickedPattern=[];
  level++;
  $("h1").text("Level "+level);
  return randomNumber;
}

function playSound(name){
  var sound= new Audio("sounds/"+name+".mp3");
  sound.play();
}

function animatePress(currentColor){
     currentColor.addClass("pressed");
     setTimeout(function(){
       currentColor.removeClass("pressed");
     },100);
}

function check(user1,game1){
  var log="";
  for (var i=0;i<user1.length;i++){
    if (user1[i]===game1[i]){
log="success";
    } else {
      log="fail";
      fail();
      break;
    }}
    if (log === "success" && user1.length===game1.length){
      setTimeout(startNew,1000);
    }
  }


function startNew(){
  randomChosenColor=buttonColors[nextSequence()];
  chosenColor=$("#"+randomChosenColor);

  animateNonPress(chosenColor);
  playSound(randomChosenColor);
  // pushing into arrays

  gamePattern.push(randomChosenColor);
}


function animateNonPress(selectColor){
  chosenColor.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

function fail(){

  var wrong=new Audio("sounds/wrong.mp3");
  wrong.play();
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
  $("h1").text("Game Over, Press Any Key to Restart");
  startOver();
}


function startOver(){
level=0;
gamePattern=[];

}
