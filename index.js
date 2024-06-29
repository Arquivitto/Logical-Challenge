function nameHero(){

    const readline = require('readline');
    const askName = readline.createInterface({
        input: process.stdin,
        output: process.stout
    });

    askName.question("Qual é o seu nome? ", (heroName) => {
        console.log("Olá, " + heroName);
        askName.close();
    });
}

nameHero();