// Empty arrays

var gamePattern=[];
var userClickedPattern=[];

// initialised variables

var level=0;


var buttonColors=["red","blue","green","yellow"];
var randomChosenColor=buttonColors[nextSequence()];

var chosenColor=$("#"+randomChosenColor);
gamePattern.push(randomChosenColor);


//user pattern

$(".btn").click(function (){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress($(this));
});


//game pattern

chosenColor.click(function (){
chosenColor.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
});

//keypress

$(document).keypress(function(){
  if (level===0)
  {
    nextSequence();
  }
})

//functions

function nextSequence(){
  var randomNumber=Math.floor(Math.random()*4);
  return randomNumber;
  $("h1").text("Level "+level);
  level++;
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
