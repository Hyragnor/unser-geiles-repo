import {ASSETS, preload} from '../preload';

export default class TestScene extends Phaser.Scene {
    preload() {
        preload(this);
    }

    create() {
        const map = this.make.tilemap({key: ASSETS.MAP});
        const tileset = map.addTilesetImage(ASSETS.TILES_NAME, ASSETS.TILES);
        const undestructible = map.createLayer(ASSETS.TILE_LAYER_NON_DESTRUCTIBLE, tileset);
        const destructible = map.createLayer(ASSETS.TILE_LAYER_DESTRUCTIBLE, tileset);

        this.physics.add.sprite(4, 4, ASSETS.TEXTURES);

        //map.createStaticLayer('undestructible', tileset, 0, 0);
    }
}