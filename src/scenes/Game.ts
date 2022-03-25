import Phaser from 'phaser';
import { Player, player } from '../entities/player';
import { Entity } from '../types';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  enitites: Entity[] = [];
  player: Player | null = null;

  preload() {
    this.load.image('logo', 'assets/phaser3-logo.png');
  }

  create() {
    // setup all required assets here
    // const logo = this.add.image(400, 70, 'logo');

    // this.tweens.add({
    //   targets: logo,
    //   y: 350,
    //   duration: 1500,
    //   ease: 'Sine.inOut',
    //   yoyo: true,
    //   repeat: -1
    // });

    this.player = player();

    this.enitites.push(this.player);
  }

  update(time: number, delta: number) {
    this.enitites.forEach(entity => entity.update());
  }

}
