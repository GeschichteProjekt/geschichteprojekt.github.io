@@ -1,110 +1,112 @@
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
var ThirdQuiz = new Quiz(OptionRight, 2,
    "Was war die Forderung des Green Belt Movements beim Protest um den Karura Forest",
    "Was war die Forderung des Green Belt Movements beim Protest un dem Uhuru Park",
    "Abschaffung der Autokratie",
    "Kein Verkauf von öffentlichem Land im Karura Forest",
    "Freilassung politischer Häftlinge",
    "Die Protestoren forderten, dass Wahlen gehalten, in denen Wahlen")
    "Die Protestoren forderten, dass Wahlen gehalten werden, an denen mehere Parteien dran teil nehmen können, egal welche politische Sicht diese vertreten.",
    "Die Protestoren forderten, dass kein öffentliches Land im Karura Forest verkauft wird.",
    "Sie wollten, dass die, die für ihre politischen Meinungen verhaftet gewurden freigelassen werden.")
//QUIZ AREA
//QUIZ AREA
//QUIZ AREA

FirstQuiz.ActivateQuiz();

var CurrentQuizNumber = 0;
QuizArray = [FirstQuiz, SecondQuiz];
QuizArray = [FirstQuiz, SecondQuiz, ThirdQuiz];
var CurrentQuiz = QuizArray[CurrentQuizNumber]

function ActiveNextQuiz() {
    CurrentQuizNumber = CurrentQuizNumber + 1;
    CurrentQuiz = QuizArray[CurrentQuizNumber];
    CurrentQuiz.ActivateQuiz();
    RightAnswer = CurrentQuiz.RightAnswer;
    FalseAnswers = []
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
