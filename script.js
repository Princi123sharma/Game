const ludogame=()=>{
    const player1=Math.floor(Math.random()*6)+1;
    const play1dice=`images/dices${player1}.png`;
    
    document.getElementById('check').setAttribute(
     'src',play1dice
    )

    const player2=Math.floor(Math.random()*6)+1;
    const play2dice=`images/dices${player2}.png`;
    document.getElementById('check2').setAttribute('src',play2dice);


    if(player1>player2){
        document.querySelector(".container h1").innerHTML="Player1 Won:)";
    }
    else if(player2>player1){
        document.querySelector(".container h1").innerHTML="Player2 Won:)";
    }
    else{
     document.querySelector(".container h1").innerHTML="Draw:";
    }
}