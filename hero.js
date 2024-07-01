// Declare variables to store the hero's name, rank, and experience points
let nameHero = "";
let rankHero = "";
let levelPoints = 0;

// Require the readline module for user input
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask the hero's name
function heroName(){
  rl.question("Herói, me diga qual é o seu nome?\n", (name) => {
    nameHero = name; // Store the hero's name
    console.log("\nOlá, " + name + "! Seja bem-vindo a Code Land, a terra dos heróis!"); // Greet the hero
    heroRank(nameHero); // Call the next function to ask for experience points
  });
}

// Function to ask for the hero's experience points
function heroRank(nameHero){
  rl.question("\nQuantos pontos de experiência você possui?\n", (rank) => {
    levelPoints = parseInt(rank); // Store the experience points as an integer
    console.log("\n" + nameHero + ", você possui " + levelPoints + " pontos de experiência."); // Confirm the points
    heroClass(levelPoints); // Call the next function to determine the hero's rank
    rl.close(); // Close the readline interface
  });
}

// Function to determine the hero's rank based on experience points
function heroClass(levelPoints){
  console.log("\nCom base nos seus pontos de experiência, seu rank de herói é:");

  // Determine the hero's rank based on experience points
  if (levelPoints <= 1000){
    rankHero = "Ferro";
    console.log(rankHero + "! Continue trabalhando duro pra elevar seu rank!");
  } 
  else if (levelPoints >= 1001 && levelPoints <= 2000){
    rankHero = "Bronze";
    console.log(rankHero + "! Continue trabalhando duro pra elevar seu rank!");
  } 
  else if (levelPoints >= 2001 && levelPoints <= 5000){
    rankHero = "Prata";
    console.log(rankHero + "! Continue trabalhando duro pra elevar seu rank!");
  } 
  else if (levelPoints >= 5001 && levelPoints <= 7000){
    rankHero = "Ouro";
    console.log(rankHero + "! Continue trabalhando duro pra elevar seu rank!");
  } 
  else if (levelPoints >= 7001 && levelPoints <= 8000){
    rankHero = "Platina";
    console.log(rankHero + "! Continue trabalhando duro pra elevar seu rank!");
  } 
  else if (levelPoints >= 8001 && levelPoints <= 9000){
    rankHero = "Ascendente";
    console.log(rankHero + "! Seus feitos ecoam por toda Code Land!");
  }
  else if (levelPoints >= 9001 && levelPoints <= 10000){
    rankHero = "Imortal";
    console.log(rankHero + "! Considerado uma Lenda-viva entre os heróis!");
  }
  else if (levelPoints >= 10000){
    rankHero = "Radiante";
    console.log(rankHero + "! Um rei entre os heróis!");
  }
}

// Start the process by asking for the hero's name
heroName();

