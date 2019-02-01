# Free-Falling
function playRPS(){
	var user = document.getElementById ("userInput");
	var userPick = user.value.toLowerCase();
	document.getElementById ("userOutput").innerHTML = "User chose " + userPick;
	var comp = random();
	document.getElementById ("computerOutput").innerHTML = "Computor chose " + comp;
	if (userPick == comp){
	    document.getElementById("rpsOutput").innerHTML = "You tie!";

	}else if (userPick == "rock"  && comp == "scissors" || userPick == "scissors"  && comp == "paper" || userPick == "paper"  && comp == "rock"){
		document.getElementById("rpsOutput").innerHTML = "You win!";

	}else if (userPick == "paper"  && comp == "scissors" || userPick == "scissors"  && comp == "rock" || userPick == "rock"  && comp == "paper"){
		document.getElementById("rpsOutput").innerHTML = "You lose!";
	}
}
function random(){
    var output = Math.floor(Math.random() * 3) +1;
    if (output == 1){
        return "rock";
    }else if (output == 2){
        return "paper";
    }else{
        return "scissors";
	}
	
}
    
