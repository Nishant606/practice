var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
function nextSequence(){
    var n=Math.random();
    n=n*4;
    var randomNumber=Math.floor(n);
var randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
    return gamePattern;
}
alert(nextSequence());