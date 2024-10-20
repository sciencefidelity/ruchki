import sanityClient from '$lib/sanityClient';
import { layoutQuery } from '$lib/queries';
import type { Home, Site } from '$lib/interfaces';

export async function load() {
	const data: { site: Site; home: Home } = await sanityClient.fetch(layoutQuery);
	const { site, home } = data;
	if (site) {
		return {
			site,
			home
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
