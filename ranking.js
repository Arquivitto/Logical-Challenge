let numberOfVictories = 0;  // Variable to store the number of victories
let numberOfLosses = 0;     // Variable to store the number of losses
let numberOfGames = 0;      // Variable to store the total number of games
let playerRank = "";        // Variable to store the player's rank
let playerName = "";        // Variable to store the player's name

const readline = require('readline');  // Import the readline module for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main function to execute the game logic
async function main(){
    playerName = await askName();  // Ask for the player's name
    numberOfVictories = await winningGames();  // Ask for the number of victories
    numberOfLosses = await lostGames();  // Ask for the number of losses
    numberOfGames = allGames(numberOfVictories, numberOfLosses);  // Calculate total games
    rankClassifier(playerName, numberOfVictories);  // Determine and display the player's rank
    rl.close();  // Close the readline interface
}

// Function to ask for the player's name
function askName(){
    return new Promise((resolve) => {
        rl.question("Seja bem vindo(a)! Grande Herói, diga-me o seu nome?\n", (hero) => {
           resolve(hero);  // Resolve the promise with the player's name
        });
    });
}

// Function to ask for the number of victories
function winningGames(){
    return new Promise((resolve) => {
        rl.question("Olá " + playerName + "! quantas vitórias você possui?\n", (victories) => {
            resolve(parseInt(victories, 10));  // Resolve the promise with the number of victories
        });
    });
}

// Function to ask for the number of losses
function lostGames(){
    return new Promise((resolve) => {
        rl.question("Olá " + playerName +"! quantas derrotas você possui?\n", (defeats) => {
            resolve(parseInt(defeats, 10));  // Resolve the promise with the number of losses
        });
    });
}

// Function to calculate the total number of games
function allGames(numberOfVictories, numberOfLosses){
    return numberOfVictories + numberOfLosses;
}

// Function to classify and display the player's rank based on the number of victories
function rankClassifier(playerName, numberOfVictories){
    console.log(playerName + ", com base no seu número de vitórias, o seu ranking é: ");
    if (numberOfVictories < 10){
        playerRank = "Ferro!";
        console.log(playerRank + "\nO Herói tem o saldo de " + numberOfVictories + " vitórias após " + numberOfGames + " jogos, continue trabalhando duro para alcançar um novo rank!");
    } else if (numberOfVictories >= 11 && numberOfVictories <= 20){
        playerRank = "Bronze!";
        console.log(playerRank + "\nO Herói tem o saldo de " + numberOfVictories + " vitórias após " + numberOfGames + " jogos, continue trabalhando duro para alcançar um novo rank!");
    } else if (numberOfVictories >= 21 && numberOfVictories <= 50){
        playerRank = "Prata!";
        console.log(playerRank + "\nO Herói tem o saldo de " + numberOfVictories + " vitórias após " + numberOfGames + " jogos, continue trabalhando duro para alcançar um novo rank!");
    } else if (numberOfVictories >= 51 && numberOfVictories <= 80){
        playerRank = "Ouro!";
        console.log(playerRank + "\nO Herói tem o saldo de " + numberOfVictories + " vitórias após " + numberOfGames + " jogos, continue trabalhando duro para alcançar um novo rank!");
    } else if (numberOfVictories >= 81 && numberOfVictories <= 90){
        playerRank = "Diamante!";
        console.log(playerRank + "\nO Herói tem o saldo de " + numberOfVictories + " vitórias após " + numberOfGames + " jogos, continue trabalhando duro para alcançar um novo rank!");
    } else if(numberOfVictories >= 91 && numberOfVictories <= 100){
        playerRank = "Lendário!";
        console.log(playerRank + "\nO Herói tem o saldo de " + numberOfVictories + " vitórias após " + numberOfGames + " jogos, sua habilidade é digna de uma lenda!");
    } else if (numberOfVictories >= 101){
        playerRank = "Imortal!";
        console.log(playerRank + "\nO Herói tem o saldo de " + numberOfVictories + " vitórias após " + numberOfGames + " jogos," + " dizem que " + playerName + " é aquele(a) que não conhecerá a morte!");
    }
}

main();  // Execute the main function to start the game
