const fromQuestion = document.querySelector('.questions')
const correctAnswer = ['B', 'A', 'B', 'A']

//console.log(fromQuestion)

fromQuestion.addEventListener('submit', e =>{
  
  e.preventDefault()

  const userAnswer = [fromQuestion.q1.value, fromQuestion.q2.value, fromQuestion.q3.value, fromQuestion.q4.value]
  let score = 0;

  userAnswer.forEach((answer, index) => {

    if(answer === correctAnswer[index]){
      score += 25
    }
  })

  console.log(score)


})