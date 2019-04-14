var trivia = [
    {
        question: "Name the largest freshwater lake in the world?",
        correctAnswer: 1, // este es el index de la contestación correcta
        answers: [
            "Lake Large",
           
            "Lake Superior",

            "Lake Tahoe"
        ]
    },
    {
        question: "Name the world's largest ocean?",
        correctAnswer: 2, // este es el index de la contestación correcta
        answers: [
            "indian", 
            "Artic",
            "Pacific"
        ]
    },
    {
        question: "What is the world's longest river??",
        correctAnswer: 1, // este es el index de la contestación correcta
        answers: [
            "Nile",
           
            "Amazon",

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

var counter = 0;
var timeLeft = 10;
var interval = setInterval(timeIt, 1000);

var timer = $('#timer');
    timer.html('Ready');
    function timeIt(){
        counter++;
        timer.html('Time left: '  +  ( timeLeft -  counter));
        if (counter == timeLeft) {
            
            clearInterval(interval);
        
        }
        
    }

// get element current-question to append question and answers
// create question element and added to current-question
var currentQuestionContainer = document.getElementById('current-question');
var question = document.getElementById('question');
var answers = document.getElementById('answers');
var ramdonIndex = Math.floor((Math.random() * trivia.length));



question.innerText = trivia[ramdonIndex].question;


// opciones de respuesta

trivia[ramdonIndex].answers.forEach( function(answer, index) {
    var inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'radio');
    inputElement.setAttribute('class', 'answer');
    inputElement.setAttribute('name', 'answer');
    inputElement.setAttribute('value', index);
    inputElement.onclick = submitAnswer;
    answers.appendChild(inputElement);
    answers.appendChild(document.createTextNode(answer));
    answers.appendChild(document.createElement('br'));
});

function submitAnswer() {
    // aquí tienes que escribir el codigo para coger la respuesta y hacer algo con ella
    console.log(trivia[0].correctAnswer === this.value);
}



// conditions if user choise es igual a answer[correctAnswer]
// the give a point 
// restar timer 
// call question()
