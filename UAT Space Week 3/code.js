function blastoffTimer(){
    console.log("blastoffTimer() started");
    //variable tracks time
    var currTime = 50;

    //timer at 50
    setTimeout(function(){
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 0);

     //timer at 45
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 5000);

    //timer at 40
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 10000);

    //timer at 35
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 15000);

    //timer at 30
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 20000);

    //timer at 25
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 25000);

    //timer at 20
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 30000);
   
    //timer at 15
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 35000);

    //timer at 10
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 40000);

    //timer at 5
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
    }, 45000);

    //timer at 0
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime =" + currTime);
        document.getElementById("blastoffDis").innerHTML = "Blastoff!";
    }, 50000);

}

// craps tracking variables

 //displays that the game has started on the console
 console.log("playCraps() started");
 //create and assign variable for die1
 var die1 = 0;
 //create and assign variable for die2
 var die2 = 0;
 //create and assign variable for sum
 var sum = 0;
 //create and assign variable for wins
 var wins = 0;
 //create and assign variable for losses
 var losses = 0;
 //create and assign variable for draws
 var draws = 0;

function playCraps(){
   

    //roll die1
    die1 = Math.floor(6 * Math.random()) + 1;
    //displays the result on the console
    console.log(die1);

    //roll die2
    die2 = Math.floor(6 * Math.random())+ 1;
    //displays the result on the console
    console.log(die2);

    //total roll of die1 and die2
    sum = die1 + die2;
    //displays the result on the console
    console.log(sum);

    //display the value of die1 on the webpage
    document.getElementById("die1Res").innerHTML = die1;
    //display the value of die2 on the webpage
    document.getElementById("die2Res").innerHTML = die2;
    //display the value of the sum on the webpage
    document.getElementById("diceSum").innerHTML = sum;

    //checks if the sum is equal to 7 or 11, in which case it displays Skill Issue on the webpage, and adds 1 to the loss counter
    if(sum == 7 || sum == 11){
        //displays the game result on the console
        console.log("Game Result : loss");
        //displays Skill Issue on the webpage
        document.getElementById("gameRes").innerHTML = "Skill Issue";
        //increases the loss counter by 1
        losses++;
        //displays the amount of games lost on the webpage
        document.getElementById("lossesRes").innerHTML = losses;

    } 
    //checks if both die1 and die2 are even numbers, and that they are the same number. If both are true then Big W is displayed on the webpage, and adds 1 to the win counter
    else if(die1 == die2 && die2 % 2 == 0) {
        //displays the game result on the console
        console.log("Game Result : win");
        //displays Big W on the webpage
        document.getElementById("gameRes").innerHTML = "Big W";
        //adds 1 to the win counter
        wins++;
        //displays the amount of games won on the webpage
        document.getElementById("winsRes").innerHTML = wins;

    }
    //if neither of the if statements above were true, Push is displayed on the webpage, and adds 1 to the draw counter
    else {
        //displays the game result on the console
        console.log("Game Result : draw");
        //displays Puch on the webpage
        document.getElementById("gameRes").innerHTML = "Push";
        //adds 1 to the draw counter
        draws++;
        //displays the amount of games tied on the webpage
        document.getElementById("drawsRes").innerHTML = draws;
    }

    
}
