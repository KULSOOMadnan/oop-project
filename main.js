#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.gray(`\n\t-------------------------------------------------------------------\n`));
class Person {
    // declare a field to represnt a class 
    personality;
    // constructor 
    constructor() {
        this.personality = "";
    }
    //class method which take one argumment 
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
        console.log(chalk.magenta(`\nYou are ${this.personality}\n`));
    }
    GetPersonality() {
        return this.personality;
    }
}
async function askquestion() {
    let que = await inquirer.prompt({
        name: "ans",
        type: "input",
        message: chalk.rgb(64, 224, 208)("write 1 if you like to talk other, write 2 if you would rather keep to yourself"),
    });
    Mystudent.askQuestion(que.ans);
}
class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = "";
        super.GetPersonality();
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let Mystudent = new Student();
async function Name() {
    await askquestion();
    let ask = await inquirer.prompt({
        name: "name",
        type: "input",
        message: chalk.rgb(64, 224, 208)("what's you name :"),
        validate: (input) => !input || /^[A-Za-z]+$/.test(input) ? true : "please enter only alphabaticl character "
    });
    Mystudent.name = ask.name;
    console.log(chalk.magenta(`\nYour name is ${Mystudent.name} and your peronality type is "${Mystudent.GetPersonality()}"\n`));
}
class Zodiac extends Student {
    constructor() {
        super();
    }
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
async function stars() {
    await Name();
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
    let signs = star.zodicSign(Zs.date, Zs.month);
    console.log(chalk.magentaBright.bold(`\nAccording to you date of birth and month your zodiac sign is ${chalk.cyanBright(signs)}!`));
    console.log(chalk.gray(`\n\t-------------------------------------------------------------------\n`));
}
stars();
