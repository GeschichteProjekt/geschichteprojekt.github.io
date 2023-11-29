let OptionLeft = document.getElementById("option-container-left");
let OptionCenter = document.getElementById("option-container-center");
let OptionRight = document.getElementById("option-container-right");

let ButtonLeft = document.getElementById("ButtonLeft");
let ButtonCenter = document.getElementById("ButtonCenter");
let ButtonRight = document.getElementById("ButtonRight");
let NextQuizButton = document.getElementById("NextQuizButton");

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
    constructor(RightAnswer, TextNumber, QuizTitle = "Default", LeftHeading = "Default",
                CenterHeading = "Default", RightHeading = "Default",
                LeftText = "Default", CenterText = "Default",
                RightText = "Default") {
                    this.QuizTitle = QuizTitle;
                    this.TextNumber = TextNumber;
                    this.LeftHeading = LeftHeading;
                    this.CenterHeading = CenterHeading;
                    this.RightHeading = RightHeading;
                    this.LeftText = LeftText;
                    this.CenterText = CenterText;
                    this.RightText = RightText;
                    this.RightAnswer = RightAnswer;
                }

    ActivateQuiz() {
        Title.textContent = this.QuizTitle;
        LeftHeading.textContent = this.LeftHeading;
        CenterHeading.textContent = this.CenterHeading;
        RightHeading.textContent = this.RightHeading;
        LeftText.textContent = this.LeftText;
        CenterText.textContent = this.CenterText;
        RightText.textContent = this.RightText;
        RightAnswer = this.RightAnswer;
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

var RightAnswer;
let FalseAnswers = [];
let TotalQuizCount = 2; //Ammount of Quizzes (up to 3)*/

var CurrentQuiz = 0;

//QUIZ AREA
//QUIZ AREA
//QUIZ AREA
var FirstQuiz = new Quiz(OptionLeft, 0,
     "Kenia war in den Jahren 1963 bis 2002 was? (test)",
     "Kolonalisiert (t)",
     "Autokratisch",
     "Demokratisch",
     " (t) Die Britten regierten Kenia und holzten Wälder rasant ab, Christianiserten die Bevölkerung und zerstörten die Kultur von Einheimischen.",
     "Kenia war in der Theorie ein Mehrparteienstaat, allerdings wurde Opposition unterdrückt, Wahlen fanden irregulär ab und Wahlbetrug war der standard.",
     "Parteien setzten sich friedlich auseinander, formten Koalition und Korruption war niedrig.");
var SecondQuiz = new  Quiz(OptionRight, 1,
    "Wangari Maathai's Familie war...",
    "Wohhabend",
    "Tot",
    "Landwirtschaftlich geprägt",
    "Ihre Familie hatte ein großes Einkommen, ein Massives Haus in der Hauptstadt Nairobi und genossen ein hohes Ansehen.",
    "Ihr Vater starb in ihrem frühen KindesAlter, da ein weißer ihn Erschoss. Ihre Mutter starb bei ihrer Geburt.",
    "Ihre Familie lebte auf einer Farm und lebte von ihren Feldfrüchten. Ihre Großmutter hatte einen großen Einfluss auf ihre Liebe für Kultur.")
//QUIZ AREA
//QUIZ AREA
//QUIZ AREA

var CurrentQuiz = 0;

FirstQuiz.ActivateQuiz();

QuizArray = [FirstQuiz, SecondQuiz];
function ActiveNextQuiz() {
    CurrentQuiz += CurrentQuiz;
    QuizArray[CurrentQuiz].ActivateQuiz();
    console.log("uwu (i hate myself)")
}

function RevealSolution() {
    console.log(CurrentQuiz.RightAnswer.style.backgroundColor)
    CurrentQuiz.RightAnswer.style.backgroundColor = "green";
    for (i = 0; FalseAnswers.length; i++) {
        FalseAnswers[i].style.backgroundColor = "red";
    }
}

ButtonRight.addEventListener("click", RevealSolution);
ButtonCenter.addEventListener("click", RevealSolution);
ButtonLeft.addEventListener("click", RevealSolution);
NextQuizButton.addEventListener("click", ActiveNextQuiz);


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