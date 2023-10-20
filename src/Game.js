// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
const Boomerang = require('./game-models/Boomerang');
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.boomerang = new Boomerang({ trackLength });
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0, boomerang: this.boomerang }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({ position: trackLength });
    this.view = new View(this);
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    if (
      this.hero.boomerang.position >= 0 &&
      this.hero.boomerang.position < this.trackLength
    ) {
      this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    }
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (this.enemy.position === this.hero.boomerang.position) {
      this.enemy.die();
      this.enemy = new Enemy({ position: this.trackLength });
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.enemy.moveLeft();
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 500);
  }
}

module.exports = Game;
