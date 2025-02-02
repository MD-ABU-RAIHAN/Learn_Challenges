
// Guess My Number!
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.getElementById('check').addEventListener('click', () => {
    const guess = Number(document.getElementById('guess').value);
    const message = document.querySelector('.message');

    if (!guess) {
        message.textContent = "⛔ No Number!";
    } else if (guess === secretNumber) {
        message.textContent = "🎉 Correct Number!";
        document.querySelector('.number').textContent = secretNumber;

        document.body.style.background = "#60b347"

        if (score > highScore) {
            highScore = score;
            document.getElementById('highscore').textContent = highScore;
        }

    } else if (guess !== secretNumber) {
        if (score >= 1) {
            message.textContent = guess > secretNumber ? '📈 Too Hign!' : "📉 Too Low!";
            score--;
            document.getElementById('score').textContent = score;
        } else {
            message.textContent = "💥 You Lost The Game! "
        }
    }
});

document.getElementById('again').addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.getElementById("score").textContent = score;
    document.getElementById('guess').value = "";
    document.querySelector('.message').textContent = "Start Guessing...";
    document.querySelector('.number').textContent = "?";
    document.body.style.background = "#fff";


})

/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 
*/
const tipCalculator = (bills) => {

    bills.forEach(bill => {
        const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100).toFixed(2) : bill * (20 / 100).toFixed(2);
        tips.push(tip);
        totals.push(tip + bill);
    });

    console.log(bills.reduce((a, bill) => a + bill, 0) / bills.length);

}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
tipCalculator(bills);
console.log(tips, totals)

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀
*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: "Johan Mill",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}!`);
} else if (mark.bmi < john.bmi) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is Lower than ${john.fullName}'s ${john.bmi}!`);
}







// Coding Challenge #1

/* Mark and John are trying to compare their BMI(Body Mass Index), which is 
calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76 
m tall.
GOOD LUCK � */

const massMark = 18;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.88;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIJohn, BMIMark)

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � 
*/
console.log(BMIMark > BMIJohn ? `Mark's (${BMIMark.toFixed(2)}) BMI is higher than John's (${BMIJohn.toFixed(2)})!` : `John's (${BMIJohn.toFixed(2)}) BMI is higher than Mark's (${BMIMark.toFixed(2)})!`)

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �
*/

const scoresDolphins = [96, 108, 89];
const scoresKoalas = [88, 91, 110];

const avgDolphins = scoresDolphins.reduce((a, score) => a + score, 0) / scoresDolphins.length;
const avgKoalas = scoresKoalas.reduce((a, score) => a + score, 0) / scoresKoalas.length;

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log("Winner is Dolphins 🏆🏆🏆");
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log("Winner is Koalas 🏆🏆🏆");
} else if (avgKoalas == avgDolphins && avgDolphins >= 100 & avgKoalas >= 100) {
    console.log("Draw ");
} else {
    console.log("no team wins the trophy");
}

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK �
*/
// const tipCalculator = (bill) => {
//     const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100).toFixed(2) : bill * (20 / 100).toFixed(2);
//     return `The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`
// }
// console.log(tipCalculator(275));
// console.log(tipCalculator(40));
// console.log(tipCalculator(430));


