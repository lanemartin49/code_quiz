// timer count down
let startingTimer = 1;
let time = startingTimer * 60;
let timerEl = document.getElementById("timer");
let timer = setInterval(countDown, 1000);
function countDown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (time === 0) {
        clearInterval(timer)
    }
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
};
// create questions
let startQuestions = [
    { question: "What country is the brand Seiko from?", answer: 4 },
    { question: "How many points does the crown have in the Rolex symbol?", answer: 4 },
    { question: "How many hands does the typical watch have?", answer: 1 },
    { question: "What material are most watches made from?", answer: 3 },
    { question: "Who founded the company Rolex", answer: 2 }
];
// create answers
let answers = [
    { "1": "Switzerland", "2": "Germany", "3": "China", "4": "Japan" },
    { "1": "6", "2": "7", "3": "4", "4": "5" },
    { "1": "3", "2": "6", "3": "2", "4": "4" },
    { "1": "Titanium", "2": "Plastic", "3": "Stainless Steel", "4": "Platinum" },
    { "1": "Kintaro Hattori", "2": "Hans Wilsdorf", "3": "Garth Brooks", "4": "Roland Schwertner" },
];
console.log(
    answers[0][4],
    answers[0][4], "2",
    answers[0][1], "3",
    answers[0][3], "4",
    answers[0][2], "5"
)
// user score starts at 0
let userScore = 0;
$("#question").text(startQuestions[0].question);
$(".answer1").text(answers[0][1]);
$(".answer2").text(answers[0][2]);
$(".answer3").text(answers[0][3]);
$(".answer4").text(answers[0][4]);
let index = 0;
function renderQuestion() {
    $("#question").text(startQuestions[index].question);
    $(".answer1").text(answers[index][1]);
    $(".answer2").text(answers[index][2]);
    $(".answer3").text(answers[index][3]);
    $(".answer4").text(answers[index][4]);
}
$(".answers").on("click", function () {
    var buttonStart = $(this).val();
    console.log(buttonStart);
    if (index < startQuestions.length) {
        if (
            parseInt(buttonStart) === parseInt(startQuestions[index].answer)
        ) {
            userScore++;
            alert("correct!")
        } else {
            alert("wrong")
            time -= 10
        }
        index++
        renderQuestion()
    } else {
        $(".scoreEl").show()
        $(".playAgain").show()
        $(".questionContainer").hide()
        document.location.href = "highscore.html";
        clearInterval(timer)
        
    }
});
console.log(startQuestions[1].question, startQuestions[0].answer);
// High score (local storage) and save initials
// add event listerner to attach to sumbit button
// take initials/ score and save to local storage 
// conditions for keeping score