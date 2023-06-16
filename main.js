let secretFunc = (function secretFunc() {
//! Конструктор вопросов
function Question (question, answer, numberRightAnswer) {
    this.question = question;
    this.answer = answer;
    this.numberRightAnswer = numberRightAnswer;
};

//! Вопросы
let question1 = new Question ('2x2 = ?', [2, 4,], 1);
let question2 = new Question ('5x5 = ?', [25, 14, 88, 30], 0);
let question3 = new Question ('10x11 = ?', [112, 110, 100], 1);
let question4 = new Question ('4x8 = ?', [36, 40, 28, 32], 3);

//! Счет
let score = 0;

//! Массив с вопросами
let questionMassive = [question1, question2, question3, question4];

//! Показываем случайный вопрос
function seeQuestion() {
    questionMassive = questionMassive.sort(() => Math.random() - 0.5);
    console.log(questionMassive[0].question);

    questionMassive[0].answer.forEach((el, i) => {
        console.log(`${i}: ${el}`);
    });
}
seeQuestion();


//! Запускаем цикл проверки ответов на вопрос
function goCheckQuestion() {
    while (true) {
        const userAnswer = prompt('Введите ответ!');
        if (userAnswer == `${questionMassive[0].numberRightAnswer}`) {
            console.log('Правильный ответ!');
            console.log(`Счет: ${score += 1}`);
        }
        if (userAnswer === 'exit' || userAnswer === null) {
            console.log('Вы вышли из игры!');
            break;
        }
        if (userAnswer !== `${questionMassive[0].numberRightAnswer}`) {
            console.log('Неправильный ответ!');
            console.log(`Счет: ${score}`);
        }
        seeQuestion();
    };  
}
goCheckQuestion();
})();
