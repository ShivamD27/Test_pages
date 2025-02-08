document.getElementById("yes-btn").addEventListener("click", function () {
    document.getElementById("love-meter").classList.remove("hidden");
});

document.getElementById("love-slider").addEventListener("input", function () {
    document.getElementById("love-score").textContent = this.value + "%";
});

document.getElementById("no-btn").addEventListener("mouseover", function () {
    this.style.position = "absolute";
    this.style.left = Math.random() * window.innerWidth + "px";
    this.style.top = Math.random() * window.innerHeight + "px";
});
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("love-slider");
    const score = document.getElementById("love-score");
    const fireworksContainer = document.getElementById("fireworks-container");

    // Function to update love score
    slider.addEventListener("input", function() {
        score.textContent = slider.value + "%";

        // Show fireworks when slider reaches 100%
        if (slider.value == 100) {
            startFireworks();
        } else {
            stopFireworks();
        }
    });

    function startFireworks() {
        fireworksContainer.classList.remove("hidden");
        fireworksContainer.classList.add("show-fireworks");

        for (let i = 0; i < 10; i++) {
            let firework = document.createElement("div");
            firework.classList.add("firework");
            firework.style.left = Math.random() * 100 + "vw";
            firework.style.top = Math.random() * 100 + "vh";
            fireworksContainer.appendChild(firework);

            setTimeout(() => {
                firework.remove();
            }, 1000);
        }
    }

    function stopFireworks() {
        fireworksContainer.classList.add("hidden");
        fireworksContainer.classList.remove("show-fireworks");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const surpriseButton = document.getElementById("surprise-btn");
    const valentineQuestion = document.getElementById("valentine-question");

    // When the surprise button is clicked, show the Valentine question
    surpriseButton.addEventListener("click", function () {
        surpriseButton.style.display = "none"; // Hide button
        valentineQuestion.classList.remove("hidden"); // Show question
    });

    document.getElementById("yes-btn").addEventListener("click", function () {
        document.getElementById("love-meter").classList.remove("hidden");
    });

    document.getElementById("love-slider").addEventListener("input", function () {
        document.getElementById("love-score").textContent = this.value + "%";
    });

    document.getElementById("no-btn").addEventListener("mouseover", function () {
        this.style.position = "absolute";
        this.style.left = Math.random() * window.innerWidth + "px";
        this.style.top = Math.random() * window.innerHeight + "px";
    });
});
     