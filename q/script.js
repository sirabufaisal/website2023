// References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;



const quizArray = [
    {
        id: "0",
        question: " <img align='center' width='50%' src='img/2022_09_06_12_05_IMG_3125.JPG'> <br>  الاغنية المفضلة لدى محمد ؟",
        options: ["انتظرته", "كنت داري", "مسألة سهلة", "الغرقان"],
        correct: "الغرقان",
        correctContent: "صح الاغنية المفضلة هي الغرقان 😍👌",
        incorrectContent: "ماش 😒",
    },
    {
        id: "1",
        question: "<img align='center' width='50%' src='img/2022_08_26_07_58_IMG_2885.JPG'> <br> الفنان المفضل لدى محمد ؟",
        options: ["راشد الماجد", "محمد عبده", "رابح صقر", "خالد عبدالرحمن"],
        correct: "خالد عبدالرحمن",
        correctContent: "أكيد أبو نايف هو المفضل 😍😍",
        incorrectContent: "تستهبل ؟ 🤔",
    },
    {
        id: "2",
        question: "<img align='center' width='50%' src='img/٢٠٢١_٠٣_٠٣_١٣_٠٦_IMG_0361.JPG'> <br> افضل مادة لمحمد ؟",
        options: ["الانجليزي", "الحاسب", "الفيزياء", "الرياضيات"],
        correct: "الحاسب",
        correctContent: "بالضبط 😍😍",
        incorrectContent: "قم انقلع ! 😡",
    },
    {
        id: "3",
        question: "<img align='center' width='50%' src='img/٢٠٢١_٠٣_٠٢_١٠_٤٧_IMG_0338.JPG'> <br> محمد وش يشجع ؟",
        options: ["الهلال", "الاتحاد", "الاهلي", "الزمالك"],
        correct: "الهلال",
        correctContent: " صحيح 😍😍",
        incorrectContent: "لااااا ! 😡",
    },
    {
        id: "4",
        question: "<img align='center' width='50%' src='img/1.JPG'> <br> السلاح المفضل لمحمد بكود ؟",
        options: ["Sniper", "AK47", "MP7", "MP5"],
        correct: "Sniper",
        correctContent: " صحيح 😍😍",
        incorrectContent: "لااااا ! 😡",
    },
    {
        id: "5",
        question: "<img align='center' width='50%' src='img/2.JPG'> <br> العادة اليومية لمحمد ؟",
        options: ["النوم", "مثل الي بالصورة" , "المشي", "اللعب"],
        correct: "النوم",
        correctContent: " صحيح 😍😍",
        incorrectContent: "لااااا ! 😡",
    },
    {
        id: "6",
        question: "<img align='center' width='50%' src='img/3.JPG'> <br> وش تتوقع سبب تصوير محمد للفاتورة ؟",
        options: ["رقم الفاتورة", "يحب المطعم" , "يوثق يومه", "السعر"],
        correct: "رقم الفاتورة",
        correctContent: " صحيح عشان 505 😍😍",
        incorrectContent: "لااااا ! 😡",
    },
    {
        id: "7",
        question: "<img align='center' width='50%' src='img/4.JPG'> <br> اقصى مدة قضاها محمد بالنادي ؟",
        options: ["ثمانية ايام متقطعة", "ثمانية ايام متواصلة" , "يومين", "ثلاث اشهر"],
        correct: "ثمانية ايام متقطعة",
        correctContent: " بالضبط محمد ماله خلق دايم 😍😍",
        incorrectContent: "غير صحيح ! 😡",
    },
    {
        id: "8",
        question: "<img align='center' width='50%' src='img/5.JPG'> <br> اول صديق دراسي لمحمد ؟",
        options: ["احمد القحطاني", "محمد الدامغ" , "محمد الغامدي", "سلطان الغامدي"],
        correct: "احمد القحطاني",
        correctContent: " صحيح أول شخص كان أحمد القحطاني ومن ثم محمد الغامدي ومن ثم محمد الدامغ ومن ثم سلطان الغامدي 😍😍",
        incorrectContent: "خطأ ! 😡",
    },
    {
        id: "9",
        question: "<img align='center' width='50%' src='img/6.JPEG'> <br> افضل اكله لمحمد ؟",
        options: ["مرقوق", "كبسه" , "برقر", "مشغوثه"],
        correct: "مشغوثه",
        correctContent: " صحيح 😍😍",
        incorrectContent: "خطأ ! 😡",
    },
    {
        id: "10",
        question: "<img align='center' width='50%' src='img/6.JPG'> <br> افضل مشروب لمحمد ؟",
        options: ["قهوة", "قشر" , "مويه", "ايس تي"],
        correct: "ايس تي",
        correctContent: " صحيح 😍😍",
        incorrectContent: "خطأ ! 😡",
    },
    {
        id: "11",
        question: "<img align='center' width='50%' src='img/7.JPG'> <br> في اي تاريخ ولد محمد ؟",
        options: ["1423/10/06 هـ", "1423/09/02 هـ" , "1423/01/06 هـ", "1422/12/28 هـ"],
        correct: "1423/10/06 هـ",
        correctContent: " صحيح 😍😍",
        incorrectContent: "خطأ ! 😡",
    },
];

// Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

// Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        // Increment questionCount
        questionCount += 1;
        // If last question
        if (questionCount == quizArray.length) {
            // Hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            // User score
            userScore.innerHTML =
                "جبت " + scoreCount + " من اصل " + questionCount;
        } else {
            // Display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " من " + quizArray.length + " الاسئلة";
            // Display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

// Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}ث`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

// Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    // Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    // Display current question card
    quizCards[questionCount].classList.remove("hide");
};

// Quiz Creation
function quizCreator() {
    // Randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    // Generate quiz
    for (let i of quizArray) {
        // Randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        // Quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        // Question number
        countOfQuestion.innerHTML = 1 + " من " + quizArray.length + " الاسئلة";
        // Question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        // Options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

// Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    let currentQuestion = quizArray[questionCount];

    if (userSolution === currentQuestion.correct) {
        userOption.classList.add("correct");
        scoreCount++;
        // Display correct content
        showWarning(currentQuestion.correctContent);
    } else {
        userOption.classList.add("incorrect");
        // For marking the correct option
        options.forEach((element) => {
            if (element.innerText == currentQuestion.correct) {
                element.classList.add("correct");
            }
        });
        // Display incorrect content
        showWarning(currentQuestion.incorrectContent);
    }

    // Clear interval (stop timer)
    clearInterval(countdown);
    // Disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

// Show warning function
function showWarning(message) {
    alert(message);
}

// Initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

// When user clicks on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

// Hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};

