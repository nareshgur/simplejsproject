let userscore =0;
let compscore =0;

const usersc = document.querySelector("#user-score");
const compsc = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const genComp = ()=>{
    const options= ["rock","paper","scissors"];
    const opt = Math.floor(Math.random()*3);
    console.log(opt)
    return options[opt];
};

const showWinner = (userWin)=>{
    if(userWin){
        userscore++;
        usersc.innerText=userscore;
        console.log("You win");
        msg.innerText = "You win Your "+choiceId+ "beats "+ op;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compsc.innerText=compscore;
        console.log("You lost the Match");
        msg.innerText = "You lost Your "+choiceId+ "beaten "+ op;
        msg.style.backgroundColor="red";
    }
};

const draw = () =>{
    console.log("game was drawn");
    msg.innerText="Drawn play again";
    msg.style.backgroundColor="#081b31";
};
const playGame = (choiceId)=>{
    console.log("user choice :", choiceId);

    const op = genComp();
    console.log("computer choice is: ", op);

    if(choiceId===op)
    {
        draw();
    }else{
        let userWin = true;
        if(choiceId==="rock"  && op==="paper"){
            userWin= false;
        }
       else if(choiceId==="paper" && op==="scissors")
        {
           userWin=false;
        }else if(choiceId==="scissors" && op==="paper"){
            userWin = false;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {   const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
   
});