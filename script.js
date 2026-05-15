// Scrolling header effect

let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
    let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll Down
        header.style.top = "-120px";
    } else {
        // Scroll Up
        header.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Typing Effect

const text = "Frontend Developer";
const typingElement = document.querySelector(".typing-text");

let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(() => {
            typingElement.textContent = "";
            index = 0;
            typeText();
        }, 1500);
    }
}

typeText();