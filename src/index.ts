import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './CustomMap';

const user = new User();
const map = new CustomMap('map');
map.addMarker(user);
map.addMarker(new Company());
map.addMarker({
	location: {
		lat: 5.6773284,
		lng: -0.1963456,
	},
	markerContent: () => 'hi',
});
