const button = document.querySelector(".btn");
const par = document.querySelector(".show");
const rightAnswerOne = document.querySelector(".rightAnswerOne");
const rightAnswerTwo = document.querySelector(".rightAnswerTwo");
const rightAnswerThree = document.querySelector(".rightAnswerThree");
const rightAnswerFour = document.querySelector(".rightAnswerFour");
const rightAnswerFive = document.querySelector(".rightAnswerFive");

button.addEventListener("click", result);

function result(e) {
  e.preventDefault();
  //Если для одного вопроса выбран правильный вариант ответа -> добавляем пользователю 1 балл

  let points = 0; //изначально у пользователя 0 баллов

  if(document.querySelector("#answerOne").checked){
    points++;
  }

  if(document.querySelector("#answerTwo").checked){
    points++;
  }

  if(document.querySelector("#answerThree").checked){
    points++;
  }

  if(document.querySelector("#answerFour").checked){
    points++;
  }

  if(document.querySelector("#answerFive").checked){
    points++;
  }

  rightAnswerOne.style.display = "block";
  rightAnswerTwo.style.display = "block";
  rightAnswerThree.style.display = "block";
  rightAnswerFour.style.display = "block";
  rightAnswerFive.style.display = "block";
  
  par.textContent = "Ваши баллы: " + points;
}

result();