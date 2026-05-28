const btn = document.querySelector('.element');
let clickCount = 0;

function addCounter() {
    if (clickCount < 10) {
        clickCount++;
        btn.innerHTML = `${clickCount.toString()}/10`;
    }
}
