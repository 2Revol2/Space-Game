const timer = document.querySelector(".timer")

export function startTimer() {
    let seconds = 0;
    setInterval(() => {
        seconds++
        timer.textContent = `${seconds} sec`;
    }, 1000);
}

