

const div = document.querySelector('div')

let currentQuestionIndex = 0
let question =[]

function shuffle(array){
    for(let i =array.length - 1 ; i > 0 ; i--){
        const j = Math.floor(Math.random()) * (i+1);
        [array[i],array[j]],[array[j],array[i]]
    }
    return array;
}
const getQuestions = async ()=>{
    try {
        const response = await axios('https://the-trivia-api.com/v2/questions')
        question = response.data
        showQuestion(currentQuestionIndex)
        // console.log(question);
    } catch (error) {
        console.log(error)   
    }
}




const showQuestion = (index)=>{
    const item = question[index]
    if(item){
        const answer = [...item.incorrectAnswers,item.correctAnswer]
        shuffle(answer);

        let questionHTML = `<h1>${item.question.text}</h1>`
        answer.forEach((answer, i)=>{
            questionHTML += `
            <label>
            <input type="radio" name="question${index}" value="${answer}">
            ${answer}
            </label><br>
            `
        });

        questionHTML +=`<button onclick="nextQuestion()">Next</button>`
        div.innerHTML = `<div class="question">${questionHTML}</div>`
    }else{
        div.innerHTML = `<h1>You have completed the quiz</h1>`
    }
}


const nextQuestion = ()=>{
    currentQuestionIndex++
    showQuestion(currentQuestionIndex)
}

getQuestions();






















// let currentQuestionIndex = 0;
// let questions = [];

// // Function to shuffle an array
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// const getQuestions = async () => {
//     try {
//         const res = await axios('https://the-trivia-api.com/v2/questions');
//         questions = res.data;

//         // Display the first question
//         showQuestion(currentQuestionIndex);
//     } catch (error) {
//         console.error('Error fetching the questions:', error);
//     }
// };

// // Function to show a question
// const showQuestion = (index) => {
//     const item = questions[index];
//     if (item) {
//         // Combine correct and incorrect answers
//         const answers = [...item.incorrectAnswers, item.correctAnswer];
//         // Shuffle the combined list
//         shuffle(answers);

//         // Build the HTML for the question and shuffled answers with radio buttons
//         let questionHTML = `<h1>${item.question.text}</h1>`;
//         answers.forEach((answer, i) => {
//             questionHTML += `
//                 <label>
//                     <input type="radio" name="question${index}" value="${answer}">
//                     ${answer}
//                 </label><br>
//             `;
//         });

//         // Add Next button
//         questionHTML += `<button onclick="nextQuestion()">Next</button>`;

//         div.innerHTML = `<div class="question">${questionHTML}</div>`;
//     } else {
//         div.innerHTML = `<h1>Congratulations! You have completed the quiz.</h1>`;
//     }
// };

// // Function to move to the next question
// const nextQuestion = () => {
//     currentQuestionIndex++;
//     showQuestion(currentQuestionIndex);
// };

// getQuestions();
