import sanityClient from '$lib/sanityClient';
import { authorQuery } from '$lib/queries';
import type { AuthorQueryResult } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;
	const data: AuthorQueryResult = await sanityClient.fetch(authorQuery, { slug });
	const { author } = data;
	const title = `author: ${author.name}`;
	if (author) {
		return {
			author,
			title
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
