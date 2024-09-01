document.getElementById("scrollButton").addEventListener("click", function () {

    const scrollStep = 2;
    const scrollInterval = 10;
    const targetPosition = document.documentElement.scrollWidth - window.innerWidth;

    let currentPosition = window.scrollX;
    scrollAnimation1 = setInterval(function () {
        currentPosition += scrollStep;
        window.scrollTo(currentPosition, 0);

        if (currentPosition >= targetPosition) {
            clearInterval(scrollAnimation1);
        }
    }, scrollInterval);
});

document.getElementById("stop2").addEventListener("click", function () {
    if (scrollAnimation1) {
        clearInterval(scrollAnimation1);
        scrollAnimation1 = null;
    }
});
let scrollAnimation1
let scrollAnimation;

document.getElementById("scrollButton2").addEventListener("click", function () {
    const scrollStep = 2;
    const scrollInterval = 10;
    const targetPosition = document.documentElement.scrollWidth - window.innerWidth;

    let currentPosition = window.scrollX;
    scrollAnimation = setInterval(function () {
        currentPosition -= scrollStep;
        window.scrollTo(currentPosition, 0);

        if (currentPosition >= targetPosition) {
            clearInterval(scrollAnimation);
        }
    }, scrollInterval);
});

document.getElementById("stop1").addEventListener("click", function () {
    if (scrollAnimation) {
        clearInterval(scrollAnimation);
        scrollAnimation = null;
    }
});


// ----------image change-----------
document.getElementById("scrollButton").addEventListener("click", function () {
    this.src = "Images/arrow_big-01_hover.png"
});
document.getElementById("stop2").addEventListener("click", function () {
    document.getElementById("scrollButton").src = "Images/arrow_big-01.png"
});
document.getElementById("scrollButton2").addEventListener("click", function () {
    this.src = "Images/arrow_big-02_hover.png"
});

document.getElementById("stop1").addEventListener("click", function () {
    document.getElementById("scrollButton2").src = "Images/arrow_big-02.png"
});

document.getElementById("scrollButton3").addEventListener("mouseover", function () {
    this.src = "Images/Untitled design (1).png"
});
document.getElementById("scrollButton3").addEventListener("mouseout", function () {
    this.src = "Images/arrow_big-02.png"
});
document.getElementById("scrollButton4").addEventListener("mouseover", function () {
    this.src = "Images/Untitled design.png"
});
document.getElementById("scrollButton4").addEventListener("mouseout", function () {
    this.src = "Images/arrow_big-01.png"
});


// -----------color change---
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("scrollButton4");
    const toggle2 = document.getElementById("scrollButton3");
    const toggle1 = document.getElementById("change")
    const container = document.querySelectorAll(".face");
    const stop1 = document.getElementById("stop2")
    const stop2=document.getElementById("stop1")
    const colors = ['blue', 'red', 'pink', 'green', 'orange', 'yellow', 'skyblue', 'violet', 'tertiary'];
    let cindex = 0;
    let previousColor = 0;

    container.forEach(face => {
        face.classList.add('gray');
        toggle1.innerHTML = "Default"
    });
    stop1.classList.add('gray');
    stop2.classList.add('gray');
    toggle1.classList.add('gray');

    toggle2.addEventListener('click', () => {
        container.forEach(face => {
            face.classList.remove(colors[cindex]);
        });
        stop1.classList.remove('gray')
        stop1.classList.remove(colors[cindex]);

        stop2.classList.remove('gray')
        stop2.classList.remove(colors[cindex]);

        toggle1.classList.remove('gray')
        toggle1.classList.remove(colors[cindex]);

        cindex = (cindex - 1 + colors.length) % colors.length;
        previousColor = colors[cindex];

        container.forEach(face => {
            face.classList.add(previousColor);
        });

        stop1.classList.add(previousColor);
        stop2.classList.add(previousColor);
        toggle1.classList.add(previousColor);

        toggle1.innerHTML = previousColor.charAt(0).toUpperCase() + previousColor.slice(1);
    });

    toggle.addEventListener('click', () => {
        if (colors[0]) {
            toggle1.innerHTML = "Blue"
        }
        if (cindex <= 7) {
            toggle1.innerHTML = colors[cindex + 1];
        }
        container.forEach(face => {
            face.classList.remove('gray')
            face.classList.remove(colors[cindex]);
        });
        stop1.classList.remove('gray');
        stop1.classList.remove(colors[cindex]);

        stop2.classList.remove('gray');
        stop2.classList.remove(colors[cindex]);

        toggle1.classList.remove('gray');
        toggle1.classList.remove(colors[cindex]);

        cindex = (cindex + 1) % colors.length;
        container.forEach(face => {
            face.classList.add(colors[cindex]);
        });
        stop1.classList.add(colors[cindex]);
        stop2.classList.add(colors[cindex]);
        toggle1.classList.add(colors[cindex]);

        toggle1.innerHTML = colors[cindex].charAt(0).toUpperCase() + colors[cindex].slice(1);
    });

});
