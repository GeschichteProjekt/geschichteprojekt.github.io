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
        LeftHeading.textContent = "A) " + this.LeftHeading;
        CenterHeading.textContent = "B) " + this.CenterHeading;
        RightHeading.textContent = "C) " + this.RightHeading;
        LeftText.textContent = this.LeftText;
        CenterText.textContent = this.CenterText;
        RightText.textContent = this.RightText;
        RightAnswer = this.RightAnswer;
        OptionLeft.style.backgroundColor = "white";
        OptionCenter.style.backgroundColor = "white";
        OptionRight.style.backgroundColor = "white";
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
var FirstQuiz = new Quiz(OptionCenter, 0,
                        "Die Kultur Kenia's wurden unter der Britten...",
                        "In Ruhe gelassen",
                        "Verwestlicht",
                        "Unter allen Umständen unterdrückt",
                        "Die britische Krone interessierte es nicht, ob die Kenianer*innen ihre Kultur ausüben oder nicht, sondern kümmerten sich nur darum, dass die Kolonie genügend produziert.",
                        "Die Britten versuchten, die Kenianer*innen zum Christentum zu konvertieren sowie ihre Kultur so zu formen, dass sie mehr zum Westen passt (oft um wirtschaftliche Profite zu erhöhen).",
                        "Die Britten begangen einen Industriellen Völkermord an den Einheimischen Ethnien Kenia's mit dem Ziel, diese Komplett auszulöschen, damit Kenia ein Land der Weißen wird.")
var SecondQuiz = new Quiz(OptionLeft, 1,
                        "Wangari Maathai versuchte...",
                        "Legal zu bleiben damit die Regierung sie nicht einsperrt",
                        "Versteckt Illegale aktivitäten wie z.B. das Töten von Poltikern durchzuführen",
                        "Mit ihren illegan Aktivitäten auf ihre Proteste aufmerksam zu machen",
                        "Hätte sie etwas illegales gemacht, hätte die Regierung einen Grund sie zu verhaften oder sogar zu töten.",
                        "Sie war der Meinung, das Gewalt nötig ist um die Autokratie abzuschaffen, allerdings dürfte die Regierung sie nicht dabei erwischen, weil sie dadurch ihre Verhaftung oder sogar tötung riskieren würde.",
                        "Wangari Maathai's Ziel war es, so viele Leute wie möglich aufmerksam auf ihre Protestaktionen zu machen, und es war sehr leicht mit illegalen Aktivitäten in die Medien zu gelangen.")
var ThirdQuiz = new Quiz(OptionCenter, 2,
                        "Wangari Maathai versuchte in der Wahl von 2002...",
                        "Die Wahl mit ihrer eigenen Partei zu gewinnen",
                        "Die Opposition der KANU zu vereinigen",
                        "Die Wahl zu verhindern",
                        "Wangari Maathai wollte mit ihrer 'Green Party of Kenia' die Wahl mit einer Überlegenheit von 51% gewinnen",
                        "Sie trug dazu bei, dass sich die Rainbow Coalition formt, wodurch mehrere Liberale Parteien die KANU ablösen konnten.",
                        "Sie forderte, dass die KANU nicht mehr in Wahlen beteiligt werden darf und griff zu illegalen Mitteln um diese zu erreichen.")
//QUIZ AREA
//QUIZ AREA
//QUIZ AREA

FirstQuiz.ActivateQuiz();

var CurrentQuizNumber = 0;
var TotalQuizAmmount = 2;
QuizArray = [FirstQuiz, SecondQuiz, ThirdQuiz];
var CurrentQuiz = QuizArray[CurrentQuizNumber];

function ActiveNextQuiz() {
    CurrentQuizNumber = CurrentQuizNumber + 1;
    if (CurrentQuizNumber > TotalQuizAmmount) {
        window.location = "https://geschichteprojekt.github.io"
    }
    else {
        CurrentQuiz = QuizArray[CurrentQuizNumber];
    }
    CurrentQuiz.ActivateQuiz();
    RightAnswer = CurrentQuiz.RightAnswer;
    FalseAnswers = []
    if (CurrentQuizNumber === TotalQuizAmmount) {
        NextQuizButton.innerHTML = "Zurück zu Index.html";
    }
    console.log("CurrentQuizNumber: " + CurrentQuizNumber);
}
function RevealSolution() {
    console.log(CurrentQuiz.RightAnswer.style.backgroundColor);
    ActualizeFalseAnswers();
    CurrentQuiz.RightAnswer.style.backgroundColor = "green";
    for (i = 0; FalseAnswers.length; i++) {
        FalseAnswers[i].style.backgroundColor = "red";
    }
}
function ActualizeFalseAnswers() {
    switch (CurrentQuiz.RightAnswer) {
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
}
ButtonRight.addEventListener("click", RevealSolution);
ButtonCenter.addEventListener("click", RevealSolution);
ButtonLeft.addEventListener("click", RevealSolution);
NextQuizButton.addEventListener("click", ActiveNextQuiz);
