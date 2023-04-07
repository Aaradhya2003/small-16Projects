const Num1 = Math.floor(Math.random()*25 + 1);
const Num2 = Math.floor(Math.random()*25 + 1);

const questionEl = document.getElementById("question");
questionEl.innerText = "What is " + Num1 +" multiply by "+ Num2 +"?";

const correctAns = Num1*Num2 ;
let score = JSON.parse(localStorage.getItem("score"))
if (!score) {
    score = 0;
}

const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if (userAns === correctAns) {
        score++;  
        updateLocalStorage();
    }else{
        score--; 
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
};

scoreEl.innerText = "score: "+ score; 