import { Chance } from 'chance';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
	name: string;
	catchPhrase: string;
	location: { lat: number; lng: number };

	constructor() {
		this.name = Chance().company();
		this.catchPhrase = Chance().sentence({ punctuation: '!' });
		this.location = {
			lat: Chance().latitude(),
			lng: Chance().longitude(),
		};
	}

	markerContent(): string {
		return `
		<div>
		<h1>Company Name: ${this.name}</h1>
		<h3>Catch Phrase: ${this.catchPhrase}</h3>
		</div>
		`;
	}
}
