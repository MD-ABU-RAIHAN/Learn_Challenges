'use strict'

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
for (const odd of game.odds) {

}