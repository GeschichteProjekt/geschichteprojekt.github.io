let OptionLeft = document.getElementById("option-container-left");
let OptionCenter = document.getElementById("option-container-center");
let OptionRight = document.getElementById("option-container-right");

let ButtonLeft = document.getElementById("ButtonLeft");
let ButtonCenter = document.getElementById("ButtonCenter");
let ButtonRight = document.getElementById("ButtonRight");

let Title = document.getElementById("quiz-title");
let OptionHeadings = document.querySelectorAll(".option-heading");
let OptionTexts = document.querySelectorAll(".option-text");

let LeftHeading = OptionHeadings[0];
let CenterHeading = OptionHeadings[1];
let RightHeading = OptionHeadings[2];

let LeftText = OptionTexts[0];
let CenterText = OptionTexts[1];
let RightText = OptionTexts[2];
// [0] ist Links
// [1] ist Mitte
// [2] ist Rechts

// RightAnswer Mandatory
class Quiz {
    constructor(QuizTitle = "Default", LeftHeading = "Default",
                CenterHeading = "Default", RightHeading = "Default",
                LeftText = "Default", CenterText = "Default",
                RightText = "Default", RightAnswer) {
                    this.QuizTitle = QuizTitle;
                    this.LeftHeading = LeftHeading;
                    this.CenterHeading = CenterHeading;
                    this.RightHeading = RightHeading;
                    this.LeftText = LeftText;
                    this.CenterText = CenterText;
                    this.RightText = RightText;
                    this.RightAnswer = RightAnswer;
                }

    ActivateQuiz() {
        Title = this.QuizTitle;
        LeftHeading = this.LeftHeading;
        CenterHeading = this.CenterHeading;
        RightHeading = this.RightHeading;
        LeftText = this.LeftHeading;
        CenterText = this.CenterHeading;
        RightText = this.RightText
        RightAnswer = this.RightAnswer
    }
    
    GetQuizInfo() {
        return {
            QuizTitle: this.QuizTitle,
            LeftHeading: this.LeftHeading,
            CenterHeading: this.CenterHeading,
            RightHeading: this.RightHeading,
            LeftText: this.LeftText,
            CenterText: this.CenterText,
            RightText: this.RightText
        }
    }
}

let RightAnswer = OptionCenter;
let FalseAnswers = [];
let TotalQuizCount = 2; //Ammount of Quizzes (up to 3)

var CurrentQuiz;

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