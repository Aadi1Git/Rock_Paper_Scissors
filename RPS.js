let userscore = 0;
let compscore = 0;

const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");
const choices =  document.querySelectorAll(".choice");
const resetbtn = document.querySelector(".reset");



const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = `${userscore}`
        msg.innerText = `You Win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "#d4a373";
    }
    else{
      compscore++;
      compscorepara.innerText = `${compscore}`;
        msg.innerText=`You lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "#c1121f";
    }
}



const gencompchoice = () =>{
    const option =["rock","papper","scissors"];
    const rndmindx = Math.floor(Math.random()*3);
    return option[rndmindx];
}



const draw = () => {
    msg.innerText="Game was drawn";
    msg.style.backgroundColor="#e9c46a"
}



const playgame = (userchoice) => {
    console.log("userchoice = ",userchoice);
    const compchoice = gencompchoice();
    console.log("computerchoice =",compchoice);
        
    if(userchoice === compchoice)
        {
          draw();
        }
        else{
            let userwin = true;
            if(userchoice === "rock"){
                //scissors,paper
                userwin = compchoice === "paper"? false:true;
            }
            else if(userchoice === "paper"){
                //scissors,rock
                userwin = compchoice === "scissors"? false:true;
            }
            else {
                //rock,paper
                userwin = compchoice === "rock"? false:true;
            }
                showwinner(userwin,userchoice,compchoice);
        }
};




choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoiceid = choice.getAttribute("id");
        playgame(userchoiceid);
    });
});

const resetgame = () =>{
           userscore=0;
           compscore=0;
           userscorepara.innerText =0;
           compscorepara.innerText =0;
           msg.style.backgroundColor ="#fefae0";
           msg.innerText ="Play your move";
}


resetbtn.addEventListener("click",resetgame);