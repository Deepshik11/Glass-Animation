document.getElementById("scrollButton").addEventListener("click", function () {

    const scrollStep = 2;
    const scrollInterval = 10;
    const targetPosition = document.documentElement.scrollWidth - window.innerWidth;

    let currentPosition = window.scrollX;
    const scrollAnimation = setInterval(function () {
        currentPosition += scrollStep;
        window.scrollTo(currentPosition, 0);

        if (currentPosition >= targetPosition) {
            clearInterval(scrollAnimation);
        }
    }, scrollInterval);
    function stopScrollAnimation() {
        clearInterval(scrollAnimation);
        window.removeEventListener('dblclick', stopScrollAnimation);
        // window.removeEventListener('mousedown', stopScrollAnimation );
        // window.removeEventListener('touchstart', stopScrollAnimation );
    }
    window.addEventListener('dblclick', stopScrollAnimation);
    // window.addEventListener('click', stopScrollAnimation );
    // window.addEventListener('click', stopScrollAnimation);
});

document.getElementById("scrollButton2").addEventListener("click", function () {
    const scrollStep = 2;
    const scrollInterval = 10;
    const targetPosition = document.documentElement.scrollWidth - window.innerWidth;

    let currentPosition = window.scrollX;
    const scrollAnimation = setInterval(function () {
        currentPosition -= scrollStep;
        window.scrollTo(currentPosition, 0);

        if (currentPosition >= targetPosition) {
            clearInterval(scrollAnimation);
        }
    }, scrollInterval);

    function stopScrollAnimation() {
        clearInterval(scrollAnimation);
        window.removeEventListener('dblclick', stopScrollAnimation);
        //         window.removeEventListener('mousedown', stopScrollAnimation);
        //         window.removeEventListener('touchstart', stopScrollAnimation);
    }
    window.addEventListener('dblclick', stopScrollAnimation);
    //     window.addEventListener('mousedown', stopScrollAnimation);
    //     window.addEventListener('touchstart', stopScrollAnimation);
});
document.getElementById("scrollButton").addEventListener("click", function () {
    this.src = "Images/arrow_big-01_hover.png"
});
// document.getElementById("scrollButton").addEventListener("dblclick", function () {
//     this.src = "Images/arrow_big-01.png"
// });
document.getElementById("scrollButton2").addEventListener("click", function () {
    this.src = "Images/arrow_big-02_hover.png"
});
// document.getElementById("scrollButton2").addEventListener("dblclick", function () {
//     this.src = "Images/arrow_big-02.png"
// });

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("scrollButton4");
    const toggle2 = document.getElementById("scrollButton3");
    const toggle1 = document.getElementById("change")
    const container = document.querySelectorAll(".face");

    const colors = ['blue', 'red', 'pink', 'green', 'orange', 'yellow', 'sky', 'violet', 'mix'];
    let cindex = 0;
    let previousColor = 0;

    container.forEach(face => {
        face.classList.add('gray');
        toggle1.innerHTML = "Default"
    });

    toggle2.addEventListener('click', () => {
        container.forEach(face => {
            face.classList.remove(colors[cindex]);
        });

        cindex = (cindex - 1 + colors.length) % colors.length;
        previousColor = colors[cindex];

        container.forEach(face => {
            face.classList.add(previousColor);
        });

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

        cindex = (cindex + 1) % colors.length;
        container.forEach(face => {
            face.classList.add(colors[cindex]);
        });
        toggle1.innerHTML = colors[cindex].charAt(0).toUpperCase() + colors[cindex].slice(1);
    });

});
