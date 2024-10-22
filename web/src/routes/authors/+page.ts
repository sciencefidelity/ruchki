import sanityClient from '$lib/sanityClient';
import { authorsQuery } from '$lib/queries';
import type { AuthorsQueryResult } from '$lib/types';

export async function load() {
	const data: AuthorsQueryResult = await sanityClient.fetch(authorsQuery);
	let { authors } = data;
	if (authors) {
		return {
			authors
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
