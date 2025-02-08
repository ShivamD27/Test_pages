document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quiz-container");
    const submitButton = document.getElementById("submit-btn");
    const resultText = document.getElementById("quiz-result");

    // Quiz Questions & Correct Answers
    const quizData = [
        {
            question: "What was our first date location? ❤️",
            options: ["🍕 Pizza Place", "☕ Café", "🎥 Movie Theater", "🌳 Park"],
            correct: "☕ Café"
        },
        {
            question: "where do we love spending time the most? ",
            options: ["🔴 Barclays", "💙 College", "🖤 Katraj Home", "💚 Cafes"],
            correct: "🖤 Katraj Home"
        },
        {
            question: "What is your favorite nickname for you? 🥰",
            options: ["Baby", "Cutie", "Jaanu", "Ratrani"],
            correct: "Ratrani"
        },
        {
            question: "Which song reminds me of you the most? 🎶",
            options: ["Perfect - Ed Sheeran", "Tum Mile", "Raabta", "Love Me Like You Do"],
            correct: "Raabta"
        },
        {
            question: "Which Colors shirt do you like the most on me? ✈️",
            options: ["🏝️ Olive green", "🏔️ White", "🗽 navy Blue", "🌉 Brown"],
            correct: "🌉 Brown"
        }
    ];

    // Load Questions into HTML
    quizData.forEach((q, index) => {
        let questionHTML = `<div class="question">
            <h3>${q.question}</h3>`;
        
        q.options.forEach(option => {
            questionHTML += `<label>
                <input type="radio" name="q${index}" value="${option}"> ${option}
            </label><br>`;
        });

        questionHTML += `</div>`;
        quizContainer.innerHTML += questionHTML;
    });

    // Submit Button Event
    submitButton.addEventListener("click", function () {
        let score = 0;
        const answers = document.querySelectorAll("input:checked");

        answers.forEach((answer, index) => {
            if (answer.value === quizData[index].correct) {
                score++;
            }
        });

        // Display Result Message & GIF
        if (score === quizData.length) {
            resultText.innerHTML = `😍 OMG! You got ${score}/${quizData.length}! You remember everything Buddyyyy!!! 🎉💖<br>
                <img src="https://media.giphy.com/media/0OgdJVNjbcIifqSb7U/giphy.gif?cid=790b761171h8yeblijhrn89gwm0mzjc3xygf1tke09n80yuy&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="200px">`;
        } else if (score >= 3) {
            resultText.innerHTML = `🥰 Nice! You got ${score}/${quizData.length}! You love me but need to remember a few more details 😆💞<br>
                <img src="https://media.giphy.com/media/fUQ4rhUZJYiQsas6WD/giphy.gif?cid=790b7611hg8em9q5o34q1ezanvs2cetz90x1qof9l33qm5k5&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="200px">`;
        } else {
            resultText.innerHTML = `😢 Oops! You got ${score}/${quizData.length}. Looks like we need more dates to refresh your memory! Hehehe 😂💔<br>
                <img src="https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif" width="200px">`;
        }
    });
});
