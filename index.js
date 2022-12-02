const Game = require("./src/Game");
const startGame = new Game();
startGame.start();

const count = 0;
const counter = () => console.log(count++);
setInterval(counter, 1000);
