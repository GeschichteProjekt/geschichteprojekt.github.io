let OptionLeft = document.getElementById("option-container-left");
let OptionCenter = document.getElementById("option-container-center");
let OptionRight = document.getElementById("option-container-right");

let ButtonLeft = document.getElementById("ButtonLeft");
let ButtonCenter = document.getElementById("ButtonCenter");
let ButtonRight = document.getElementById("ButtonRight");

let RightAnswer = OptionCenter;
let FalseAnswers = [];

function RevealSolution() {
    RightAnswer.style.backgroundColor = "green";
    for (i = 0; FalseAnswers.length; i++) {
        FalseAnswers[i].style.backgroundColor = "red";
    }
}

ButtonRight.addEventListener("click", RevealSolution);
ButtonCenter.addEventListener("click", RevealSolution);
ButtonLeft.addEventListener("click", RevealSolution);

switch (RightAnswer) {
    case OptionLeft:
        FalseAnswers.push(OptionCenter, OptionRight);
        break;
    case OptionCenter:
        FalseAnswers.push(OptionLeft, OptionRight);
        break;
    case OptionRight:
        FalseAnswers.push(OptionCenter, OptionLeft);
        break;
}