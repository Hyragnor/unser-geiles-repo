import tiles from './assets/brick-sheet.png';
import mapJson from './assets/map.json';
import textures from './assets/textures.png';
import texturesJson from './assets/textures.json';

const ASSETS = {
    TILES: 'tiles',
    TILES_NAME: 'brick-sheet',
    TILE_LAYER_NON_DESTRUCTIBLE: 'undestructible',
    TILE_LAYER_DESTRUCTIBLE: 'destructible',
    MAP: 'map',
    TEXTURES: 'textures'
};

const preload = (context: Phaser.Scene) => {
    context.load.image(ASSETS.TILES, tiles);
    context.load.tilemapTiledJSON(ASSETS.MAP, mapJson);
    context.load.aseprite(ASSETS.TEXTURES, textures, texturesJson);
}

export {ASSETS, preload};