let userscore = 0;
let compscore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userscoreboard =document.querySelector("#user-score")
const compscoreboard =document.querySelector("#comp-score")


const gencompchoice =() =>{
    const options =["rock","paper","scissor"]
   const randomid =  Math.floor(Math.random()*3)
   return options[randomid];
}


const drawgame= ()=>{
    console.log("it was draw ,play again");
    msg.innerText ="It was draw ,play again!";
    msg.style.backgroundColor ="yellow"
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscoreboard.innerText =userscore
        console.log("you win");
        msg.innerText =`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="Green"
    }else{
        compscore++;
        compscoreboard.innerText =compscore
        console.log("you losse");
        msg.innerText =`You lose ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor ="red"
    }
}
const playgame =(userchoice)=>{
    console.log("userchoice = " , userchoice);
    const compchoice =gencompchoice();
    console.log("compchoice = " , compchoice);

    if(userchoice === compchoice){
        drawgame()
    } else{
        let userwin =true;

        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false:true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false:true;
        }
        else{
            userwin = compchoice === "rock" ? false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

   
}
choices.forEach(
    (choice) => {choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playgame(userchoice)
    });
});
 
