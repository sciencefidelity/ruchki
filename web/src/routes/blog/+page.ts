import sanityClient from '$lib/sanityClient';
import { blogQuery } from '$lib/queries';
import type { BlogQueryResult } from '$lib/types';

export async function load() {
	const data: BlogQueryResult = await sanityClient.fetch(blogQuery);
	let { posts } = data;
	if (posts) {
		return {
			posts
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
