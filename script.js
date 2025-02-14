function nextStep(step) {
    document.getElementById(`step${step}`).classList.add("hidden");

    let nextStep = step + 1;
    let nextElement = document.getElementById(`step${nextStep}`);

    if (nextElement) {
        nextElement.classList.remove("hidden");
    } else {
        document.getElementById("final-message").classList.remove("hidden");
    }
}
