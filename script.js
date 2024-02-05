document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("no").addEventListener("click", handleNoClick);
    document.getElementById("yes").addEventListener("click", handleYesClick);
});

const images = ["lg1", "lg2", "rose", "purple", "shinning"];
let currentImageIndex = 0;

const clapAudio = new Audio('./Effects/Crowd Laughs Cheering And Applauding 1.wav');
clapAudio.volume = 0.1;

function handleNoClick() {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");

    const currentImageId = images[currentImageIndex];
    const currentImage = document.getElementById(currentImageId);

    const randomPhrases = ["NO", "Sure?", "Really Sure?", "Think again", "Last chance!"];
    const randomIndex = Math.floor(Math.random() * randomPhrases.length);
    const phrase = randomPhrases[randomIndex];

    if (phrase === "NO") {
        yesButton.style.transform = "scale(1.2)";
    } else if (phrase === "Sure?") {
        yesButton.style.transform = "scale(1.4)";
    } else if (phrase === "Really Sure?") {
        yesButton.style.transform = "scale(1.8)";
    } else if (phrase === "Think again") {
        yesButton.style.transform = "scale(2.4)";
    } else if (phrase === "Last chance!") {
        yesButton.style.transform = "scale(4.8)";
    }

    noButton.innerText = phrase;

    if (currentImage) {
        fadeInImage(currentImage);
        currentImageIndex++;

        if (currentImageIndex === images.length) {
            currentImageIndex = 0;
        }
    }
}

function fadeInImage(imageElement) {
    let opacity = 0;
    const fadeInInterval = setInterval(function() {
        opacity += 0.05;
        imageElement.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(fadeInInterval);
        }
    }, 100);
}

function handleYesClick() {
    document.body.style.background = "linear-gradient(45deg, #ffcc00, #ff99cc)";
    confettiRain();
    clapAudio.play();
    blinkImages();
}

function blinkImages() {
    images.forEach(imageId => {
        const image = document.getElementById(imageId);
        if (image) {
            image.classList.add("blink");
            setTimeout(() => {
                image.classList.remove("blink");
            }, 5000);
        }
    });
}

function confettiRain() {
    particlesJS("confetti", {
        particles: {
            number: {
                value: 100,
            },
            size: {
                value: 3,
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
            },
        },
        position: {
            enable: true,
            x: 0,
            y: 0,
        },
    });
}
