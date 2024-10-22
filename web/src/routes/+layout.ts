import sanityClient from '$lib/sanityClient';
import { layoutQuery } from '$lib/queries';
import type { LayoutQueryResult } from '$lib/types';

export async function load() {
	const data: LayoutQueryResult = await sanityClient.fetch(layoutQuery);
	const { site, home, menu } = data;
	if (site) {
		return {
			site,
			home,
			menu
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
