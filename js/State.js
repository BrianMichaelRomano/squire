import Entity from './Entity.js';
import { Squire } from './Models.js';

export default class State {
  static initState() {
    const state = {
      squire: new Entity(
        Squire.isPlayer,
        Squire.health,
        Squire.attack,
        Squire.defense,
        Squire.damage,
        Squire.armor,
        Squire.name
      ),
      enemy: null
    };
    this.setState(state);
  }

  static setState(state) {
    localStorage.setItem('squireState', JSON.stringify(state));
  }

  static getState() {
    if (localStorage.getItem('squireState')) {
      return JSON.parse(localStorage.getItem('squireState'));
    } else {
      this.initState();
      return JSON.parse(localStorage.getItem('squireState'));
    }
  }
}
