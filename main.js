#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.gray(`\n\t-------------------------------------------------------------------\n`));
// Define the Person class to manage user personality
class Person {
    // declare a field to represnt a class 
    personality;
    // Constructor to initialize the personality property
    constructor() {
        this.personality = "";
    }
    // Method to set personality based on user input
    askQuestion(answer) {
        //condition regarding parameter
        switch (answer) {
            case "1":
                this.personality = "Extrovert";
                break;
            case "2":
                this.personality = "Introvert";
                break;
            default:
                this.personality = " Still Mystery";
        }
        // Print the user's personality to the console
        console.log(chalk.magenta(`\nYou are ${this.personality}\n`));
    }
    // Method to get the current personality
    GetPersonality() {
        return this.personality;
    }
}
// Function to prompt the user with a personality question
async function askquestion() {
    // Ask the user to choose between extrovert and introvert
    let que = await inquirer.prompt({
        name: "ans",
        type: "input",
        message: chalk.rgb(64, 224, 208)("write 1 if you like to talk other, write 2 if you would rather keep to yourself"),
    });
    // Set the user's personality based on the answer
    Mystudent.askQuestion(que.ans);
}
// Define the Student class to manage user details
class Student extends Person {
    _name;
    // Constructor to initialize the name property
    constructor() {
        super();
        this._name = "";
        super.GetPersonality();
    }
    // Getter and setter for name property
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
// Create a new instance of the Student class
let Mystudent = new Student();
//taking user personality 
async function Name() {
    await askquestion();
    let ask = await inquirer.prompt({
        name: "name",
        type: "input",
        message: chalk.rgb(64, 224, 208)("what's you name :"),
        // Validate that the name contains only alphabetical characters
        validate: (input) => !input || /^[A-Za-z]+$/.test(input) ? true : "please enter only alphabaticl character "
    });
    // Set the user's name based on the input
    Mystudent.name = ask.name;
    // Print the user's name and personality to the console
    console.log(chalk.magenta(`\nYour name is ${Mystudent.name} and your peronality type is "${Mystudent.GetPersonality()}"\n`));
}
class Zodiac extends Student {
    constructor() {
        super();
    }
    // Method to determine zodiac sign based on date and month   
    zodicSign(date, month) {
        switch (month) {
            case 3:
                if (date >= 21)
                    return "Aries";
                break;
            case 4:
                if (date <= 19)
                    return "Aries";
                if (date >= 20)
                    return "Taurus";
                break;
            case 5:
                if (date <= 20)
                    return "Taurus";
                if (date >= 21)
                    return "Gemini";
                break;
            case 6:
                if (date <= 20)
                    return "Gemini";
                if (date >= 21)
                    return "Cancer";
                break;
            case 7:
                if (date <= 22)
                    return "Cancer";
                if (date >= 23)
                    return "Leo";
                break;
            case 8:
                if (date <= 22)
                    return "Leo";
                if (date >= 23)
                    return "Virgo";
                break;
            case 9:
                if (date <= 22)
                    return "Virgo";
                if (date >= 23)
                    return "Libra";
                break;
            case 10:
                if (date <= 22)
                    return "Libra";
                if (date >= 23)
                    return "Scorpio";
                break;
            case 11:
                if (date <= 21)
                    return "Scorpio";
                if (date >= 22)
                    return "Sagittarius";
                break;
            case 12:
                if (date <= 21)
                    return "Sagittarius";
                if (date >= 22)
                    return "Capricorn";
                break;
            case 1:
                if (date <= 19)
                    return "Capricorn";
                if (date >= 20)
                    return "Aquarius";
                break;
            case 2:
                if (date <= 18)
                    return "Aquarius";
                if (date >= 19)
                    return "Pisces";
                break;
            case 3:
                if (date <= 20)
                    return "Pisces";
                break;
            default:
                return "Invalid date";
        }
    }
}
let star = new Zodiac();
// Function to prompt the user for their date and month of birth
async function stars() {
    await Name();
    // Ask the user to enter their date and month of birth
    let Zs = await inquirer.prompt([
        {
            name: 'date',
            type: "number",
            message: chalk.rgb(64, 224, 208)("Enter your date of birth (1-31): "),
            validate: (number) => !number || /^\d+$/.test(number) ? true : "please enter only alphabatical character "
        }, {
            name: 'month',
            type: "number",
            message: chalk.rgb(64, 224, 208)("Enter your month of birth (1-12): "),
            validate: (number) => !number || /^\d+$/.test(number) ? true : "please enter only alphabatical character "
        }
    ]);
    //  Determine the user's zodiac sign based on the input
    let signs = star.zodicSign(Zs.date, Zs.month);
    // Print the user's zodiac sign to the console
    console.log(chalk.magentaBright.bold(`\nAccording to you date of birth and month your zodiac sign is ${chalk.cyanBright(signs)}!`));
    console.log(chalk.gray(`\n\t-------------------------------------------------------------------\n`));
}
// Start the program by prompting the user for their information
stars();
