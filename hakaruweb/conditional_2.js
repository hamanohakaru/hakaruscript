// conditional

const age = parseInt(prompt("how old are you?"));

if (isNaN(age)) {
    console.log("Please write a number");
} else if (age < 18) {
    console.log("you are too young.");
} else if (age < 50) {
    console.log("you can drink");
} else {
    console.log("you are too old. and do not drink");
}
