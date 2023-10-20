// Сделаем отдельный класс для отображения игры в консоли.
const Game = require('../src/Game');

class View {
  constructor(game) {
    this.game = game;
  }

  render() {
    const yourTeamName = 'IPU';

    // Тут всё рисуем.
    console.clear();
    console.log(this.game.track.join(''));
    console.log('\n\n');
    console.log(
      `Your life: ${this.game.life.join('')}\nYour score: ${this.game.count} \nCreated by "${yourTeamName}" with love`
    );
  }
}

module.exports = View;
