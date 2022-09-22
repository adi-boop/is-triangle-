const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateBaseXHeight(a, b) {
    const xOfBH = a * b;
    return xOfBH;
}

function calculateArea() {
    const xOfBH = calculateBaseXHeight(Number(sides[0].value), Number(sides[1].value));
    const area = xOfBH / 2;
    outputEl.innerText = "The area of triangle is " + area + " cm² ."
}

areaBtn.addEventListener("click", calculateArea);