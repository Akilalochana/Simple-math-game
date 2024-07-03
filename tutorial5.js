

const questions = [
    { q: "8 + 7 =...", a: "15" },
    { q: "12 x 5 =...", a: "60" },
    { q: "31 - 8 =...", a: "23" },
    { q: "20 + 7 =...", a: "27" },
    { q: "7 x 7 =...", a: "49" },
    { q: "8 / 2 =...", a: "4" },
    { q: "5 + 14 =...", a: "19" },
    { q: "20 / 5 =...", a: "4" },
    { q: "8 - 7 =...", a: "1" },
    { q: "5 x 7 =...", a: "35" }
];

document.getElementById("question1").innerHTML = questions[0].q;

function questionDisplay(okId, currentDivId, nextDivId, questionSpanId, nextQuestionText, correctAnswer, answerInputId, feedbackId) {
    document.getElementById(okId).onclick = function () {
        const userAnswer = document.getElementById(answerInputId).value;

        if (userAnswer == correctAnswer) {
            document.getElementById(feedbackId).innerHTML = userAnswer + '&checkmark;' + 'correct!';
            document.getElementById(feedbackId).classList.add("correct");
        } else {
            document.getElementById(feedbackId).innerHTML = userAnswer + '&cross;' + 'correct answer is' + correctAnswer;
            document.getElementById(feedbackId).classList.add("incorrect");
        }

        document.getElementById(currentDivId).style.display = "none";
        document.getElementById(nextDivId).style.display = "block";
        document.getElementById(questionSpanId).innerHTML = nextQuestionText;
    }
}


questionDisplay('ok1', 'q1', 'q2', 'question2', questions[1].q, questions[0].a, 'answerQ1', 'feedback1id');
questionDisplay('ok2', 'q2', 'q3', 'question3', questions[2].q, questions[1].a, 'answerQ2', 'feedback2id');
questionDisplay('ok3', 'q3', 'q4', 'question4', questions[3].q, questions[2].a, 'answerQ3', 'feedback3id');
questionDisplay('ok4', 'q4', 'q5', 'question5', questions[4].q, questions[3].a, 'answerQ4', 'feedback4id');
questionDisplay('ok5', 'q5', 'q6', 'question6', questions[5].q, questions[4].a, 'answerQ5', 'feedback5id');
questionDisplay('ok6', 'q6', 'q7', 'question7', questions[6].q, questions[5].a, 'answerQ6', 'feedback6id');
questionDisplay('ok7', 'q7', 'q8', 'question8', questions[7].q, questions[6].a, 'answerQ7', 'feedback7id');
questionDisplay('ok8', 'q8', 'q9', 'question9', questions[8].q, questions[7].a, 'answerQ8', 'feedback8id');
questionDisplay('ok9', 'q9', 'q10', 'question10', questions[9].q, questions[8].a, 'answerQ9', 'feedback9id');


document.getElementById('ok10').onclick = function () {
    const userAnswer = document.getElementById('answerQ10').value;

    if (userAnswer == questions[9].a) {
        document.getElementById('feedback10id').innerHTML = userAnswer + ' ✓ correct!';
        document.getElementById('feedback10id').classList.add("correct");
    } else {
        document.getElementById('feedback10id').innerHTML = userAnswer + ' ✗ correct answer is ' + questions[9].a;
        document.getElementById('feedback10id').classList.add("incorrect");
    }

    document.getElementById('q10').style.display = "none";
}
