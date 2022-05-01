const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const questionContainerElement=document.getElementById('question')

const questionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById('answer-bouton')

const question=[
  {
      question:'Comment représenter un paragraphe en HTML ?',
        answers :[
          {text:'<ul>',correct:false},
          {text:'<h1>',correct:false},
          {text:'<p>',correct:true},
          {text:'<paragraph>',correct:false}
      ],
  },
  {
      question:'Citez un attribut HTML lié aux images?',
      answers:[
          {text:'class',correct:false},
          {text:'img',correct:true},
          {text:'link',correct:false},
          {text:'href',correct:false}
      ],
  },
   {
      question:"Quel attribut permet d'indiquer la destination d'un lien ?",
        answers:[
          {text:'class',correct:false},
          {text:'src',correct:false},
          {text:'data',correct:false},
          {text:'a',correct:true}
  
        ],
  },
  {
      question:"Quelle balise permet d'indiquer le titre de la page web? ",
        answers:[
          {text:'<html>',correct:false},
          {text:'titre',correct:false},
          {text:'<title>',correct:true},
          {text:'body',correct:true}
  
        ],
  },
  
  {
      question:"Quelle balise permet d'aller à la ligne ? ",
        answers:[
          {text:'<br>',correct:true},
          {text:'<line>',correct:false},
          {text:'<body>',correct:false},
          {text:'<p>',correct:false}
  
        ],
  },
  {
      question:"Quelle balises utilise-t-on pour faire un commentaire en HTML?",
        answers:[
          {text:'<br>',correct:false},
          {text:'% commentaires %',correct:false},
          {text:'# commentaires #',correct:false},
          {text:'< ! -- commentaires -->',correct:true}
  
        ],
  },
  ]
  
let shuffledQuestions,currentQuestionIndex;
let quizScore=0;

function setnextQuestion(){
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex])
} 

startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',() => {
  currentQuestionIndex++
  setnextQuestion()
})
function startGame(){
  console.log('started')
  startButton.classList.add('hide')
  shuffledQuestions = question.sort(() =>Math.random() -0.5)
  currentQuestionIndex=0;
  questionContainerElement.classList.remove('hide')
  setnextQuestion()
  
}

function showQuestion(question){
  questionElement.innerText=question.question
  question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
  })
}
function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while(answerButtonsElement.firstChild){
    (answerButtonsElement.removeChild(answerButtonsElement.firstChild))
   }
}
function selectAnswer (e){
  const selectedButton=e.target
  const correct =selectedButton.dataset.correct

  setStatusClass(document.body,correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button,button.dataset.correct)   
  })
  if (shuffledQuestions.length > currentQuestionIndex+1){
    nextButton.classList.remove("hide")
  }else{
    startButton.innerText="restart"
    startButton.classList.remove("hide")
  }
  if (selectedButton.dataset = correct){
    quizScore++
  }
  document.getElementById('right-answers').innerText=quizScore
  alert("votre score est = "+quizScore)
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
