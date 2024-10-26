import sanityClient from '$lib/sanityClient';
import { layoutQuery } from '$lib/queries';
import type { LayoutQueryResult } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	const data: LayoutQueryResult = await sanityClient.fetch(layoutQuery);
	// TODO: make these always return something, they should be singletons in studio.
	const { site, home, menu } = data;
	if (site && home && menu) {
		return {
			site,
			home,
			menu
		};
	}
	// TODO: handle error status in front end.
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
