import { Entity } from "../types";

const player = (): Player => {
	const state: State = 'idle';
	const update = () => null;
	const isDead = () => false;
	return { update, isDead };
}

type State = 'idle' | 'moving' | 'dropping' | 'dead' | 'on a bomb';

export type Player = {
	isDead: () => boolean;
} & Entity;

export { player };