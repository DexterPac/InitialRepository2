
//plays audio when you interact with page (audio literally cannot load otherwise)
var audio = new Audio('newbeginnings.wav');
window.addEventListener("click", event => {
    
    audio.volume = 0.2;
    audio.play();
  });

  audio.addEventListener('ended', event => {
    audio.play(); //this loops audio
});


function validateinput() {
    event.preventDefault() //prevents constant refreshing of page
    //variables for string.html
    var Full_Name = document.getElementById("firstname").value + " " + document.getElementById("lastname").value //string manipulation, this changes upon user name inputs
    var zipcode = document.getElementById("zipcode").value
    var hiddenmessage = document.getElementById("secretmessage")
    let customword = Array.from((document.getElementById("customword").value))

    for(var i = 0; i < customword.length; i++) //verifies if anything other than a letter was inputted
    {
        //console.log(isNaN(customword[i]))
        if(isNaN(customword[i]))
        {          
                iserror = false;
                outputres("errormesage", "")           
        }
        else
        {
            if(customword[i] != " ")
            {
                outputres("errormesage", "Please only enter letters into your custom word")
                iserror = true;
                return;
            }
        }
        
    }
    //console.log(customword)
    let customwordreversed = customword.reverse()
    customword = Array.from((document.getElementById("customword").value))
    //console.log(customwordreversed);
    
    var iserror = false;//variable determining if any other input errors exist.
    //console.log(Full_Name)
    
    if(zipcode.length != 5) //if zipcode length is 5
    {
        outputres("errormesage", "ZipCode Must Be 5 Characters")
        iserror = true;
        return;
    }
    else if(zipcode.length == 5)
    {
        hiddenmessage.hidden = false;
        iserror = false;
        outputres("errormesage", "")
    }

    if(Full_Name.length > 20 && !iserror) //if total name length is 20 or less characters
    {
        outputres("FullName", "Full Name Cannot Exceed 20 Characters")
        iserror = true;
        return;
    }
    else
    {
        outputres("FullName", "Full Name: " + Full_Name) //string manipulation --> changes upon user input
        iserror = false;
    }

    //console.log(customword)
    //console.log(customwordreversed)
    
    //console.log(customwordreversed.join("").replace(" ",""))
    //console.log(customword.join("").replace(" ",""))
    
    if(customwordreversed.join("").replace(" ","") == customword.join("").replace(" ","")) //the check is made once the uer has pressed the "submit" button
    {
        //console.log("djgjnegkg")
        alert("The custom word you entered was a palindrome! Feel free to enter another. ")
    }
    
    
    
}

function outputres(htmlElement, theText) {
    document.getElementById(htmlElement).innerHTML = theText
    }