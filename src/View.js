// Сделаем отдельный класс для отображения игры в консоли.
const Game = require('../src/Game');

class View{
  constructor(game){
    this.game = game;
    this.count = this.count
  }
  render() {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    console.log(this.game.track.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
