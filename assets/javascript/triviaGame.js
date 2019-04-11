var trivia = [
    {
        question: "Name the largest freshwater lake in the world?",
        correctAnswer: 1, // este es el index de la contestación correcta
        answers: [
            "Nile",
           
            "Lake Superior",

            "Orinoco"
        ]
    },
    {
        question: "What kind of weapon is a falchion?",
        correctAnswer: 0, // este es el index de la contestación correcta
        answers: [
            "A sword", 
            "A gun",
            "A bio-Quimic"
        ]
    }
];
// ------- TIMER-------
var audio = new Audio ('lose.mp3');
var counter = 0;
var timeLeft = 59;
var interval = setInterval(timeIt, 1000);

var timer = $('#timer');
    timer.html('0');

    function timeIt(){
        counter++;
        timer.html('Time left: '  +  ( timeLeft -  counter));
        if (counter == timeLeft) {
            audio.play();
            clearInterval(interval);
        
        }
        
    }

// get element current-question to append question and answers
// create question element and added to current-question
var currentQuestionContainer = document.getElementById('current-question');
var question = document.getElementById('question');
question.innerText = trivia[0].question;

currentQuestionContainer.appendChild(question)

currentQuestionContainer.appendChild(question);

// opciones de respuesta
trivia[0].answers.map( function(answer) {
    var inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'radio');
    inputElement.setAttribute('name','index');
    inputElement.setAttribute('value','index');
    currentQuestionContainer.appendChild(inputElement);
    currentQuestionContainer.appendChild(document.createTextNode(answer));
    currentQuestionContainer.appendChild(document.createElement('br'));
    currentQuestionContainer.appendChild(document.createElement('br'));
})

// add submit button
var submitButton = document.createElement('button')
submitButton.innerText = 'Submit Answer';
submitButton.onclick = submitAnswer;



function submitAnswer() {
    // aquí tienes que escribir el codigo para coger la respuesta y hacer algo con ella
    console.log('hoals amigos')
}
