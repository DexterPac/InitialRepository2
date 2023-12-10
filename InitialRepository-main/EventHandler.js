function daevent() {
    
    
}

var isstopped = false;
var changdirX = false;
var changedirY = false;

//plays audio when you interact with page (audio literally cannot load otherwise)
var audio = new Audio('newbeginnings.wav');
window.addEventListener("click", event => {
    
    audio.volume = 0.2;
    audio.play();
  });

  audio.addEventListener('ended', event => {
    audio.play();
});


//resets image position
function reset(){
    isstopped = false;
    changdirX = false;
    changedirY = false;
    var daimage = document.getElementById("meme")
    clearTimeout(my_time);
    daimage.style.left= "1000px";
    daimage.style.top= "750px";
    }

    //calculates image position
function disp(){
    var daimage = document.getElementById("meme")
    var dastartbutton = document.getElementById("firstbutton")
    var step=5; // Change this step value
    //alert("Hello");
    var y=daimage.offsetTop;
    var x=daimage.offsetLeft;
    //document.getElementById("msg").innerHTML="X: " + x  + " Y : " + y
    if(!isstopped)
    {
        if(y < 900 && !changedirY)
        {
            y= y +step;
            daimage.style.top= y + "px"; // vertical movment
        }
        else
        {

            if(x < 2000 && !changdirX && !changedirY)
            {
                x= x +step;
                daimage.style.left= x + "px";//horizontal move
            }
            else
            {
                if(x > 1000)
                {
                    changdirX = true;
                    x= x -step;
                    daimage.style.left= x + "px";
                }
                else 
                {
                    changdirX = false;
                    changedirY = true;
                }
                if(y > 750 && changedirY)
                {
                    y= y -step;
                    daimage.style.top= y + "px";
                }
                else{
                    changedirY = false;
                }
            }
        }
}

}
//startdd the image movement event
function startevent(){

    var dastartbutton = document.getElementById("firstbutton")
    var dastoptbutton = document.getElementById("secondbutton")

    dastartbutton.setAttribute("onClick","")
    dastoptbutton.setAttribute("onClick","endevent();")

    isstopped = false;
    disp();
    //sets animation time
    my_time=setTimeout('startevent()',10);

}

//stops the image  movement event
function endevent() {

    var dastartbutton = document.getElementById("firstbutton")
    var dastoptbutton = document.getElementById("secondbutton")

    dastoptbutton.setAttribute("onClick","")
    dastartbutton.setAttribute("onClick","startevent();")
    

    isstopped = true;
    //stops animation time
    clearTimeout(my_time);

}


