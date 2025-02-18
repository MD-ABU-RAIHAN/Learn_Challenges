// 'use strict'


console.log("============ MAP ===========");
const rest = new Map();
rest.set('name', 'ArtSoftBD');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, "Bangladesh"));

rest
    .set('categories', ['Web Design', 'Devlopment', 'Graphic Design'])
    .set('open', 11)
    .set("close", 23)
    .set(true, 'we are open ')
    .set(false, 'we are close');

console.log(rest.get('name'));

const time = 8;
console.log(rest.get(time > rest.get("open")) && rest.get(time < rest.get('close')));

rest.set(document.querySelector('h1'), "Hading");

console.log(rest.size);
console.log(rest);


console.log("============ SET ===========");
const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
])
console.log(orderSet);

console.log(new Set("Shegun"));
console.log(orderSet.has("Pizza"));
console.log(orderSet.add("Chili"));
// console.log(orderSet.delete('Pasta'));
// orderSet.clear();
console.log(orderSet)

for (const order of orderSet) console.log(order);

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'clener'];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);
console.log(new Set(staff).size);
console.log(new Set("md. abu raihan").size)






console.log("============ C2 ============")
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


/* ************* 1 ************ */
for (const [i, name] of game.scored.entries()) {
    console.log(`Gole ${i}: ${name}`);
}

/* ************* 2 ************ */
let average = 0;
for (const odd of Object.values(game.odds)) {
    average += odd;
}
average /= Object.values(game.odds).length;
console.log(average);

/* ************* 3 ************ */
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `Victury ${game[team]}`;
    console.log(`Odd of  ${teamStr}: ${odd}`);

}


/* ************* 4 ************ */
const scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : scorers[player] = 1;
}
console.log(scorers)


