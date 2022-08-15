const quotes = [
    "Frankly my dear, I don't give a damn.",
    "I'm gonna make him an offer he can't refuse",
    "Toto, I've a feeling we're not in Kansas anymore.",
    "Here's looking at you kid.",
    "Go ahead, make my day.",
    "You had me at hello.",
    "May the Force be with you.",
    "I'm not wearing hockey pads."
];

const characters = [
    "Batman",
    "Obi-Wan Kenobi",
    "Vito Corleone",
    "Dorothy",
    "Rick Blaine",
    "Harry Callahan",
    "Rhett Butler"
];

const films = [
    "The Dark Knight",
    "Star Wars",
    "The Godfather",
    "The Wizard of Oz",
    "Casablanca",
    "Gone with the Wind",
    "Jerry Maguire"
];

function generateQuote() {
    const quoteInd = Math.floor(Math.random() * quotes.length);
    const charInd = Math.floor(Math.random() * characters.length);
    const filmInd = Math.floor(Math.random() * films.length);

    const quote = quotes[quoteInd];
    const character = characters[charInd];
    const film = films[filmInd];

    return `\"${quote}\" -${character} (${film})`;
}

console.log(generateQuote());