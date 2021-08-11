let Submit = document.getElementById("Submit");
let span = document.getElementsByClassName("close")[0];
var x = 0
var q1=document.quiz.question1.value;
var q2=document.quiz.question2.value;
var q3=document.quiz.question3.value;
var q4=document.quiz.question4.value;
var q5=document.quiz.question5.value;

Submit.onclick = function() {
    modal.style.display = "flex"
    check ();
}

span.onclick = function() {
    modal.style.display = "none"
}

function check () {
    if (q1=="a") {x++}
    if (q2=="d") {x++}
    if (q3=="c") {x++}
    if (q4=="d") {x++}
    if (q5=="a") {x++}
    console.log("x");
}

Submit.onclick = function () {
    document.getElementById('results')
}
