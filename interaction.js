const btn = document.getElementById("meow-btn");
let clickCount = 0;

function addCounter() {
    if (clickCount < 10) {
        clickCount++;
        btn.innerHTML = `${clickCount.toString()}/10`;
    }
}

btn.addEventListener("click", addCounter);
