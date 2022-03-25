import { Entity } from "../types";

const SPEED = 8;

const player = (sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody): Player => {
	let state: State = 'idle';
	const movement = new Phaser.Math.Vector2();
	sprite.body.setSize(6,6);
	sprite.body.setOffset(2, 2);
	const update = ({ cursors }: { cursors?: Phaser.Types.Input.Keyboard.CursorKeys; }) => {
		sprite.setCollideWorldBounds(true);
		
		if (!cursors) {
			return ;
		}
		
		if (cursors.left.isDown) {
			movement.x = -SPEED;
		} else if (cursors.right.isDown) {
			movement.x = SPEED;
		} else {
			movement.x = 0;
		}

		if (cursors.up.isDown) {
			movement.y = -SPEED;
		}
		else if (cursors.down.isDown) {
			movement.y = SPEED;
		} else {
			movement.y = 0;
		}

		sprite.setVelocity(movement.x, movement.y);
		sprite.body.velocity.normalize().scale(SPEED);
		sprite.play({ key: getAnimKey(movement), repeat: -1 }, true);
	};

	const getAnimKey = (movement: Phaser.Math.Vector2): string => {
		if (movement.x === 0 && movement.y === 0) {
			return 'idle';
		}

		if (movement.y < 0) {
			return 'up';
		}

		if (movement.y > 0) {
			return 'down';
		}

		if (movement.x > 0) {
			return 'right';
		}

		return 'left';
	}
	
	const isDead = () => false;
	return { update, isDead };
}



type State = 'idle' | 'moving' | 'dropping' | 'dead' | 'on a bomb';

export type Player = {
	isDead: () => boolean;
} & Entity;

export { player };
