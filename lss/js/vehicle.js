var vehicle = document.getElementById("vehicle");

var factOne = document.getElementById("factOne");

var factTwo = document.getElementById("factTwo");

var factThree = document.getElementById("factThree");

var factFour = document.getElementById("factFour");

var factFive = document.getElementById("factFive");

var wheel = document.getElementById("wheel");

var wheely = document.getElementById("wheely");


window.onscroll = function(){

var fromLeft = window.pageXOffset + 20;

var firstWheel = fromLeft + 30;

var fromFirstWheel = fromLeft + 260;

  console.log(fromLeft);
  console.log(firstWheel);
  console.log(fromFirstWheel);

  vehicle.style.left = fromLeft *1.03 + "px";
  wheel.style.left = firstWheel *1.03 + "px";
  wheely.style.left = fromFirstWheel *1.03 + "px";

  if(fromLeft > 800){
    factOne.style.transform="translate(0,-220px)";
  }else{
    factOne.style.transform="translate(0,0)";
  }
  if(fromLeft > 2100){
    factTwo.style.transform="translate(0,-252px)";
  }else{
    factTwo.style.transform="translate(0,0)";
  }
  if(fromLeft > 3800){
    factThree.style.transform="translate(0,-260px)";
  }else{
    factThree.style.transform="translate(0,0)";
  }
  if(fromLeft > 6000){
    factFour.style.transform="translate(0,-270px)";
  }else{
    factFour.style.transform="translate(0,0)";
  }
  if(fromLeft > 8400){
    factFive.style.transform="translate(-150px, -600px)";
  }else{
    factFive.style.transform="translate(0,0)";
  }
  wheel.style.transform = "rotate(" + window.pageXOffset + "deg)";
  wheely.style.transform = "rotate("+window.pageXOffset+"deg)";
};
