import sanityClient from '$lib/sanityClient';
import { postQuery } from '$lib/queries';
import type { PostQueryResult } from '$lib/types';

export async function load({ params }: { params: { slug: string } }) {
	const data: PostQueryResult = await sanityClient.fetch(postQuery, { slug: params.slug });
	if (data) {
		return {
			post: data.post
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
