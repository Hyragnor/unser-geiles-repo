import Phaser from 'phaser';
import { ASSETS, preload } from '../preload';
import { Player, player } from '../entities/player';
import { Entity } from '../types';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  enitites: Entity[] = [];
  player: Player | null = null;

  preload() {
    preload(this);
  }

  create() {
    const map = this.make.tilemap({key: ASSETS.MAP});
    const tileset = map.addTilesetImage(ASSETS.TILES_NAME, ASSETS.TILES);
    const undestructible = map.createLayer(ASSETS.TILE_LAYER_NON_DESTRUCTIBLE, tileset);
    const destructible = map.createLayer(ASSETS.TILE_LAYER_DESTRUCTIBLE, tileset);

    this.anims.createFromAseprite(ASSETS.BLUE_PLAYER);

    this.player = player(this.physics.add.sprite(3, 3, ASSETS.BLUE_PLAYER));

    this.enitites.push(this.player);
  }

  update(time: number, delta: number) {
    const cursors = this.input.keyboard.createCursorKeys();
    this.enitites.forEach(entity => entity.update({ cursors }));
  }

}
