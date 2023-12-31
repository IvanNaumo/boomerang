// Основной файл.
// Запускает игру.
const Game = require('./src/Game');
const runInteractiveConsole = require('./src/keyboard');
// Инициализация игры с настройками.
const game = new Game({
  trackLength: 80,
});

// Запуск игры.
game.play();
// Юра. Иван. Парвиз

runInteractiveConsole(game);
module.exports = game;
