var totalDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<totalDrumButtons;i++) {

document.querySelectorAll(".drum")[i].addEventListener("click",function() {
  var audio=new Audio("crash.mp3");
  audio.play();
});
}

