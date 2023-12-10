//plays audio when you interact with page (audio literally cannot load otherwise)
var audio = new Audio('newbeginnings.wav');
window.addEventListener("click", event => {
    
    audio.volume = 0.2;
    audio.play();
  });

  audio.addEventListener('ended', event => {
    audio.play();
});


function PlayCraps() {
    console.log("Hey The button got pushed")
    //prints when button is pressed
    var die1 = NumGen()
    var die2 = NumGen()
    var sum = die1 + die2

    //changes div text to match the above variable values
    outputres("die1Results", "Die 1 is: " + die1)
    outputres("die2Results", "Die 2 is: " + die2)
    outputres("sumres", "sum is: " + sum)

    if(sum == 7 || sum == 11)
    {
        outputres("crapsRes", "You lose! Crap!")
    }
    else if(die2 == die1 && die2 % 2 == 0) //if equal and die2 is even (devided and has no remainder)
    {
        outputres("crapsRes", "You win!") //if you get two of the same even numbers, you win
    }
    else
    {
        outputres("crapsRes", "You pushed (tied)")
    }
}

//generates and return die number
function NumGen() {

    //random number * 6
    var die = 6 * Math.random()
//returns number
    return Math.ceil(die)
}

function outputres(htmlElement, theText) {
document.getElementById(htmlElement).innerHTML = theText
}