let submit = document.getElementById("Submit");
let span = document.getElementsByClassName("close")[0];
let modal = document.getElementById("myModal");
let score = document.getElementById("score");
let quiz = document.getElementById("quiz");
var x = 0

submit.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "flex"
    check();
    console.log(quiz.elements)
    score.innerText = "You've selected " + x + " of 10 correct!"
}

span.onclick = function() {
    modal.style.display = "none"
}

function check () {
    if (quiz.elements[0].checked==true) {x++};
    // if (quiz.elements[1].checked=="a") {x++};
    // if (quiz.elements[2].checked=="a") {x++};
    // if (quiz.elements[3].checked=="a") {x++}; //question 1
    // if (quiz.elements[4].checked=="d") {x++};
    // if (quiz.elements[5].checked=="d") {x++};
    // if (quiz.elements[6].checked=="d") {x++};
    if (quiz.elements[7].checked==true) {x++}; //question 2
    // if (quiz.elements[8].checked=="c") {x++};
    // if (quiz.elements[9].checked=="c") {x++};
    if (quiz.elements[10].checked==true) {x++};
    // if (quiz.elements[11].checked=="c") {x++}; //question 3
    // if (quiz.elements[12].checked=="d") {x++};
    // if (quiz.elements[13].checked=="d") {x++};
    // if (quiz.elements[14].checked=="d") {x++};
    if (quiz.elements[15].checked==true) {x++}; //question 4
    if (quiz.elements[16].checked==true) {x++};
    // if (quiz.elements[17].checked=="a") {x++};
    // if (quiz.elements[18].checked=="a") {x++};
    // if (quiz.elements[19].checked=="a") {x++}; //question 5
    // if (quiz.elements[20].checked=="b") {x++};
    if (quiz.elements[21].checked==true) {x++};
    // if (quiz.elements[22].checked=="b") {x++};
    // if (quiz.elements[23].checked=="b") {x++}; //question 6
    // if (quiz.elements[24].checked=="d") {x++};
    // if (quiz.elements[25].checked=="d") {x++};
    // if (quiz.elements[26].checked=="d") {x++};
    if (quiz.elements[27].checked==true) {x++}; //question 7
    // if (quiz.elements[28].checked=="c") {x++};
    // if (quiz.elements[29].checked=="c") {x++};
    if (quiz.elements[30].checked==true) {x++};
    // if (quiz.elements[31].checked=="c") {x++}; //question 8
    // if (quiz.elements[32].checked=="b") {x++};
    if (quiz.elements[33].checked==true) {x++};
    // if (quiz.elements[34].checked=="b") {x++};
    // if (quiz.elements[35].checked=="b") {x++}; //question 9
    if (quiz.elements[36].checked==true) {x++};
    // if (quiz.elements[37].checked=="a") {x++};
    // if (quiz.elements[38].checked=="a") {x++};
    // if (quiz.elements[39].checked=="a") {x++}; // question 10
    console.log(x);
}

// function resultScore(new_text) {
//     const score = document.getElementById("score");
//     score.innerText=x;
// }

// const el = document.getElementById("submit");
// el.addEventListener("onClick",() => {resultScore(x); }, false);
