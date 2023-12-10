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
     "Kenia war in den Jahren 1963 bis 2002 was? (test)",
     "Kolonalisiert",
     "Autokratisch",
     "Demokratisch",
     "Die Britten regierten Kenia und holzten Wälder rasant ab, Christianiserten die Bevölkerung und zerstörten die Kultur von Einheimischen.",
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
    "Was war die Forderung des Green Belt Movements beim Protest um den Uhuru Park",
    "Kein Verkauf von öffentlichem Land im Karura Forest",
    "Abschaffung der Autokratie",
    "Freilassung politischer Häftlinge",
    "Die Regierung wollte (und fing auch an) Land in dem Karura Forest an Privatbesitzer zu verkaufen.",
    "Die Protestoren forderten, dass Staatspräsident Daniel Arap Moi abtritt und neue Wahlen gehalten werden.",
    "Sie wollten, dass Leute, die für ihre politische Meinungen inhaftiert wurden, freigelassen werden.")
var FourthQuiz = new Quiz(OptionCenter, 3,
    "Wangari Maathai gewann welchen Preis im Jahre 2004 welchen Preis?",
    "Indira Ghandi Prize",
    "Nobel Peace Prize",
    "Juliet Hollister Award",
    "Auszeichnung für außerordentlichen Beitrag zur internationalen Zusammenarbeit, Frieden und Entwicklung",
    "Hoch anerkannte internationale Auszeichnung für außergewöhnliche Beiträge zur Förderung des Friedens",
    "Anerkennung für Förderung von interreligiösem Verständnis und Frieden")
var FifthQuiz = new Quiz(OptionCenter, 4,
    "Was war der erste Preis, den Wangari Maathai gewonnen hatte?",
    "Right Livelihood Award",
    "Global 500 Roll of Honour",
    "The Hunger Project’s Africa Prize for Leadership",
    "Anerkennung für außergewöhnliche Leistungen im Bereich Umweltschutz und sozialer Gerechtigkeit",
    "Ehrung für herausragende Beiträge zum Umweltschutz und zur Erhaltung der natürlichen Ressourcen",
    "Auszeichnung für herausragende Führungsqualitäten im Kontext von Initiativen zur Überwindung von Hunger und Armut in Afrika")
var SixthQuiz = new Quiz(OptionLeft, 5,
    "Was hat laut Wangari Maathai Umwelt mit Demokratie und Frieden zu tun?",
    "Ohne die Umwelt herrscht ein Resourcenmangel, der die Kultur einschränkt sowie zu Instabilität führt",
    "Bäume (und das Green Belt Movement) sind ein Instrument, um die Frauen zu vereinigen um für die Demokratie und Frieden zu kämpfen",
    "Nichts",
    "Der Feuerholzmangel sowie das Austrocknen der Flüsse gefährdet die Natur-verbundene Kultur von Kenia. Dazu kommt, dass ein Resourcenmangel zu Internalen Konflikten zwischen Ethnien führen kann um zu überleben.",
    "Wangari Maathai ging es nie um die Umwelt, sondern sie brauchte nur etwas um die Frauen von Kenia zu vereinigen, für etwas zu kämpfen, und somit hat die Natur nur indirekt mit Demokratie und Frieden zu tun",
    "Wangari Maathai pflanzte Bäume, weil sie die Umwelt schätze, und nicht weil sie dachte, dass es die Demokratie oder den Frieden stärkt.")
var SeventhQuiz = new Quiz(OptionRight, 6,
    "Das Green Belt Movement...",
    "stärkte die Umwelt",
    "stärkte die Umwelt und Kultur",
    "stärkte die Umwelt, Kultur und Demokratie",
    "Das Green Belt Movement planzte hunderte Millionen von Bäumen, hielt sich aber aus den Themen Demokratie und Frieden raus, da es nunmal dafür nicht gegründet wurde.",
    "Das Green Belt Movement half Frauen, ihre Traditionellen Kochrezepte wieder zu benutzen sowie den Mangel von Feuerholz zu besiegen.",
    "Das Green Belt Movement fing als ein Movement an, bei dem Frauen Bäume pflanzten, wurde aber immer mehr zu einer Organisation, die Proteste organisierte um Frauenrechte, Demokratie, Kultur und Frieden zu verteidigen.")
//QUIZ AREA
//QUIZ AREA
//QUIZ AREA

FirstQuiz.ActivateQuiz();

var CurrentQuizNumber = 0;
var TotalQuizAmmount = 6;
QuizArray = [FirstQuiz, SecondQuiz, ThirdQuiz, FourthQuiz, FifthQuiz, SixthQuiz, SeventhQuiz];
var CurrentQuiz = QuizArray[CurrentQuizNumber];

function ActiveNextQuiz() {
    CurrentQuizNumber = CurrentQuizNumber + 1;
    if (CurrentQuizNumber > TotalQuizAmmount) {
        window.location = "https://geschichteprojekt.github.io/"
    }
    else {
        CurrentQuiz = QuizArray[CurrentQuizNumber];
    }
    CurrentQuiz.ActivateQuiz();
    RightAnswer = CurrentQuiz.RightAnswer;
    FalseAnswers = [];
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
