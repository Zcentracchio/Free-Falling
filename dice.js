# Free-Falling
function diceRoll(){
    
    var roll1 =  Math.floor(Math.random() * 6)+1;

    var roll2 = Math.floor(Math.random() * 6)+1;

    document.getElementById("diceOutput").innerHTML="You rolled a " + roll2;
    var sum = roll1 + roll2;
    console.log("yeet yeet sister");
    
    if (sum == 7 || sum == 11){
    document.getElementById("diceOutput").innerHTML= "You win!";
    }else if (sum == 2 || sum == 3 || sum == 12){
    document.getElementById("diceOutput").innerHTML= "You lose!";
    }else{
    document.getElementById("diceOutput").innerHTML= "roll again";
    }
    
}

