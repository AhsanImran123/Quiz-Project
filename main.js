import inquirer from "inquirer";
console.log("Welcome to Adventure Quiz game:");
console.log("you are required to gain maximum 4 points for the window.");
let points = 0;
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "typescript is a superset off?",
        type: "list",
        choices: ["python", "c++", "java", "javascript"]
    }
]);
if (question1.one == "javascript") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "who is the founder of microsoft?",
        type: "list",
        choices: ["elon musk", "bill gates", "mark", "Ali"]
    }
]);
if (question2.two == "bill gates") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "capital of Pakistan?",
        type: "list",
        choices: ["Islamabad", "Karachi", "Faislabad", "Lahore"]
    }
]);
if (question3.three == "Islamabad") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "who is the current Governor of sindh?",
        type: "list",
        choices: ["Kamran Tessori", "Bilawal", "Shahbaz sharif", "Ali"]
    }
]);
if (question4.four == "Kamran Tessori") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "AI Abreviation?",
        type: "list",
        choices: ["Artificial Intelligence", "Artificial Infrastructure", "Associated Intelligence"]
    }
]);
if (question5.five == "Artificial Intelligence") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
if (points >= 4) {
    console.log("Congratulations!");
    console.log(`your points: ${points}`);
}
else {
    console.log("you loss! try next time");
    console.log(`your points: ${points}`);
}
