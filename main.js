//! Конструктор вопросов
function Question (question, answer, numberRightAnswer) {
    this.question = question;
    this.answer = answer;
    this.numberRightAnswer = numberRightAnswer;
};

//! Вопросы
let question1 = new Question ('2x2 = ?', [2, 4, 8, 16], 1);
let question2 = new Question ('5x5 = ?', [25, 14, 88, 30], 0);
let question3 = new Question ('10x11 = ?', [112, 110, 100, 1110], 1);
let question4 = new Question ('4x8 = ?', [36, 40, 28, 32], 3);

//! Счет
let score = 0;

//! Показываем случайный вопрос
let questionMassive = [question1, question2, question3, question4];
questionMassive = questionMassive.sort(() => Math.random() - 0.5);
console.log(questionMassive[0].question);

//! Показываем варианты ответов на вопрос 
function seeQuestion() {
    for (let i = 0, index = 0; i < question1.answer.length, index < question1.answer.length; i++, index++) {
        console.log(`${index}: ${questionMassive[0].answer[i]}`);
    }
}
seeQuestion();

//! Запускаем цикл проверки ответов на вопрос
function goQuestion() {
    while (true) {
        const userAnswer = prompt('Введите ответ!');
        if (userAnswer == `${questionMassive[0].numberRightAnswer}`) {
            console.log('Правильный ответ!');
            console.log(`Счет: ${score += 1}`);
            break;
        }
        if (userAnswer === 'exit') {
            console.log('Вы вышли из игры!');
            break;
        }
        if (userAnswer !== `${questionMassive[0].numberRightAnswer}`) {
            console.log('Неправильный ответ!');
            console.log(`Счет: ${score}`);
            break;
        }
    };  
}
goQuestion();
