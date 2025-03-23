let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    // rock paper scissors
    const index= Math.floor(Math.random()*3);
    return options[index];
}

//draw game

const drawGame=()=>{
   
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userchoice,compChoices)=>{
    if(userWin){
        userScore++;
        
        msg.innerText=`You win! ${userchoice} beats ${compChoices}`; 
        msg.style.backgroundColor="green";
        document.querySelector("#userscore").innerText=userScore;
    }
    else{
        compScore++;
        
        msg.innerText=`Comp win! ${compChoices} beats ${userchoice}`;
        msg.style.backgroundColor="red";
        document.querySelector("#compscore").innerText=compScore;
    }
}

const playGame=(userchoice)=>{
    

    //generate computer choice

    const compChoices=genCompChoice();
   

    if(userchoice===compChoices){
        //draw game
        drawGame();
    }
    else {
        let userWin=true;
        if(userchoice==="rock"){
            //scissors paper
            userWin=compChoices==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //scissors paper
            userWin=compChoices==="scissors"?false:true;
        }
        else{
            //scissors paper
            userWin=compChoices==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compChoices);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
       
        playGame(userchoice);
    })
})