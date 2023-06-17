(function () {
  //! Конструктор вопросов
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  //! Метод выводящий ответы
  Question.prototype.displayQuestion = function () {
    console.log("%c" + this.question, "background: #424242; color: white");
    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ". " + this.answers[i]);
    }
  };

  //! Метод для проверки ответа
  Question.prototype.checkAnswer = function (answer, cb) {
    let newScore;
    if (answer === this.correct) {
      console.log("%c" + "Правильный ответ!", "background: green; color: white");
      newScore = cb(true);
    } else {
      console.log("%c" + "Неправильный ответ. Попробуйте еще раз", "background: red; color: white");
      newScore = cb(false);
    }
  //! Выводим счет
    this.displayScore(newScore)
  };

  //! Метод для вывода счета
  Question.prototype.displayScore = function(score) {
    console.log("%c" + `Ваш счет равен: ${score}`, "background: orange; color: white");
  };


  //! Вопросы
  let question1 = new Question(
    "JavaScript cамый лучший язык программирования?",
    ["да", "нет"],
    0
  );
  let question2 = new Question(
    "This внутри метода всегда ссылается на ...?",
    ["window", "document", "объект"],
    2
  );
  let question3 = new Question(
    "Что такое scope в JavaScript?",
    [
      "документ с разметкой",
      "Все методы внутри объекта",
      "движок JavaScript",
      "область видимости",
    ],
    3
  );

  //! Массив с вопросами
  let questions = [question1, question2, question3];

  //! Счет в игре
  function score() {
    let scoreValue = 0;
    return function (correct) {
        if (correct === true) {
            scoreValue++;
        }
        return scoreValue;
    }
  }
  let keepScore = score();


     //! Следующий вопрос
    function nextQuestion() {
    //! Случайный вопрос
    let n = Math.floor(Math.random() * questions.length);
    //! Распечатываем в консоль случайный вопрос с вариантами ответа
    questions[n].displayQuestion();
    //! Вопрос пользователю
    let answer = prompt("Введите номер верного ответа:");
    //! Проверка ответа с помощью метода checkAnswer
    questions[n].checkAnswer(parseInt(answer), keepScore);
    //! Выход из игры
    if (answer !== 'exit' && answer !== null) {
        nextQuestion();
    }
    };
    nextQuestion();
})();

