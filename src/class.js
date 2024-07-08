const readline = require('readline'); // Import the readline module for user input

const rl = readline.createInterface({ // Create an interface for reading from standard input (stdin) and writing to standard output (stdout)
  input: process.stdin,
  output: process.stdout
});

class Hero { // Define a Hero class to represent a character in the game
  constructor(heroName, heroAge, heroType) { // Constructor to initialize hero properties
    this.heroName = heroName;
    this.heroAge = heroAge;
    this.heroType = heroType;
  }

  async main() { // Asynchronous main method for the Hero object
    this.heroName = await this.askName(); // Get the hero's name asynchronously using await
    this.heroAge = await this.askAge();   // Get the hero's age asynchronously using await
    this.heroType = await this.askType();  // Get the hero's class asynchronously using await
    this.attack();                         // Call the attack method after user input is complete
    rl.close();                             // Close the readline interface when done
  }

  askName() { // Function to prompt the user for their name and return it as a Promise
    return new Promise((resolve) => {
      rl.question("Seja bem vindo(a)! Grande Herói, diga-me o seu nome?\n", (adventurer) => {
        resolve(adventurer); // Resolve the Promise with the user's name
      });
    });
  }

  askAge() { // Function to prompt the user for their age and return it as a Promise
    return new Promise((resolve) => {
      rl.question("Grande Herói, diga-me a sua idade?\n", (age) => {
        resolve(age); // Resolve the Promise with the user's age
      });
    });
  }

  askType() { // Function to prompt the user for their hero class and return it as a Promise
    return new Promise((resolve) => {
      rl.question("Grande Herói, diga-me a sua classe? Você poderá escolher entre as classes:\nMago, Guerreiro, Monge e Ninja.\n", (type) => {
        resolve(type); // Resolve the Promise with the user's chosen class
      });
    });
  }

  attack() { // Method to determine and display the hero's attack based on their class
    let attackMessage = "";
    switch (this.heroType) {
      case "Mago":
        attackMessage = "usou magia"; // Mage uses magic
        break;
      case "Guerreiro":
        attackMessage = "usou uma espada"; // Warrior uses a sword
        break;
      case "Monge":
        attackMessage = "usou artes marciais"; // Monk uses martial arts
        break;
      case "Ninja":
        attackMessage = "usou shuriken"; // Ninja uses shuriken
        break;
      default:
        attackMessage = "usou um ataque desconhecido"; // Default for unknown class
        break;
    }
    console.log(`O herói ${this.heroName} da classe ${this.heroType} de ${this.heroAge} anos atacou ${attackMessage}!`);
  }
}

let newHero = new Hero("", "", ""); // Create a new Hero object with initial empty properties
newHero.main(); // Call the main method to start the game loop
