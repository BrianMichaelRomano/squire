import Controller from './controller.js';

export default class Listeners {
  static registerListeners() {
    document.addEventListener('click', this.onClick.bind(this));
  }

  static exploreBtn() {
    Controller.spawnEnemy();
  }

  static attackBtn() {
    Controller.attack('squire', 'enemy');
  }

  static onClick(e) {
    if (this[e.target.id]) {
      this[e.target.id]();
    }
  }
}
