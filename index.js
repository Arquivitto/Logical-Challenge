let nameHero = "";
let rankHero = "";
let levelPoints = 0;

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function heroName(){
  rl.question("Herói, me diga qual é o seu nome?\n", (name) => {
    nameHero = name;
    console.log("\nOlá, " + name + "! Seja bem-vindo a Code Land, a terra dos heróis!");
    heroRank(nameHero);
  });
}

function heroRank(nameHero){
  rl.question("\nQuantos pontos de experiência você possui?\n", (rank) => {
    levelPoints = parseInt(rank);
    console.log("\n" + nameHero + ", você possui " + levelPoints + " pontos de experiência.");
    heroClass(levelPoints);
    rl.close();
  });
}

function heroClass(levelPoints){
  console.log("\nCom base nos seus pontos de experiência, seu rank de herói é:");

  if (levelPoints <= 1000){
    rankHero = "Ferro";
    console.log(rankHero + "! Continue trabalho duro pra elevar seu rank!");
  } 
  else if (levelPoints >= 1001 && levelPoints <= 2000){
    rankHero = "Bronze";
    console.log(rankHero + "! Continue trabalho duro pra elevar seu rank!");
  } 
  else if (levelPoints >= 2001 && levelPoints <= 5000){
    rankHero = "Prata";
    console.log(rankHero + "! Continue trabalho duro pra elevar seu rank!");
  } 
  else if (levelPoints >= 5001 && levelPoints <= 7000){
    rankHero = "Ouro";
    console.log(rankHero + "! Continue trabalho duro pra elevar seu rank!");
  } 
  else if (levelPoints >= 7001 && levelPoints <= 8000){
    rankHero = "Platina";
    console.log(rankHero + "! Continue trabalho duro pra elevar seu rank!");
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
}}

heroName();

