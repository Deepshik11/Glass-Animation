// -----------color change---
document.addEventListener("DOMContentLoaded", () => {
    let scrollButton1 = document.getElementById("scrollButton");
    let scrollButton2 = document.getElementById("scrollButton2");
    let stopButton = document.getElementById("stop2");
    let scrollInterval;
    function stopScrolling() {
        if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
            scrollButton1.src = "Images/arrow_big-01.png"
            scrollButton2.src = "Images/arrow_big-02.png"
        }
    }
    // Function to scroll right
    function scrollRight() {
        stopScrolling();
        scrollInterval = setInterval(() => {

            if (window.innerWidth + window.scrollX >= document.documentElement.scrollWidth - 10) {
                window.scrollTo(0, window.scrollY);
            } else {
                window.scrollBy(5, 0);
            }
        }, 50);
        this.src = "Images/arrow_big-01_hover.png"
    }
    // Function to scroll left
    function scrollLeft() {
        stopScrolling();
        scrollInterval = setInterval(() => {
            if (window.scrollX <= 0) {
                window.scrollTo(document.documentElement.scrollWidth - window.innerWidth, window.scrollY); // Reset scroll to the end
            } else {
                window.scrollBy(-5, 0);
            }
        }, 50);
        this.src = "Images/arrow_big-02_hover.png"
    }
    // Start scrolling right
    scrollButton1.addEventListener("click", scrollRight);
    // Start scrolling left
    scrollButton2.addEventListener("click", scrollLeft);
    // Stop scrolling
    stopButton.addEventListener("click", () => {
        stopScrolling();
    });
    // ----------image change-----------
    const toggle = document.getElementById("scrollButton4");
    const toggle2 = document.getElementById("scrollButton3");
    const toggle1 = document.getElementById("change")
    const container = document.querySelectorAll(".face");
    const stop1 = document.getElementById("stop2")
    const colors = ['blue', 'red', 'pink', 'green', 'orange', 'yellow', 'skyblue', 'violet', 'tertiary'];
    let cindex = 0;
    let previousColor = 0;
    container.forEach(face => {
        face.classList.add('gray');
        toggle1.innerHTML = "Default"
    });
    stop1.classList.add('gray');
    toggle1.classList.add('gray');
    toggle2.addEventListener('mouseenter', () => {
        toggle2.src = "Images/arrow_big-02_hover.png"
    })
    toggle.addEventListener('mouseenter', () => {
        toggle.src = "Images/arrow_big-01_hover.png"
    })
    toggle2.addEventListener('mouseleave', () => {
        toggle2.src = "Images/arrow_big-02.png"
    })
    toggle.addEventListener('mouseleave', () => {
        toggle.src = "Images/arrow_big-01.png"
    })
    toggle2.addEventListener('click', () => {
        container.forEach(face => {
            face.classList.remove(colors[cindex]);
        });
        stop1.classList.remove('gray')
        stop1.classList.remove(colors[cindex]);

        toggle1.classList.remove('gray')
        toggle1.classList.remove(colors[cindex]);

        cindex = (cindex - 1 + colors.length) % colors.length;
        previousColor = colors[cindex];

        container.forEach(face => {
            face.classList.add(previousColor);
        });

        stop1.classList.add(previousColor);
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
        toggle1.classList.remove('gray');
        toggle1.classList.remove(colors[cindex]);

        cindex = (cindex + 1) % colors.length;
        container.forEach(face => {
            face.classList.add(colors[cindex]);
        });
        stop1.classList.add(colors[cindex]);
        toggle1.classList.add(colors[cindex]);
        toggle1.innerHTML = colors[cindex].charAt(0).toUpperCase() + colors[cindex].slice(1);
    });

});
