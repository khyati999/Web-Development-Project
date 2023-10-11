var randomNumber=Math.floor(Math.random()*6)+1;
var randomImageDice="dice"+randomNumber+".png";
var randomImageSrc="images/"+randomImageDice;
var image=document.querySelectorAll("img")[0];
image.setAttribute("src", randomImageSrc)

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageDice2="dice"+randomNumber2+".png";
var randomImageSrc2="images/"+randomImageDice2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2)

if(randomNumber>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber2>randomNumber)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}