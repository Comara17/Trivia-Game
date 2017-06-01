
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var count = 25;
var interval;
var timeUp;



var q1 = {
    question1: "What is Chewbacca's home planet?",
    answers: ['Naboo', 'Kashyyyk', 'Tatooine', 'Yavin IV'],
    rightAnswer: 'Kashyyyk',
    name: 'q1'
};

var q2 = {
    question1: 'What member of the Red Squadron was Luke Skywalker?',
    answers: ['1', '3', '7', '5'],
    rightAnswer: '5',
    name: 'q2'
};

var q3 = {
    question1: 'Which of these star ships is not from the Star Wars universe?',
    answers: ['A-Wing', 'B-Wing', 'T-Wing', 'Y-Wing'],
    rightAnswer: 'T-Wing',
    name: 'q3'
};

var q4 = {
    question1: 'What planet is the rebel base of operations in A New Hope?',
    answers: ['Dantooine', 'Coruscant', 'Alderaan', 'Naboo'],
    rightAnswer: 'Dantooine',
    name: 'q4'
};

var q5 = {
    question1: 'Which of these lightsaber crystals is not from the Star Wars Universe?',
    answers: ['Rubat', 'Zircon', 'Nextor', 'Kyba'],
    rightAnswer: 'Zircon',
    name: 'q5'
};

var questions = [q1, q2, q3, q4, q5];

$(document).ready(function() {
    $('.start').show();
    $('.game').hide();
    $('.results').hide();
    $('#start-button').on('click', function() {
        $('.game').show();
        interval = setInterval(timer, 1000);
        $('.start').hide();
        timeUp = setTimeout(function() {
            clearInterval(interval);
            checkAnswer();
            $('#results').append('You ran out of time!</br>');
            showResults();
            $('.results').show();
            $('.game').hide();
        }, 25000);
    });
    $('#done-button').on('click', function() {
        clearTimeout(timeUp);
        clearInterval(interval);
        checkAnswer();
        showResults();
        $('.results').show();
        $('.game').hide();
    });

});


function checkAnswer() {
    for (var i = 0; i < questions.length; i++) {
        var rightAnswer = questions[i].rightAnswer;
        var inputName = questions[i].name;
        var clicked = $('input[type="radio"][name=' + inputName + ']:checked').val();
        if (clicked === undefined) {
            unanswered++;
        } else if (clicked === rightAnswer) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
    }
    console.log(rightAnswer);
}

function showResults() {
    $('#results').append('Correctly answered: ' + correctAnswers + '</br>');
    $('#results').append('Incorrectly answered: ' + incorrectAnswers + '</br>');
    $('#results').append('Unanswered: ' + unanswered + '</br>');
}

function timer() {
    count--;
    if (count === 0) {
        timerMessage();
        clearInterval(interval);
    }
    $('#countdown-timer').html(count);
}

function timerMessage() {
    $('#timer-message').html('Time is up!');
}


