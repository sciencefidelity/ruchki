import sanityClient from '$lib/sanityClient';
import { authorQuery } from '$lib/queries';
import type { AuthorQueryResult } from '$lib/types';

export async function load({ params }: { params: { slug: string } }) {
	const data: AuthorQueryResult = await sanityClient.fetch(authorQuery, { slug: params.slug });
	const { author } = data;
	if (author) {
		return {
			author
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
