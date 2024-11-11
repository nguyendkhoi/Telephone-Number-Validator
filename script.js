const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const answer = document.getElementById("results-div");

const checkNumber = (input) => {
    const regex = /^([1-9][0-9]?)?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s.-]?\d{4}$/;
    return regex.test(input) ? "Valid US number: " : "Invalid US number: ";
}

checkBtn.addEventListener("click", (event) => {
    const input = document.getElementById("user-input").value;
    if(input === "") {
        alert("Please provide a phone number");
    } else {
        answer.innerHTML += `<p>${checkNumber(input) + input}</p>`;
    }
});

clearBtn.addEventListener("click", () => {
    answer.textContent = "";
    document.getElementById("user-input").value = "";
});