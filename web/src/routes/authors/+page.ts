import sanityClient from '$lib/sanityClient';
import { authorsQuery } from '$lib/queries';
import type { AuthorsQueryResult } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const data: AuthorsQueryResult = await sanityClient.fetch(authorsQuery);
	const { authors } = data;
	const title = 'All Authors';
	if (authors) {
		return {
			authors,
			title
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
