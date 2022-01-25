import { Chance } from 'chance';
import { Mappable } from './CustomMap';

export class User implements Mappable {
	name: string;
	location: { lat: number; lng: number };
	constructor() {
		this.name = Chance().first();
		this.location = {
			lat: Chance().latitude(),
			lng: Chance().longitude(),
		};
	}

	markerContent(): string {
		return `User Name: ${this.name}`;
	}
}
