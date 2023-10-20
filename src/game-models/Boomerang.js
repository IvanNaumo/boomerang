// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(trackLength) {
    this.skin = '🌀';
    this.position = -1;
    this.trackLength = trackLength;
  }

  fly() {
    const boomerangDistance = 10;
    for (let i = 1; i <= boomerangDistance; i += 1) {
      setTimeout(() => this.moveRight(1), 100 * i);
    }
    for (let i = 1; i <= boomerangDistance; i += 1) {
      setTimeout(() => this.moveRight(1), 100 * (boomerangDistance + i));
    }
    setTimeout(() => this.reset(), 100 * (boomerangDistance * 2));
  }

  reset() {
    this.position = -1;
  }

  moveLeft(distance) {
    // Идём влево.
    this.position -= distance;
  }

  moveRight(distance) {
    // Идём вправо.
    this.position += distance;
  }
}

module.exports = Boomerang;
