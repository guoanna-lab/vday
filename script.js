var triesLeft = 4;

function yesClicked(){
    document.getElementById("photo").src = "yes.gif"
    document.getElementById("text-content").innerHTML = "Good job, I will treat you to a nice massage tonight <3"
}

function noClicked(){
    triesLeft -= 1;
    if (triesLeft > 0){
        document.getElementById("photo").src = "no.gif";
        var htmlNo = 'Try again. You have ' + triesLeft +' tries left...';
        document.getElementById("text").innerHTML = htmlNo;
    }
    if (triesLeft <= 0){
        document.getElementById("photo").src = "luke.png";
        document.getElementById("text-content").innerHTML = "I will haunt you now + 5 years of bad luck";
    }
    
}