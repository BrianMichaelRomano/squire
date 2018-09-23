import { Enemy } from './Models.js';

export default class Entity {
  constructor(isPlayer, health, attack, defense, damage, armor, name) {
    this.isPlayer = isPlayer;
    this.attack = attack;
    this.health = health;
    this.defense = defense;
    this.damage = damage;
    this.armor = armor;
    this.name = name;
  }

  static spawnEnemy() {
    return new Entity(
      Enemy.isPlayer,
      Enemy.health,
      Enemy.attack,
      Enemy.defense,
      Enemy.damage,
      Enemy.armor,
      Enemy.name
    );
  }
}
