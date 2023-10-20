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
    this.trackLength = trackLength;
    this.boomerang = new Boomerang(trackLength);
    this.hero = new Hero({ position: 0, boomerang: this.boomerang });
    this.enemy = new Enemy(trackLength);
    this.view = new View(this);
    this.count = 0;
    this.track = [];
    this.life = ['💛', '💛', '💛'];
    this.regenerateTrack();
  }

  regenerateTrack() {
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
      this.life.pop();
      if (this.life.length === 0) {
        this.hero.die();
      }
    }
    if (this.enemy.position === this.hero.boomerang.position) {
      this.enemy.die();
      this.count += 1;
      this.enemy = new Enemy(this.trackLength);
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.regenerateTrack();
      this.check();

      this.enemy.moveLeft();
      this.view.render(this.track);
    }, 50);
  }
}

module.exports = Game;
