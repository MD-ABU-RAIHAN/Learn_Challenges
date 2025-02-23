// 'use strict'






console.log("============ MAP ===========");
// const rest = new Map();
// rest.set('name', 'ArtSoftBD');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, "Bangladesh"));

// rest
//     .set('categories', ['Web Design', 'Devlopment', 'Graphic Design'])
//     .set('open', 11)
//     .set("close", 23)
//     .set(true, 'we are open ')
//     .set(false, 'we are close');

// console.log(rest.get('name'));

// const time = 8;
// console.log(rest.get(time > rest.get("open")) && rest.get(time < rest.get('close')));

// rest.set(document.querySelector('h1'), "Hading");

// console.log(rest.size);
// console.log(rest);

// const question = new Map([
//     ['question', 'What is the best programming language in the Web Development?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JavaScript'],
//     ['correct', 3],
//     [true, 'Correct 🎉'],
//     [false, 'Try Again! 🔄'],
// ]);
// console.log(question.get("question"));
// for (const [key, value] of question) {
//     if (typeof key === 'number') {
//         console.log(`Option ${key} : ${value}`)
//     }
// }

// let userAns = prompt("Enter Choushen Number: ");
// console.log(question.get(
//     Number(userAns) === question.get("correct")
// ))



// console.log("============ SET ===========");
// const orderSet = new Set([
//     'Pasta',
//     'Pizza',
//     'Pizza',
//     'Risotto',
//     'Pasta',
//     'Pizza',
// ])
// console.log(orderSet);

// console.log(new Set("Shegun"));
// console.log(orderSet.has("Pizza"));
// console.log(orderSet.add("Chili"));
// console.log(orderSet.delete('Pasta'));
// orderSet.clear();
// console.log(orderSet)

// for (const order of orderSet) console.log(order);

// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'clener'];
// const staffUnique = [...new Set(staff)];

// console.log(staffUnique);
// console.log(new Set(staff).size);
// console.log(new Set("md. abu raihan").size)






console.log("============ C2 ============")
// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//         'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };


// /* ************* 1 ************ */
// for (const [i, name] of game.scored.entries()) {
//     console.log(`Gole ${i}: ${name}`);
// }

// /* ************* 2 ************ */
// let average = 0;
// for (const odd of Object.values(game.odds)) {
//     average += odd;
// }
// average /= Object.values(game.odds).length;
// console.log(average);

// /* ************* 3 ************ */
// for (const [team, odd] of Object.entries(game.odds)) {
//     const teamStr = team === 'x' ? 'draw' : `Victury ${game[team]}`;
//     console.log(`Odd of  ${teamStr}: ${odd}`);

// }


// /* ************* 4 ************ */
// const scorers = {};
// for (const player of game.scored) {
//     scorers[player] ? scorers[player]++ : scorers[player] = 1;
// }
// console.log(scorers)



console.log("============ C3 ============");
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

console.log("============1============");
const events = [...new Set(gameEvents.values())];
console.log(events);

console.log("============2============");
gameEvents.delete(64);
console.log(gameEvents);

console.log("============3============");
const playTime = [...gameEvents.keys()].pop();

console.log(`An event happened, on average, every ${playTime / gameEvents.size} minutes`);



console.log("============4============");
for (const [key, value] of gameEvents) {
    console.log(
        key <= 45 ? `[FITST HALF] ${key}: ${value}` : `[SECOND HALF] ${key}: ${value}`
    );
}



console.log("============ C3 ============");
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


const btn = document.querySelector('button');


btn.addEventListener('click', () => {
    const text = document.querySelector('textarea').value;
    const rows = text.toLowerCase().trim().split("\n");
    for (const [i, row] of rows.entries()) {
        const [first, last] = row.split("_");
        const output = `${first}${last.replace(last[0], last[0].toUpperCase())}`
        console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`)
    }
})

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure; fao93766109;lis2323639855;12:30';

const rows = flights.split('+');

for (const [i, row] of rows.entries()) {

    const [state, fao, txl, time] = row.split(';');
    const flightStatus = state.replaceAll('_', " ").trimStart();
    const fristThreeSlice = (text) => text.slice(0, 4).toUpperCase();
    const timeFormater = (time) => time.replaceAll(":", "h")
    console.log(`${flightStatus.startsWith('Delayed') ? "🔴 " + flightStatus : flightStatus} from ${fristThreeSlice(fao)} to ${fristThreeSlice(txl)} (${timeFormater(time)})`.padStart(47))

}
console.log(rows)


